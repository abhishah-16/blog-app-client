import { Component, OnInit } from '@angular/core';
import { Category } from 'projects/models/category.interface';
import { ApiService } from 'projects/tools/src/lib/api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = []
  constructor(private api: ApiService,
   ) { }

  ngOnInit(): void {
    this.api.getAllCategories().subscribe((res) => {
      this.categories = res.filter(c => c.title != 'uncategorized')
    })
  }

}
