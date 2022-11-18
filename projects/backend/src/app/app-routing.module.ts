import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EditpostComponent } from './components/post/editpost/editpost.component';
import { NewpostComponent } from './components/post/newpost/newpost.component';
import { PostComponent } from './components/post/post.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostComponent
          },
          {
            path: 'categories',
            component: CategoryComponent
          },
          {
            path: 'create',
            component: NewpostComponent
          },
          {
            path: 'edit/:slug',
            component: EditpostComponent
          },
          {
            path:'**',
            redirectTo:'',
            pathMatch:'full'
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
