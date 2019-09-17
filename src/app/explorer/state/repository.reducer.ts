import { createReducer, on, Action } from '@ngrx/store';
import * as featureActions from './repository.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Repository } from '../model/repository.model';
import * as fromRoot from '../../state/app-state';
import { Observable } from 'rxjs';


export interface RepositoryState {
    repositories: Repository[];
    selectedRepositoryName: string;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    repositories: RepositoryState;
}

export const initialState: RepositoryState = {
    repositories: [],
    selectedRepositoryName: null,
    loading: false,
    loaded: false,
    error: ''

};

export const featureReducer = createReducer(
    initialState,
    on(featureActions.loadRepositories, state => ({ ...state, isLoading: true, errorMessage: null })),
    on(featureActions.loadRepositoriesSuccess, (state, { repositories }) =>
     ({ ...state, isLoading: false, errorMessage: null, repositories })),
    on(featureActions.loadRepositoriesFailure, (state, { errorMessage }) => ({ ...state, isLoading: false, errorMessage })),
    on(featureActions.loadRepository, (state, { selectedRepository }) => ({
        ...state,
        selectedRepositoryName: selectedRepository
    }))
);
export function reducer(state: RepositoryState | undefined, action: Action) {
    return featureReducer(state, action);
}

const getRepositoryFeatureState = createFeatureSelector<RepositoryState>(
    'repositories'
);

export const getRepositories = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState) => state.repositories
);
export const getRepositoriesLoading = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState) => state.loading
);

export const getRepositoriesloaded = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState) => state.loaded
);

export const getError = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState) => state.error
);

export const selectSelectedRepositoryName = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState): string => state.selectedRepositoryName
);

export const getCurrentRepository  =() =>  createSelector(
    getRepositories,
    selectSelectedRepositoryName,
    (repositories: Repository[], selectedRepositoryName: string) => {
        if (repositories && selectedRepositoryName) {
            return repositories.find(p => p.name === selectedRepositoryName);
        } else {
            return null;
        }
    }
);
export const getRepositoryError = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState): any => state.error
);
export const getRepositoryLoading = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState): boolean => state.loading
);
