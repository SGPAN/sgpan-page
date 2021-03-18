import { Component, OnInit } from '@angular/core';
import { CompanyInfoService} from '../../../services/company-info/company-info.service';
import { GwcInfoService } from '../../../services/shared/gwc-info.service';
import { LanguageService } from '../../../services/shared/language.service';
import { CompanyInfo } from '../../../models/company-info/company_info';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css']
})
export class FirstNavComponent implements OnInit {

  // variables
  companyInfo: CompanyInfo[] = [];
  languageID: number;
  // constructor
  constructor(private companyInfoService: CompanyInfoService, private languageService: LanguageService, private gwcService: GwcInfoService)
  {
    // take the current language id an listen every time is switched
    this.languageService.getLanguage().subscribe( response => {
      this.languageID = response;
      // if the language id is switched will get the info again
      this.getGWCInfo();
    });
  }

  ngOnInit(): void {
  }

  /*Getting info for the first navbar with the company info, such as phone and email*/
  public getGWCInfo(): void {

    this.companyInfoService.getGWCInfo(this.languageID).subscribe(response => {

      if (response.status === 200)
      {
          this.companyInfo = response.data;

          // setting data to the service
          this.gwcService.loadInfo(this.companyInfo);
      }

    });

  }

}
