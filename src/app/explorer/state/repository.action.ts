import { createAction, props } from '@ngrx/store';
import { Repository } from '../model/repository.model';

export const loadRepositories = createAction('[Repositories] Load Repositories');

export const loadRepositoriesSuccess = createAction('[Repositories] Load Success', props<{ repositories: Repository[] }>());

export const loadRepositoriesFailure = createAction('[Repositories] Load Failure', props<{ errorMessage: string }>());

export const loadRepository = createAction('[Repository] Load Repository', props<{ selectedRepository: string }>());

export const loadRepositorySuccess = createAction('[Repository] Load Repository Success', props<{ repository: Repository }>());

export const loadRepositoryFailure = createAction('[Repositories] Load Repository Failure', props<{ errorMessage: string }>());

export const saveRepository = createAction('[Repository] Repository Saved', props<{ repository: Repository }>());

export const loadSavedRepositoriesSuccess = createAction('[Repositories] Load Load Saved Repositories Success', );

export const deleteRepository = createAction('[Repository] Delete Repository', props<{ saved: Repository }>());