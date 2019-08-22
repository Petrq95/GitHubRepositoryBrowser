import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { RepositoryService } from '../../services/repository.service';
import * as repositoryAction from '../state/repository.action';
import { Repository } from '../model/repository.model';

@Injectable()

export class RepositoryEffect {
    constructor(
        private actions$: Actions,
        private repositoryService: RepositoryService
    ) { }

    @Effect()
    LoadRepositories$: Observable<Action> = this.actions$.pipe(
        ofType<repositoryAction.LoadRepositories>(
            repositoryAction.RepositoryActionTypes.LOAD_REPOSITORIES
        ),
        mergeMap((action: repositoryAction.LoadRepositories) =>
            this.repositoryService.getRepositories().pipe(
                map(
                    (repositories: Repository[]) =>
                        new repositoryAction.LoadRepositoriesSuccess(repositories)
                ),
                catchError(err => of(new repositoryAction.LoadRepositoriesFail(err)))
            )
        )
    );
    @Effect()
    loadRepository$: Observable<Action> = this.actions$.pipe(
        ofType<repositoryAction.LoadRepository>(
            repositoryAction.RepositoryActionTypes.LOAD_REPOSITORY
        ),
        mergeMap((action: repositoryAction.LoadRepository) =>
            this.repositoryService.getRepositoryByName(action.payload).pipe(
                map(
                    (repository: Repository) =>
                        new repositoryAction.LoadRepositorySuccess(repository)
                ),
                catchError(err => of(new repositoryAction.LoadRepositoryFail(err)))
            )
        )
    );


}
