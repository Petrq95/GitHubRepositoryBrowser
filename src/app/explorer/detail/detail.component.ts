import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as repositoryActions from '../state/repository.action';
import * as fromRepository from '../state/repository.reducer';
import { Repository } from '../model/repository.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  repository$: Observable<Repository>;
  // tslint:disable-next-line: ban-types
  loading: Observable<Boolean>;
  error$: Observable<any>;
  loading$: Observable<boolean>;
  constructor(
    private store: Store<fromRepository.RepositoryState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.repository$ = this.store.pipe(select(fromRepository.getCurrentRepository()));

    this.error$ = this.store.pipe(select(fromRepository.getRepositoryError));
    this.loading$ = this.store.pipe(select(fromRepository.getRepositoriesLoading)
  );
  
  }
saveRepository(repository: Repository){
    this.store.dispatch(repositoryActions.saveRepository({repository: repository}));
  }
}
 /*this.route.paramMap.subscribe(params => {
    this.repository$.forEach((repository: Repository) => {
    if (repository.name === params.name) {
      this.repository$ = repository;
      }
    });
    });
*/
