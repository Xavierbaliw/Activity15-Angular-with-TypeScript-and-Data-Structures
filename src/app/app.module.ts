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
import {LecturelistComponent} from "./component/lecturelist/lecturelist.component";
import {StationarylistComponent} from "./component/stationarylist/stationarylist.component";
import {FlowerlistComponent} from "./component/flowerlist/flowerlist.component";
import {DestinationListComponent} from "./component/destination-list/destination-list.component";
import {LaptopListComponent} from "./component/laptop-list/laptop-list.component";
import {
  LaptopspecificationListComponent
} from "./component/laptopspecification-list/laptopspecification-list.component";
import {ComputerhardwareListComponent} from "./component/computerhardware-list/computerhardware-list.component";
import {MobileappListComponent} from "./component/mobileapp-list/mobileapp-list.component";
import {VideoListComponent} from "./component/video-list/video-list.component";
import {ShowListComponent} from "./component/show-list/show-list.component";
import {FurnitureListComponent} from "./component/furniture-list/furniture-list.component";
import {AccessoryListComponent} from "./component/accessory-list/accessory-list.component";
import {BuildingListComponent} from "./component/building-list/building-list.component";
import {PaintingListComponent} from "./component/painting-list/painting-list.component";
import {ArtistListComponent} from "./component/artist-list/artist-list.component";
import {ComposerListComponent} from "./component/composer-list/composer-list.component";
import {PodcastListComponent} from "./component/podcast-list/podcast-list.component";
import {ExerciseListComponent} from "./component/exercise-list/exercise-list.component";


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
  {path: 'lecturelist', component: LecturelistComponent},
  {path: 'stationarylist', component: StationarylistComponent},
  {path: 'flowerlist', component: FlowerlistComponent},
  {path: 'destinationlist', component: DestinationListComponent},
  {path: 'laptoplist', component: LaptopListComponent},
  {path: 'laptopspecificationlist', component: LaptopspecificationListComponent},
  {path: 'computerhardwarelist', component: ComputerhardwareListComponent},
  {path: 'mobileapplist', component: MobileappListComponent},
  {path: 'videolist', component: VideoListComponent},
  {path: 'showlist', component: ShowListComponent},
  {path: 'furniturelist', component: FurnitureListComponent},
  {path: 'accessorylist', component: AccessoryListComponent},
  {path: 'buildinglist', component: BuildingListComponent},
  {path: 'paintinglist', component: PaintingListComponent},
  {path: 'artistlist', component: ArtistListComponent},
  {path: 'composerlist', component: ComposerListComponent},
  {path: 'podcastlist', component: PodcastListComponent},
  {path: 'exerciselist', component: ExerciseListComponent},


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
    LecturelistComponent,
    StationarylistComponent,
    FlowerlistComponent,
    DestinationListComponent,
    LaptopListComponent,
    LaptopspecificationListComponent,
    ComputerhardwareListComponent,
    MobileappListComponent,
    VideoListComponent,
    ShowListComponent,
    FurnitureListComponent,
    AccessoryListComponent,
    BuildingListComponent,
    PaintingListComponent,
    ArtistListComponent,
    ComposerListComponent,
    PodcastListComponent,
    ExerciseListComponent,
    ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}


