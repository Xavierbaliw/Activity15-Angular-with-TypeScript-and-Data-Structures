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
import {ToolListComponent} from "./component/tool-list/tool-list.component";
import {LanguageListComponent} from "./component/language-list/language-list.component";
import {GameListComponent} from "./component/game-list/game-list.component";
import {SoftwareListComponent} from "./component/software-list/software-list.component";
import {PhoneContactListComponent} from "./component/phone-contact-list/phone-contact-list.component";
import {MusicplayListComponent} from "./component/musicplay-list/musicplay-list.component";
import {FoodmenuListComponent} from "./component/foodmenu-list/foodmenu-list.component";
import {GroceryListComponent} from "./component/grocery-list/grocery-list.component";
import {ClassroomListComponent} from "./component/classroom-list/classroom-list.component";
import {InventoryListComponent} from "./component/inventory-list/inventory-list.component";


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
  {path: 'toollist', component: ToolListComponent},
  {path: 'languagelist', component: LanguageListComponent},
  {path: 'gamelist', component: GameListComponent},
  {path: 'softwarelist', component: SoftwareListComponent},
  {path: 'phonecontactlist', component: PhoneContactListComponent},
  {path: 'musicplaylist', component: MusicplayListComponent},
  {path: 'foodmenulist', component: FoodmenuListComponent},
  {path: 'grocerylist', component: GroceryListComponent},
  {path: 'classroomlist', component: ClassroomListComponent},
  {path: 'inventorylist', component: InventoryListComponent},




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
    ToolListComponent,
    LanguageListComponent,
    GameListComponent,
    SoftwareListComponent,
    PhoneContactListComponent,
    MusicplayListComponent,
    FoodmenuListComponent,
    GroceryListComponent,
    ClassroomListComponent,
    InventoryListComponent,
    ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}


