import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/core/interfaces/auth.interface';
import { UsersService } from 'app/core/services/users.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  myUser: Usuario = this.authService.user;
  users$ = this.usersService.users$;
  unUsers$ : Subscription;
  
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    console.log('6276de59fb99f7a2975b23b1' === '6276de59fb99f7a2975b23b1');
  }

}
