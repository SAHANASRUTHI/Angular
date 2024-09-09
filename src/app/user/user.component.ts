import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  constructor(private userService: UserService){}

  users?:User[];
  ngOnInit(){this.retrieveTutorials()}
  retrieveTutorials(): void {
    this.userService.getAllUsersService()
      .subscribe({
        next: (data:any) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

