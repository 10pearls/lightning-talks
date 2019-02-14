import { Injectable } from '@angular/core';

import { CogsHttpClient } from '../cogs-http-client/cogs-http-client.service';
import { apiSerializer } from '../../utility/jsonApiParser';
import { LoginResponse } from '../../interfaces/auth';
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cogsHttpClient: CogsHttpClient,
    private storage: StorageService,
  ) {}


  userLogin(details: {userName: string, password: string}) {
    const parsedData = apiSerializer('auths', details, { attributes: ['userName', 'password']});
    return this.cogsHttpClient.post<LoginResponse>('api/auth/login', parsedData).toPromise();
  }

  processUserLogin({ accessToken, lightningAuthToken }: LoginResponse) {
    this.storage.set('accessToken', accessToken);
    this.storage.set('lightningAuthToken', lightningAuthToken);
  }
}
