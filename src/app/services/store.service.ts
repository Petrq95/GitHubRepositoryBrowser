import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Repository } from '../explorer/model/repository.model';

import * as repositoryActions from '../explorer/state/repository.action';
import * as fromRepository from '../explorer/state/repository.reducer';
import { RepositoryService } from './repository.service';

@Injectable()
export class StoreService {

    state: Observable<fromRepository.RepositoryState>;
    constructor(private repositoryService: RepositoryService, private store: Store<fromRepository.RepositoryState>) {
        this.state = this.store;
    }

}
