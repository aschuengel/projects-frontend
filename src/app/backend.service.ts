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

  nodeWeights =
    [
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
    }
    ];

  nodeTypes = ['mobile-app', 'web-app', 'core-function'];

  getNodes() {
    return this.http.get<Node[]>(`${environment.baseUrl}/nodes`);
  }

  getNodeById(id: string) {
    return this.http.get<Node>(`${environment.baseUrl}/nodes/${id}`);
  }


  saveNode(node: Node) {
    return this.http.post(`${environment.baseUrl}/nodes`, node);
  }

  deleteNodeById(id: string) {
    return this.http.delete(`${environment.baseUrl}/nodes/${id}`);
  }
}
