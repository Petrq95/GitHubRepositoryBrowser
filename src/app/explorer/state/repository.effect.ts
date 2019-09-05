import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';

import { RepositoryService } from '../../services/repository.service';
import * as featureActions from '../state/repository.action';
import { Repository } from '../model/repository.model';

@Injectable()

export class RepositoryEffect {
    constructor(
        private actions$: Actions,
        private repositoryService: RepositoryService
    ) { }

    LoadRepositories$ = createEffect(() => this.actions$.pipe(
        ofType(featureActions.loadRepositories),
        concatMap( _ =>
            this.repositoryService
                .getRepositories()
                .pipe(
                    map(repositories => featureActions.loadRepositoriesSuccess({ repositories })),
                    catchError(error =>
                        of(featureActions.loadRepositoriesFailure({ errorMessage: error.message }))
                    )
                )
        )
    )
); }
