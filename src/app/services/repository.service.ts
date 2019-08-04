import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Repository } from '../explorer/model/repository.model';

@Injectable({
    providedIn: 'root'
})
export class RepositoryService {
    private repositoryUrl = 'https://github-trending-api.now.sh/repositories';

    constructor(private http: HttpClient) { }

    getRepositories(): Observable<Repository[]> {
        return this.http.get<Repository[]>(this.repositoryUrl);
    }
    getRepositoryByName(payload: string): Observable<Repository> {
        return this.http.get<Repository>(`${this.repositoryUrl}/${payload}`);
    }
}
