import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../core/services/alert.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm:FormGroup  = this.fb.group({
    correo:['sebaaignacio111@gmail.com',Validators.required],
    password:['123456',Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.authForm.get('correo').value, this.authForm.get('password').value).subscribe({
      next:(resp)=>{
        if(resp.ok && resp.usuario.rol === '623c7e28d6f6a64fb09dee0c'){
          localStorage.setItem('token',resp.token);
          this.router.navigateByUrl('/metrics')
        }else{
          this.alertService.showNotification('top','center','danger','error','Esta cuenta no es administrador')
        }
      },
      error: ()=>{
        this.alertService.showNotification('top','center','danger','error','Correo o contraseña incorrectos')
      }
    })
  }
}
