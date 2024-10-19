import { Routes } from '@angular/router';
import { ResipeListComponent } from './resipe-list/resipe-list.component';
import { HomeComponent } from './components/home/home.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';



export const  routes : Routes=[
  {path : 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path : 'chefs' , component: ChefsComponent},
  {path : 'testimonails',component:TestimonialComponent},
  {path:'resipes', component:ResipeListComponent},
  {path:'contact',component:ContactComponent},
  

  ]
