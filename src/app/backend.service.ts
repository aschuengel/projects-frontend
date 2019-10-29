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

  getNodeTypes() {
    return ['mobile-app', 'web-app', 'core-function'];
  }

  getNodes() {
    return this.http.get<Node[]>(`${environment.baseUrl}/nodes`);
  }

  getNodeById(id: string) {
    return this.http.get<Node>(`${environment.baseUrl}/nodes/${id}`);
  }

  getNodeWeights() {
    return [
      {
        name: '', value: 0
      }, {
        name: 'XS', value: 1
      }, {
        name: 'S', value: 2
      }, {
        name: 'M', value: 3
      }, {
        name: 'L', value: 4
      }, {
        name: 'XL', value: 5
      }];
  }

  saveNode(node: Node) {
    return this.http.post(`${environment.baseUrl}/nodes`, node);
  }
}
