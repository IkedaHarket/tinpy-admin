import { Injectable } from '@angular/core';
import { take, BehaviorSubject, Observable, catchError, map, tap, of,switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile.interface';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private _baseUrlTinpy: string = environment.apiTinpy;

  private _profiles = new BehaviorSubject<Profile[]>([])
  public profiles$ = this._profiles.asObservable();

  constructor(private http: HttpClient,) {
    this.getAllProfiles().pipe(take(1)).subscribe()
  }

  totalProfiles$ : Observable<number> = this.profiles$.pipe(
      map( profiles => profiles.length )
    )

  private getAllProfiles():Observable<boolean>{
    return this.http.get<Profile[]>(`${this._baseUrlTinpy}perfiles/all`).pipe(
      tap((profiles) => console.log('Perfiles',profiles)),
      tap((data) => this._profiles.next([...data]) ),
      switchMap(() =>  of(true)),
      catchError(()=> of(false))
      )
  }



}
