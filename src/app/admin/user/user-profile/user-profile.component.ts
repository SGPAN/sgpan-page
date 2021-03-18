import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/service.index';
import { environment } from '../../../../environments/environment.prod';

import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  url = environment.apiUrl;
  user: any;
  image: any;
  uploadImage: File;
  imageTemp: string;

  constructor( private _authService: AuthService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._authService.token);
    this.getUserProfile();
  }

  imageProfile(): void {
    // necesito el
    var id = localStorage.getItem('id');
    console.log( this.uploadImage, id );
    // this._imageService.upload( this.uploadImage, id )
    // .subscribe( ( res : any ) => {
    //   console.log( res );
    // }), error =>{
    //   console.log( error );
    // };
  }

  onSubmit( form: NgForm ): void{
    /*console.log(form.value);
    this._authService.updateUser( form.value, id )
    .subscribe( ( res: any)=>{
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
      });*/
  }

  selecImage( archivo: File ): void {

    if ( !archivo ) {
      this.uploadImage = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      Swal.fire('Only Image', 'Select a Image', 'error');
      this.uploadImage = null;
      return;
    }
    this.uploadImage = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );
    reader.onloadend = () => this.imageTemp = reader.result as string;
  }

  //   if ( !archivo ) {
  //     this.uploadImage = null;
  //     return;
  //   }

  //   if ( archivo.type.indexOf('image') < 0 ) {
  //     Swal.fire('Only Image', 'Select a Image', 'error');
  //     this.uploadImage = null;
  //     return;
  //   }
  //   this.uploadImage = archivo;
  //   let reader = new FileReader();
  //   let urlImagenTemp = reader.readAsDataURL( archivo );
  //   reader.onloadend = () => this.imageTemp = reader.result as string;

  // }

  getUserProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._authService.getUserProfile().subscribe( res => {
        this.user = res;
      });
  }


  // afuConfig = {
  //   multiple: false,
  //   formatsAllowed: ".jpg,.png",
  //   maxSize: "1",
  //   uploadAPI:  {
  //     url:"http://127.0.0.1:8000/api/upload/" + this._authService.user.id,
  //     method:"POST",
  //     headers: {
  //       // "Authorization": this._authService.token
  //     'content-type': 'application/x-www-form-urlencoded',
  //   //  "Authorization" : `Bearer ${localStorage.getItem('token')}`
  //     },
  //     responseType: 'blob',
  //   },
  //   theme: "dragNDrop",
  //   hideProgressBar: true,
  //   hideResetBtn: true,
  //   hideSelectBtn: true,
  //   fileNameIndex: true,
  //   replaceTexts: {
  //     selectFileBtn: 'Select Files',
  //     resetBtn: 'Reset',
  //     uploadBtn: 'Upload',
  //     dragNDropBox: 'Drag N Drop',
  //     attachPinBtn: 'Attach Files...',
  //     afterUploadMsg_success: 'Successfully Uploaded !',
  //     afterUploadMsg_error: 'Upload Failed !',
  //     sizeLimit: 'Size Limit'
  //   }
  // };

// DocUpload(datos) {
//   console.log(datos);
// 		let data = JSON.parse(datos.response);
// 		this.user.image = data.image;
//   }

}
