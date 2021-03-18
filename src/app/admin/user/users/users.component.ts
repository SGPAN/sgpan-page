import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  cargando: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  mostrarModal( id: string ) {

    // this._modalUploadService.mostrarModal( 'usuarios', id );
  }

  cargarUsuarios() {

    // this.cargando = true;

    // this._usuarioService.cargarUsuarios( this.desde )
    //           .subscribe( (resp: any) => {

    //             this.totalRegistros = resp.total;
    //             this.usuarios = resp.usuarios;
    //             this.cargando = false;

    //           });

  }

  cambiarDesde( valor: number ) {

    // let desde = this.desde + valor;

    // if ( desde >= this.totalRegistros ) {
    //   return;
    // }

    // if ( desde < 0 ) {
    //   return;
    // }

    // this.desde += valor;
    // this.cargarUsuarios();

  }

  buscarUsuario( termino: string ) {

    // if ( termino.length <= 0 ) {
    //   this.cargarUsuarios();
    //   return;
    // }

    // this.cargando = true;

    // this._usuarioService.buscarUsuarios( termino )
    //         .subscribe( (usuarios: Usuario[]) => {

    //           this.usuarios = usuarios;
    //           this.cargando = false;
    //         });

  }

  borrarUsuario( user : User ) {

    // if ( usuario._id === this._usuarioService.usuario._id ) {
    //   swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
    //   return;
    // }

    // swal({
    //   title: '¿Esta seguro?',
    //   text: 'Esta a punto de borrar a ' + usuario.nombre,
    //   icon: 'warning',
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then( borrar => {

    //   if (borrar) {

    //     this._usuarioService.borrarUsuario( usuario._id )
    //               .subscribe( borrado => {
    //                   this.cargarUsuarios();
    //               });

    //   }

    // });

  }

  guardarUsuario( user : User ) {

    // this._usuarioService.actualizarUsuario( usuario )
    //         .subscribe();

  }

}
