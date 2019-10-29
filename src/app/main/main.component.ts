import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Node} from '../node';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nodes: Node[];

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getNodes().subscribe(nodes => {this.nodes = nodes});
  }

}
