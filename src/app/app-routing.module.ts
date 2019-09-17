import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('./explorer/explorer.module').then(m => m.ExplorerModule), },
/*   { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
