import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { RespAuth, Usuario } from '../interfaces/auth.interface';
import { Observable,map,catchError,of,tap  } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrlTinpy: string = environment.apiTinpy;
  private _user :Usuario = {}

  public get user() : Usuario {
    return {...this._user}
  }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  login(correo: string, password: string):Observable<RespAuth>{
    return this.http.post<RespAuth>(`${this._baseUrlTinpy}auth/login`,{correo,password})
      .pipe(tap(resp => this._user = resp.usuario))
  }

  renewToken():Observable<boolean>{
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token'))
    return this.http.get(`${this._baseUrlTinpy}auth/renew`,{headers})
    .pipe(
      tap((resp:RespAuth) => this._user = resp.usuario),
      map((resp:RespAuth)=> resp.ok),
      catchError(()=> of(false))
      )
  }
  
  logout(){
    this._user = {};
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth');
  }
}
