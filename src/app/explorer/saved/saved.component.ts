import { Component, OnInit } from '@angular/core';
import * as fromSaved from '../state/saved.reducer'
import * as featureActions from '../state/repository.action'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Repository } from '../model/repository.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { state } from '@angular/animations';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  repositories$: Observable<Repository[]>;
  
  constructor(
    private store: Store<fromSaved.SavedRepository>,
    private router: Router,
    ) { }

  ngOnInit() {
    this.store.dispatch(featureActions.loadSavedRepositoriesSuccess());
    this.repositories$ = this.store.pipe(select(fromSaved.getRepositories));

  }
  onSelect(repo: Repository)  {
    this.store.dispatch(featureActions.loadRepository({selectedRepository: repo.name}))
    this.router.navigate(['pages', 'detail', repo.name])
  }

  deleteSavedRepo(repo: Repository){
    this.store.dispatch(featureActions.deleteRepository({saved: repo}))

  }
}
