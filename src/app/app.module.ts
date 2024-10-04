import {RouterModule, Routes } from "@angular/router";
import {StudentListComponent} from "./component/student-list/student-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const routes: Routes = [
  {path: '', component: StudentListComponent},

  ]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentListComponent,
    ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}


