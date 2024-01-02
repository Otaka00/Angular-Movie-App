import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CatalogComponent } from './Components/catalog/catalog.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'catalog', component: CatalogComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule{
}
