import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { site } from '../modules/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  URL = environment.URL;

  constructor(private http : HttpClient) { }

  get(): Observable<site[]>{
    return this.http.get<site[]>(`${this.URL}/api/site`);
  }

  getId(id: number): Observable<site>{
    return this.http.get<site>(`${this.URL}/api/site/${id}`);
  }

  post(site: site): Observable<site>{
    return this.http.post<site>(`${this.URL}/api/site/gallery`, site);
  }

  // update(site: site, id: number): Observable<site>{
  //   return this.http.put<site>(`${this.URL}/api/site/`, site)
  // }
}
