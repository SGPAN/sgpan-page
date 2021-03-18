import { Component, OnInit } from '@angular/core';
import { boardDirectors } from '../../../../models/board-director/boardDirectors.model';
import { BoardDirectorService } from '../../../../services/board-director/board-director.service';

import Swal from 'sweetalert2';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-list-board-director',
  templateUrl: './list-board-director.component.html',
  styleUrls: ['./list-board-director.component.css']
})
export class ListBoardDirectorComponent implements OnInit {

  isAdmin: boolean = this._authService.isAdmin();
  board: boardDirectors[];
  load = false;

  constructor( private board_service: BoardDirectorService, private _authService: AuthService ) { }

  ngOnInit(): void {
    this.load = true;
    this.getAllBoardDirectors();
  }

  delete( data: boardDirectors ): void{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.board_service.deleteBoardDirector( data.id ).subscribe( res => {
          this.getAllBoardDirectors();
        });
        Swal.fire(
          data.name + ' was deleted!',
          'Click ok',
          'success'
        );
      }
    });
  }

  getAllBoardDirectors(): void {
    this.board_service.getAllBoardDirector().subscribe( info  => {
      this.board = info.data;
      this.load = false;
    });
  }

}

