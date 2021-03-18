import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { boardDirectors } from '../../../../models/board-director/boardDirectors.model';
import { boardDirectorsLang } from '../../../../models/board-director/boardDirectorsLang.model';
import { BoardDirectorService } from '../../../../services/board-director/board-director.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-board-director',
  templateUrl: './new-board-director.component.html',
  styleUrls: ['./new-board-director.component.css']
})
export class NewBoardDirectorComponent implements OnInit {

  board : boardDirectors = new boardDirectors();
  boardEn : boardDirectorsLang = new boardDirectorsLang();
  boardSp : boardDirectorsLang = new boardDirectorsLang();

  constructor( private board_service : BoardDirectorService,
               private route: ActivatedRoute,
    ) { }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'new') {
      this.board_service.findBoardDirectorsById( id )
      .subscribe( ( res : any ) => {
        this.board = res.data;
        this.board_service.findBoardDirectorsByFk( res.data.id )
        .subscribe( (res : any) => {
          this.boardSp = res.data[0];
          this.boardEn = res.data[1];
        });
      });
    }
  }

  onSubmit( form : NgForm ){
    if ( form.value.id == null ) {
      this.createBoardDirector( form );
    } else {
      this.updateBoardDirector( form );
    }
  }

  createBoardDirector( form : NgForm ){
    
    this.board_service.createBoardDirector(form.value).subscribe( ( res : any ) => {

    this.boardEn.board_directors_fk = res.Id;
    this.boardSp.board_directors_fk = res.Id;
    this.boardEn.languaje_cateory_fk = 1;
    this.boardSp.languaje_cateory_fk = 2;
      this.createBoardDirectorDescription( this.boardEn );
      this.createBoardDirectorDescription( this.boardSp );
    
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
      // this.routeNav.navigate( ['/list-board-director'] );
  }

  updateBoardDirector( form : NgForm ){
    this.board_service.updateBoardDirector(form.value)
    .subscribe( res =>{
      this.updateBoardDirectorDescription( this.boardEn );
      this.updateBoardDirectorDescription( this.boardSp );

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

  updateBoardDirectorDescription( boardLang : boardDirectorsLang ){
    this.board_service.updateBoardDirectorLang( boardLang )
    .subscribe( );
  }

  createBoardDirectorDescription( board : boardDirectorsLang ){
    this.board_service.createBoardDirectorLang( board )
      .subscribe( );
  }

  getAllBoardDirectors(){
    this.board_service.getAllBoardDirector()
    .subscribe( ( info : any ) => { 
    });
  }

}


