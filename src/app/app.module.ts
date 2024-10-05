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
import {CityListComponent} from "./component/city-list/city-list.component";
import {MovielistComponent} from "./component/movielist/movielist.component";
import {CarmodelListComponent} from "./component/carmodel-list/carmodel-list.component";
import {ProductListComponent} from "./component/product-list/product-list.component";
import {SubjectListComponent} from "./component/subject-list/subject-list.component";
import {CountryListComponent} from "./component/country-list/country-list.component";
import {SportListComponent} from "./component/sport-list/sport-list.component";
import {VegetableListComponent} from "./component/vegetable-list/vegetable-list.component";
import {AnimalListComponent} from "./component/animal-list/animal-list.component";


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'fruitlist', component: FruitListComponent},
  {path: 'courselist', component: CourseListComponent},
  {path: 'booklist', component: BookListComponent},
  {path: 'citylist', component: CityListComponent},
  {path: 'movielist', component: MovielistComponent},
  {path: 'carmodellist', component: CarmodelListComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'subjectlist', component: SubjectListComponent},
  {path: 'countrylist', component: CountryListComponent},
  {path: 'sportlist', component: SportListComponent},
  {path: 'vegetablelist', component: VegetableListComponent},
  {path: 'animallist', component: AnimalListComponent},
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
    CityListComponent,
    MovielistComponent,
    CarmodelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportListComponent,
    VegetableListComponent,
    AnimalListComponent,
    ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}


