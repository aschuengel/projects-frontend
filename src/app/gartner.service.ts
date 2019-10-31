import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GartnerBullet} from './gartner-bullet';

@Injectable({
  providedIn: 'root'
})
export class GartnerService {

  constructor(private http: HttpClient) {
  }

  getBullets() {
    return this.http.get<GartnerBullet[]>('assets/gartner.json');
  }
}
