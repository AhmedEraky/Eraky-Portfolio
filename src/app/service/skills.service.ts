import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<string[]> {
    return this.http.get<string []>('assets/data/technologies.json');
  }
}
