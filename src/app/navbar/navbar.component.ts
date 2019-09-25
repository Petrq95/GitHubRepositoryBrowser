import { Component, OnInit } from '@angular/core';
import * as fromSaved from '../explorer/state/saved.reducer'
import * as featureActions from '../explorer/state/repository.action'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Repository } from '../explorer/model/repository.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 repositories$: Observable<Repository[]>;
 countOfRepos$: Observable<number>;
  
  constructor(
    private store: Store<fromSaved.SavedRepository>,
    ) { }

  ngOnInit() {
   //  this.repositories$.pipe(map((state) => state.length));

    this.countOfRepos$ = this.store.select('saved').pipe(
      map((staaate: fromSaved.SavedRepository) => {
        if (staaate !== undefined) {
          return staaate.savedCount;
        }
        return 0;
      })
    )
  }
}
