import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as featureActions from '../state/repository.action';
import * as fromRepository from '../state/repository.reducer';
import { Repository } from '../model/repository.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  repositories$: Observable<Repository[]>;
  error$: Observable<string>;
  constructor(private store: Store<fromRepository.AppState>,
              private router: Router,
              private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.store.dispatch(featureActions.loadRepositories());
    this.repositories$ = this.store.pipe(select(fromRepository.getRepositories));
    this.error$ = this.store.pipe(select(fromRepository.getError));
  }
  onSelect(repo: Repository)  {
    this.store.dispatch(featureActions.loadRepository({selectedRepository: repo.name}))
    this.router.navigate(['pages', 'detail', repo.name])
  }
  }
