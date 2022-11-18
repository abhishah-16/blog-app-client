import { Component, OnInit } from '@angular/core';
import { Category } from 'projects/models/category.interface';
import { Post } from 'projects/models/post.interface';
import { ApiService } from 'projects/tools/src/lib/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = []
 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllPost().subscribe((res) => {
      this.posts = res
    })
  }

}
