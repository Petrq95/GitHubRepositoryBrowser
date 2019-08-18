import * as repositoryActions from '../state/repository.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Repository } from '../model/repository.model';
import * as fromRoot from '../../state/app-state';


export interface RepositoryState {
    repositories: Repository[];
    selectedRepository: Repository;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    repositories: RepositoryState;
}
export const initialState: RepositoryState = {
    repositories: [],
    selectedRepository: null,
    loading: false,
    loaded: false,
    error: ''

};

export function repositoryReducer(state = initialState, action: repositoryActions.Action): RepositoryState {
    switch (action.type) {
        case repositoryActions.RepositoryActionTypes.LOAD_REPOSITORIES: {
            return {
                ...state,
                loading: true
            };
        }
        case repositoryActions.RepositoryActionTypes.LOAD_REPOSITORIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                repositories: action.payload
            };
        }
        case repositoryActions.RepositoryActionTypes.LOAD_REPOSITORIES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            };
        }
        case repositoryActions.RepositoryActionTypes.LOAD_REPOSITORY_SUCCESS: {
            return {
                ...state,
                selectedRepository: action.payload
            };

        }
        default: {
            return state;
        }
    }
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

export const getCurrentRepositoryName = createSelector(
    getRepositoryFeatureState,
    (state: RepositoryState) => state.selectedRepository.name
);
export const getCurrentRepository = createSelector(
    getRepositoryFeatureState,
    getCurrentRepositoryName,
     state => state.selectedRepository
);
