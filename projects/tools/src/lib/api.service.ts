import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'projects/models/user.interface';
import { Router } from '@angular/router';
import { Post } from 'projects/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = 'http://localhost:4444'
  private authStatus$ = new BehaviorSubject<boolean>(false)
  private user: User = {
    id: -1,
    email: '',
    firstname: '',
    lastname: '',
    profilePic: '',
    roles: ''
  }
  private user$ = new BehaviorSubject<User>(this.user)

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.Url}/post`)
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.Url}/post/slug/${slug}`)
  }

}
