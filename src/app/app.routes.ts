import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

export const routes: Routes = [
//   {path: '', component: LoginComponent},
  {path: '', component: CatalogComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule{
}
