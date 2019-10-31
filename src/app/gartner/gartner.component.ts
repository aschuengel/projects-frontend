import {Component, OnInit} from '@angular/core';
import {GartnerService} from '../gartner.service';
import {GartnerBullet} from '../gartner-bullet';

@Component({
  selector: 'app-gartner',
  templateUrl: './gartner.component.html',
  styleUrls: ['./gartner.component.css']
})
export class GartnerComponent implements OnInit {
  bullets: GartnerBullet[];
  private selectedBullet: GartnerBullet = null;

  constructor(private gartner: GartnerService) {
    gartner.getBullets().subscribe(bullets => {
      this.bullets = bullets;
    });
  }

  ngOnInit() {
  }

  selectBullet(bullet: GartnerBullet) {
    this.selectedBullet = bullet;
  }
}
