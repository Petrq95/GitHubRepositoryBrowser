import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { repositoryReducer } from './state/repository.reducer';
import { RepositoryEffect } from './state/repository.effect';

import { MaterialModule } from '../material/material.module';
import { TrendingComponent } from './trending/trending.component';
import { DetailComponent } from './detail/detail.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'detail/:name', component: DetailComponent },

];

@NgModule({
  declarations: [
    PagesComponent,
    TrendingComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('repositories', repositoryReducer),
    EffectsModule.forFeature([RepositoryEffect]),
    MaterialModule,
  ]
})
export class ExplorerModule { }
