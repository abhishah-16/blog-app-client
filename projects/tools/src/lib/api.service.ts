import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'projects/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url = 'http://localhost:4444'
  authStatus$ = new BehaviorSubject<boolean>(false)
  user: User
  constructor(private http: HttpClient) { }
}
