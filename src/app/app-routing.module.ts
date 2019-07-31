import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { DetailComponent } from './detail/detail.component';
import { SavedComponent } from './saved/saved.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
  { path: 'pages/trending', component: TrendingComponent },
  { path: 'pages/detail', component: DetailComponent },
  { path: 'pages/saved', component: SavedComponent },
  { path: '', component: NavbarComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
