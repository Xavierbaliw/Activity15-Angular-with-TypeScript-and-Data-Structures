import {RouterModule, Routes } from "@angular/router";
import {StudentListComponent} from "./component/student-list/student-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EmployeeListComponent} from "./component/employee-list/employee-list.component";
import {FruitListComponent} from "./component/fruit-list/fruit-list.component";
import {CourseListComponent} from "./component/course-list/course-list.component";
import {BookListComponent} from "./component/book-list/book-list.component";


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'fruitlist', component: FruitListComponent},
  {path: 'courselist', component: CourseListComponent},
  {path: 'booklist', component: BookListComponent},

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
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
    BookListComponent,
    ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}


