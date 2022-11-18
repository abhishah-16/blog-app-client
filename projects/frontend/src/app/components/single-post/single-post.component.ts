import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'projects/models/post.interface';
import { ApiService } from 'projects/tools/src/lib/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post> | any
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const slug = param.get('slug')
      this.api.getPostBySlug(slug).subscribe((res) => {
        this.post = res
        console.log(res);
      })
    })
  }

}
