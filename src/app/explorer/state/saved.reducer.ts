import { createReducer, on, Action } from '@ngrx/store';
import * as featureActions from './repository.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Repository } from '../model/repository.model';
import * as fromRoot from '../../state/app-state';
import { selectSelectedRepositoryName } from './repository.reducer';

export interface SavedRepository {
    repositories: Repository[];
    savedCount: number;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    repositories: SavedRepository;
}

export const initialState: SavedRepository = {
    repositories: [],
    savedCount: 0,
    loading: false,
    loaded: false,
    error: ''

};

 const savedReducer = createReducer(
    initialState,
    on(featureActions.saveRepository, (state, {repository} ) => {
        state.repositories.push({...repository});
        return {
            ...state,
            savedCount: state.savedCount + 1
        }
    }),
    on(featureActions.loadRepository, (state, { selectedRepository }) => ({
        ...state,
        selectedRepositoryName: selectedRepository
    })),
    on(featureActions.deleteRepository, (state, { saved }) => {
        state.repositories.splice(state.repositories.indexOf(saved), 1)
        return {
            ...state,
            savedCount: state.savedCount -1

        }
    })
)

export function reducerSaved(state: SavedRepository | undefined, action: Action) {
    return savedReducer(state, action);
}

const getRepositoryFeatureState = createFeatureSelector<SavedRepository>(
    'saved'
);
export const getRepositories = createSelector(
    getRepositoryFeatureState,
    (state: SavedRepository) => state.repositories
);
export const getCurrentRepository  =() =>  createSelector(
    getRepositories,
    selectSelectedRepositoryName,
    (saved: Repository[], selectedRepositoryName: string) => {
        if (saved && selectedRepositoryName) {
            return saved.find(p => p.name === selectedRepositoryName);
        } else {
            return null;
        }
    }
);