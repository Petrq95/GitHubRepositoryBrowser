import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './state/repository.reducer';
import { RepositoryEffect } from './state/repository.effect';

import { MaterialModule } from '../material/material.module';
import { TrendingComponent } from './trending/trending.component';
import { DetailComponent } from './detail/detail.component';
import { PagesComponent } from './pages/pages.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  { path: 'trending', component: TrendingComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'detail', component: DetailComponent },

];

@NgModule({
  declarations: [
    PagesComponent,
    TrendingComponent,
    SavedComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('repositories', featureReducer),
    EffectsModule.forFeature([RepositoryEffect]),
    MaterialModule,
  ]
})
export class ExplorerModule { }
