import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespUsers,Usuario } from '../interfaces/users-paginate.interface';
import { BehaviorSubject, catchError, map, Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  
  private _baseUrlTinpy: string = environment.apiTinpy;

  private _users = new BehaviorSubject<Usuario[]>([])
  public users$ = this._users.asObservable();

  constructor(private http: HttpClient,) {
    this.getUsersAll().pipe(take(1)).subscribe()
  }

  totalUsers$ : Observable<number> = this.users$.pipe(
      map( users => users.length )
    )
  totalUsersVerified$: Observable<number> = this.users$.pipe(
      map( users => users.filter(user => user.verify).length )
    )
  totalUsersBanned$: Observable<number> = this.users$.pipe(
      map( users => users.filter(user => !user.estado).length )
    )
    
  changeUserVerify(id:string){
    this._users.next([...this._users.value.map((u)=>{
      if(u.uid == id) u.verify = !u.verify
      return u
    })])
    this.putUserVerify(id).pipe(take(1)).subscribe()
  }

  changeUserAdmin(id:string){
    let rol: string;
    this._users.next([...this._users.value.map((u)=>{
      if(u.uid == id) {
        u.rol.nombre = u.rol.nombre == 'admin' ? 'usuario' : 'admin'
        u.rol._id = u.rol.nombre == 'admin' ? '623c7e28d6f6a64fb09dee0c' : '623c7e41559a8d2da4ff9745'
        rol = u.rol.nombre == 'admin' ? '623c7e28d6f6a64fb09dee0c' : '623c7e41559a8d2da4ff9745'
      }
      return u
    })])
    this.putUserAdmin(rol,id).pipe(take(1)).subscribe()
  }

  changeUserBaned(id:string){
    this._users.next([...this._users.value.map((u)=>{
      if(u.uid == id) u.estado = !u.estado
      return u
    })])
    this.putUserBaned(id).pipe(take(1)).subscribe()
  }

  private getUsersAll():Observable<boolean>{
    return this.http.get<RespUsers>(`${this._baseUrlTinpy}users/all`).pipe(
      tap((data) => this._users.next([...data.usuarios]) ),
      tap(console.log),
      map((data) =>  data.ok),
      catchError(()=> of(false))
      )
  }
  private putUserVerify(id:string):Observable<RespUsers>{
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token'))
    return this.http.put<RespUsers>(`${this._baseUrlTinpy}users/verify/${id}`,{},{headers}).pipe(
      catchError(()=>{
        this._users.next([...this._users.value.map((u)=>{
          if(u.uid == id) u.verify = !u.verify
          return u
        })])
        return of()
      })
      )
  }
  private putUserAdmin(rol:string, id:string):Observable<RespUsers>{
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token'))
    return this.http.put<RespUsers>(`${this._baseUrlTinpy}users/changeRol/${rol}/${id}`,{},{headers}).pipe(
      catchError(()=>{
        this._users.next([...this._users.value.map((u)=>{
          if(u.uid == id) u.rol.nombre = u.rol.nombre == 'admin' ? 'usuario' : 'admin'
          return u
        })])
        return of()
      })
      )
  }
  private putUserBaned(id:string):Observable<RespUsers>{
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token'))
    return this.http.put<RespUsers>(`${this._baseUrlTinpy}users/ban/${id}`,{},{headers}).pipe(
      catchError(()=>{
        this._users.next([...this._users.value.map((u)=>{
          if(u.uid == id) u.estado = !u.estado
          return u
        })])
        return of()
      })
      )
  }
}
