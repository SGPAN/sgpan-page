import { Injectable } from '@angular/core';
import { boardDirectors } from '../../models/board-director/boardDirectors.model';
import { boardDirectorsLang } from '../../models/board-director/boardDirectorsLang.model';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardDirectorService {
  boardDirector: boardDirectors;
  boardDirectorLang: boardDirectorsLang;

  baseUrl = environment.apiUrl;
  token: any;

  constructor(private http: HttpClient) {
    this.token = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
  }

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      authorization: 'bearer ' + localStorage.getItem('token'),
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  public getAllBoardDirector(): any {
    return this.http.get(this.baseUrl + '/BoardDirectors/index/' + 1, this.httpOptions);
  }

  public findBoardDirectorsById(id: any): any {
    return this.http.get(
      this.baseUrl + '/board/director/' + id,
      this.httpOptions
    );
  }

  public findBoardDirectorsByFk(id_db: any): any {
    return this.http.get(
      this.baseUrl + '/board/director/languaje/' + id_db,
      this.httpOptions
    );
  }

  public createBoardDirector(board: boardDirectors): any {
    const json = JSON.stringify(board);
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/board/director',
      params,
      this.httpOptions2
    );
  }
  public createBoardDirectorLang(board: boardDirectorsLang): any {
    const json = JSON.stringify(board);
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/board/director/languaje',
      params,
      this.httpOptions2
    );
  }

  public updateBoardDirector(info: boardDirectors): any {
    const json = JSON.stringify(info);
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/board/director/' + info.id,
      params,
      this.httpOptions2
    );
  }
  public updateBoardDirectorLang(info: boardDirectorsLang): any {
    const json = JSON.stringify(info);
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/board/director/languaje/' + info.board_directors_fk,
      params,
      this.httpOptions2
    );
  }

  public deleteBoardDirector(id: number): any {
    return this.http.delete(
      this.baseUrl + '/board/director/' + id,
      this.httpOptions
    );
  }
}
