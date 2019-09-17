import { createAction, props } from '@ngrx/store';
import { Repository } from '../model/repository.model';

export const loadRepositories = createAction('[Repositories] Load Repositories');

export const loadRepositoriesSuccess = createAction('[Repositories] Load Success', props<{ repositories: Repository[] }>());

export const loadRepositoriesFailure = createAction('[Repositories] Load Failure', props<{ errorMessage: string }>());

export const loadRepository = createAction('[Repository] Load Repository', props<{ selectedRepository: string }>());

export const loadRepositorySuccess = createAction('[Repository] Load Repository Success', props<{ repositories: Repository }>());

export const loadRepositoryFailure = createAction('[Repositories] Load Repository Failure', props<{ errorMessage: string }>());

