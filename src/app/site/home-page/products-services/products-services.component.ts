import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from '../../../services/products-services/products-services.service';
import { LanguageService } from '../../../services/shared/language.service';
import { ModalService } from '../../shared/_modal/modal.service';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.css']
})
export class ProductsServicesComponent implements OnInit {

  languageID: number;
  productsServices: any;
  quantity = 0;

  constructor(
    private productsAndServices: ProductsServicesService,
    private languageService: LanguageService,
    public modalService: ModalService) {
      this.languageService.getLanguage().subscribe( response => {
        this.languageID =  response;
        this.getProductsAndServices();
      });
  }

  ngOnInit(): void {
  }

  getProductsAndServices(): void {
    this.productsAndServices.getProductsAndServices(this.languageID).subscribe( response => {
      this.productsServices = response.data;
    });
  }

}
