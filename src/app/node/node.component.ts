import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../backend.service';
import {Node} from '../node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  private node?: Node;
  private oldNode?: Node;

  constructor(private route: ActivatedRoute, private backend: BackendService) {
    this.route.params.subscribe(params => {
      if (params.id) {
        backend.getNodeById(params.id).subscribe(node => {
          this.node = node;
          this.oldNode = JSON.parse(JSON.stringify(node));
        });
      } else {
        this.node = null;
        this.oldNode = null;
      }
    });
  }

  ngOnInit() {
  }

  save() {
    this.backend.saveNode(this.node).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  setName(newValue: string) {
    this.node.name = newValue;
  }

  setType(newValue: string) {
    this.node.type = newValue;
  }

  setWeight(newValue: string) {
    this.node.weight = parseInt(newValue, 10);
  }
}
