import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {Node} from '../node';
import * as uuid from 'uuid';
import {MessageService} from '../message.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    weight: new FormControl()
  });
  private nodeId?: string;

  constructor(private route: ActivatedRoute,
              private backend: BackendService,
              private messages: MessageService,
              private router: Router,
              private title: Title) {
    this.route.params.subscribe(params => {
      if (params.id) {
        backend.getNodeById(params.id).subscribe(async node => {
          if (node === null) {
            this.messages.add('Error', `Invalid node ${params.id}`);
            await this.router.navigate(['nodes']);
          } else {
            this.form.controls.name.setValue(node.name);
            this.form.controls.type.setValue(node.type);
            this.form.controls.weight.setValue(node.weight);
            this.nodeId = params.id;
            title.setTitle(`Node ${node.name}`);
          }
        });
      } else {
        this.form.controls.name.setValue('');
        this.form.controls.type.setValue(backend.nodeTypes[0]);
        this.form.controls.weight.setValue(backend.nodeWeights[0].value);
        title.setTitle(`New node`);
      }
    });
    this.form.controls.name.valueChanges.subscribe(value => {
      title.setTitle(`Node ${value}`);
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.form.controls.weight.invalid || this.form.controls.type.invalid || this.form.controls.name.invalid) {
      return;
    }
    if (this.nodeId == null) {
      this.nodeId = uuid.v4();
    }
    const node: Node = {
      weight: this.form.controls.weight.value,
      name: this.form.controls.name.value,
      id: this.nodeId,
      type: this.form.controls.type.value
    };
    this.backend.saveNode(node).subscribe(async () => {
      this.messages.add('Success', `Saved node ${node.name}`);
      await this.router.navigate(['nodes']);
    }, error => {
      this.messages.add('Error', JSON.stringify(error));
    });
  }

  deleteNode() {
    this.backend.deleteNodeById(this.nodeId).subscribe(async () => {
      this.messages.add('Success', `Deleted node ${this.form.controls.name.value}`);
      await this.router.navigate(['nodes']);
    });
  }
}
