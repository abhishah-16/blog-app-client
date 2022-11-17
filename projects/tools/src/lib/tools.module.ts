import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
    ToolsComponent
  ]
})
export class ToolsModule { }
