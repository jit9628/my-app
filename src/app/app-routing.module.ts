import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarcomponentComponent } from './components/navbarcomponent/navbarcomponent.component';
import { SignUpComponentComponent } from './components/sign-up-component/sign-up-component.component';

const routes: Routes = [
  { path: 'heroes', component: NavbarcomponentComponent },
  {path:'signup', component:SignUpComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
