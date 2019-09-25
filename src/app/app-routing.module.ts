import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Scroll,} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RetainScrollPolyfillModule } from './retain-scroll-polyfill/retain-scroll-polyfill.module';


const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('./explorer/explorer.module').then(m => m.ExplorerModule), },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RetainScrollPolyfillModule.forRoot({
    // Tell the polyfill how long to poll the document after a route change in
    // order to look for elements that need to be restored to a previous offset.
    pollDuration: 3000,
    pollCadence: 50
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}