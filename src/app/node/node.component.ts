import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../backend.service';
import {Node} from '../node';
import * as uuid from 'uuid';
import {ToastService} from '../toast.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  private node?: Node;

  constructor(private route: ActivatedRoute,
              private backend: BackendService,
              private toast: ToastService) {
    this.route.params.subscribe(params => {
      if (params.id) {
        backend.getNodeById(params.id).subscribe(node => {
          this.node = node;
          if (node === null) {
            this.toast.add('Error', `Invalid node ${params.id}`);
          }
        });
      } else {
        this.node = {
          id: uuid.v4(),
          type: null,
          name: null,
          weight: 1
        };
      }
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.node.name === null) {
      return;
    }
    if (this.node.type === null) {
      return;
    }
    this.backend.saveNode(this.node).subscribe(result => {
      this.toast.add('Success', 'Save node');
    }, error => {
      this.toast.add('Error', JSON.stringify(error));
    });
  }

  setName(newValue: string) {
    this.node.name = newValue;
  }

  setType(newValue: string) {
    this.node.type = newValue;
  }

  setWeight(newValue: number) {
    console.log(newValue);
    this.node.weight = newValue;
  }
}
