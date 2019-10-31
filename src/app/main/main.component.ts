import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
import {Node} from '../node';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nodes: Node[];

  constructor(private backend: BackendService, private router: Router) {
  }

  ngOnInit() {
    this.backend.getNodes().subscribe(nodes => {
      this.nodes = nodes;
      console.log(nodes);
    });
  }
}
