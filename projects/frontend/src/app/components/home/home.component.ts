import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from 'projects/models/post.interface';
import { ApiService } from 'projects/tools/src/lib/api.service';
import { map, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = []
  sub$ = new Subject
  constructor(private api: ApiService,
    private router: Router,
    private routes: ActivatedRoute) { }

  ngOnInit(): void {

    this.routes.paramMap.pipe(
      takeUntil(this.sub$)
    ).subscribe(param => {
      const cattitle = param.get('title')
      if (this.router.url == `/post/category/${cattitle}`) {
        this.api.getAllPost().pipe(
          map(posts => posts.filter(p => p.category.title == cattitle)),
          takeUntil(this.sub$)
        ).subscribe((res) => {
          this.posts = res
        })
      } else {
        this.api.getAllPost().subscribe((res) => {
          this.posts = res
        })
      }
    })
  }

}
