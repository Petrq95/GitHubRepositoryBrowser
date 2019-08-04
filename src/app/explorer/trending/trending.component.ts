import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as repositoryActions from '../state/repository.action';
import * as fromRepository from '../state/repository.reducer';
import { Repository } from '../model/repository.model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  repositories$: Observable<Repository[]>;
  constructor(private store: Store<fromRepository.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new repositoryActions.LoadRepositories());
    this.repositories$ = this.store.pipe(select(fromRepository.getRepositories));
  }

}
