import { Injectable } from '@angular/core';
import { CanActivate, CanLoad,  Router} from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { Observable,tap,take,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanLoad {
  constructor(
    private router      : Router,
    private authService: AuthService
    ){}

  canActivate(): Observable<boolean> {
      if(this.authService.user.uid || localStorage.getItem('token')){
        this.router.navigateByUrl('/auth')
      }
      return of(true)
  }
  canLoad(): Observable<boolean> {
      return this.authService.renewToken()
      .pipe(
        tap((resp)=>{
        if(!resp){
          this.router.navigate(['/dashboard'])}
        } 
        ),
        take(1)
      )
  }
}
