import { Component, OnInit } from '@angular/core';
import { PartnerOrganizationService } from '../../../../services/partner-organization/partner-organization.service';
import { ActivatedRoute } from '@angular/router';
import { PartnerOrganization } from 'src/app/models/partner-organization/PartnerOrganization.model';
import { PartnerOrganizationLang } from '../../../../models/partner-organization/PartnerOrganizationLang.model';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-partner-organization',
  templateUrl: './new-partner-organization.component.html',
  styleUrls: ['./new-partner-organization.component.css'],
})
export class NewPartnerOrganizationComponent implements OnInit {
  partner: FormGroup;
  // partner : PartnerOrganization;
  partnerModel = new PartnerOrganization();
  partnerEn = new PartnerOrganizationLang();
  partnerSp = new PartnerOrganizationLang();

  validURL = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  button = 1;

  constructor(
    private partnerService: PartnerOrganizationService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.PartnerOrganizationForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngSubmit() {
    if (this.partner.get('id').value == null) {
      this.updatePartnerOrganization();
    } else {
      this.createPartnerOrganization();
    }
  }

  createPartnerOrganization() {
    this.partnerModel.id = this.partner.get('id').value;
    this.partnerModel.logo = this.partner.get('logo').value;
    this.partnerModel.name = this.partner.get('name').value;
    this.partnerModel.url_site = this.partner.get('url_site').value;

    this.partnerService.createPartnerOrganization(this.partnerModel).subscribe(
      (resp: any) => {
        this.partnerEn.partner_organization_fk = resp.Id;
        this.partnerEn.category_languajes_fk = 1;
        this.partnerEn.description = this.partner.get('descriptionEn').value;

        this.partnerSp.partner_organization_fk = resp.Id;
        this.partnerSp.category_languajes_fk = 2;
        this.partnerSp.description = this.partner.get('descriptionSp').value;

        this.createPartnerOrganizationDescription(this.partnerEn);
        this.createPartnerOrganizationDescription(this.partnerSp);

        Swal.fire(
          this.partner.get('name').value + ' was added',
          'Click ok',
          'success'
        );
      },
      (error) => {
        Swal.fire('Error!', error.error.error, 'error');
      }
    );
  }

  updatePartnerOrganization() {
    console.log('update');
  }

  createPartnerOrganizationDescription(partner: PartnerOrganizationLang) {
    this.partnerService
      .createPartnerOrganizationLang(partner)
      .subscribe();
  }

  
  loadData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.button = 2;
      this.partnerService
        .findPartnerOrganizationById(id)
        .subscribe((res: any) => {
          this.partner.controls['name'].setValue(res.data.name);
          this.partner.controls['logo'].setValue(res.data.logo);
          this.partner.controls['url_site'].setValue(res.data.url_site);

          this.partnerService
            .findPartnerOrganizationByFk(res.data.id)
            .subscribe((res: any) => {
              this.partner.controls['descriptionEn'].setValue(
                res.data[0].description
              );
              this.partner.controls['descriptionSp'].setValue(
                res.data[1].description
              );
            });
        });
    }
  }

  get invalidName() {
    return this.partner.get('name').invalid && this.partner.get('name').touched;
  }

  get invalidDescriptionEn() {
    return (
      this.partner.get('descriptionEn').invalid &&
      this.partner.get('descriptionEn').touched
    );
  }

  get invalidDescriptionSp() {
    return (
      this.partner.get('descriptionSp').invalid &&
      this.partner.get('descriptionSp').touched
    );
  }

  get invalidURL() {
    return (
      this.partner.get('url_site').invalid &&
      this.partner.get('url_site').touched
    );
  }

  PartnerOrganizationForm() {
    this.partner = this.fb.group({
      id: [''],
      logo: ['', [Validators.required]],
      url_site: ['', [Validators.pattern(this.validURL)]],
      name: ['', [Validators.required]],
      partner_organization_fk: [''],
      category_languajes_fk: [''],
      descriptionEn: ['', [Validators.required]],
      descriptionSp: ['', [Validators.required]],
    });
  }

}
