import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../model/Role.model';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('assets/data/roles.json');
  }
}
