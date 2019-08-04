import { Action } from '@ngrx/store';
import { Repository } from '../model/repository.model';

export enum RepositoryActionTypes {
    LOAD_REPOSITORIES = '[Repository] Load Repositories',
    LOAD_REPOSITORIES_SUCCESS = '[Repository] Load Repositories Success',
    LOAD_REPOSITORIES_FAIL = '[Repository] Load Repositories Fail',
    LOAD_REPOSITORY = '[Repository] Load REPOSITORY',
    LOAD_REPOSITORY_SUCCESS = '[Repository] Load Repository Success',
    LOAD_REPOSITORY_FAIL = '[Repository] Load Repository Fail',
}
export class LoadRepositories implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORIES;
}

export class LoadRepositoriesSuccess implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORIES_SUCCESS;

    constructor(public payload: Repository[]) { }
}

export class LoadRepositoriesFail implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORIES_FAIL;

    constructor(public payload: string) { }
}

export class LoadRepository implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORY;

    constructor(public payload: string) { }
}

export class LoadRepositorySuccess implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORY_SUCCESS;

    constructor(public payload: Repository) { }
}

export class LoadRepositoryFail implements Action {
    readonly type = RepositoryActionTypes.LOAD_REPOSITORY_FAIL;

    constructor(public payload: string) { }
}




export type Action =
    | LoadRepositories
    | LoadRepositoriesSuccess
    | LoadRepositoriesFail
    | LoadRepository
    | LoadRepositorySuccess
    | LoadRepositoryFail;

