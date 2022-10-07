import { Injectable } from '@angular/core';
import { CanActivate, CanLoad,  Router} from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { Observable,tap,take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router      : Router,
    private authService: AuthService
    ){}

  canActivate(): Observable<boolean> {
      return this.authService.renewToken()
      .pipe(
        tap((resp)=>{
        if(!resp){
          this.router.navigate(['/auth'])}
        } 
        ),
        take(1)
      )
  }
  canLoad(): Observable<boolean> {
      return this.authService.renewToken()
      .pipe(
        tap((resp)=>{
        if(!resp){
          this.router.navigate(['/auth'])}
        } 
        ),
        take(1)
      )
  }
}
