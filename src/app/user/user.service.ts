import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) { }
  public getAllUsersService() {
    return this.httpClient.get(this.url);
  }
}
