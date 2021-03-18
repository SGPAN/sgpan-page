import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lidership } from 'src/app/models/lideship/lidership.model';
import { LidershipLang } from '../../../../models/lideship/lidershipLang.model';
import { LidershipService } from '../../../../services/lidership/lidership.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-lidership',
  templateUrl: './new-lidership.component.html',
  styleUrls: ['./new-lidership.component.css']
})
export class NewLidershipComponent implements OnInit {

  lider : Lidership = new Lidership();
  LiderEn : LidershipLang = new LidershipLang();
  LiderSp : LidershipLang = new LidershipLang();

  constructor( private _liderService : LidershipService,
               private route: ActivatedRoute,
    ) { }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get( 'id' );
    if ( id !== 'new') {
      this._liderService.findLidershipById( id )
      .subscribe( ( res : any ) => {
        this.lider = res.data;
        this._liderService.findLidershipByFk( res.data.id )
        .subscribe( ( res : any ) => {
          this.LiderSp = res.data[0];
          this.LiderEn = res.data[1];
        });
      });
    }
  }

  onSubmit( form : NgForm ){
    if ( form.value.id == null ) {
      this.createLidership( form );
    } else {
      this.updateLidership( form );
    }
  }

  createLidership( form : NgForm ){
    
    this._liderService.createLidership( form.value ).subscribe( ( res : any ) => {

    this.LiderEn.liderships_fk = res.Id;
    this.LiderSp.liderships_fk = res.Id;
    this.LiderEn.languaje_category_fk = 1;
    this.LiderSp.languaje_category_fk = 2;
      this.createLidershipDescription( this.LiderEn );
      this.createLidershipDescription( this.LiderSp );
    
      Swal.fire(
        form.value.name + ' was added',
        'Click ok',
        'success'
      )
      }, error =>{
        Swal.fire(
          'Error!',
          error.error.error,
          'error'
        )
      }); 
      // this.routeNav.navigate( ['/list-Lider-director'] );
  }

  updateLidership( form : NgForm ){
    this._liderService.updateLidership( form.value )
    .subscribe( res =>{
      this.updateLidershipDescription( this.LiderEn );
      this.updateLidershipDescription( this.LiderSp );

      Swal.fire(
        form.value.name + ' was updated',
        'Click ok',
        'success'
      )
      }, error =>{
        Swal.fire(
          'Error!',
          error.error.error,
          'error'
        )
      }); 
      // 
  }

  updateLidershipDescription( LiderLang : LidershipLang ){
    this._liderService.updateLidershipLang( LiderLang )
    .subscribe( );
  }

  createLidershipDescription( LiderLang : LidershipLang ){
    this._liderService.createLidershipLang( LiderLang )
      .subscribe( );
  }

  getAllLiderships(){
    this._liderService.getAllLiderships()
    .subscribe( ( info : any ) => { 
    });
  }

}
