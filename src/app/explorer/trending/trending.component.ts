import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as repositoryActions from '../state/repository.action';
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
    this.store.dispatch(new repositoryActions.LoadRepositories());
    this.repositories$ = this.store.pipe(select(fromRepository.getRepositories));
    this.error$ = this.store.pipe(select(fromRepository.getError));
  }
  editRepositoryInfo(repository: Repository) {
    this.store.dispatch(new repositoryActions.LoadRepositorySuccess(repository));
    this.router.navigate(['pages/detail', repository.name]);
  }
}