import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Node} from './node';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getNodes() {
    console.log(environment);
    return this.http.get<Node[]>(`${environment.baseUrl}/nodes`);
  }
}
