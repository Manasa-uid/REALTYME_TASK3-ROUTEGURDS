import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { DeptDetailsComponent } from './dept-details/dept-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
 {path:'home/:id',component:DeptDetailsComponent},
{path: 'product', canActivate:[AuthGuard], component: ProductComponent},
{path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent},
{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
