import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../backend.service';
import {Node} from '../node';
import {MessageType} from '../message-type.enum';
import {Message} from '../message';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  private node?: Node;
  private message?: Message;

  constructor(private route: ActivatedRoute, private backend: BackendService) {
    this.route.params.subscribe(params => {
      if (params.id) {
        backend.getNodeById(params.id).subscribe(node => {
          this.node = node;
        });
      } else {
        this.node = null;
      }
    });
  }

  ngOnInit() {
  }

  save() {
    this.backend.saveNode(this.node).subscribe(result => {
      this.message = {
        text: 'Saved node',
        type: MessageType.SUCCESS
      };
    }, error => {
      this.message = {
        text: error,
        type: MessageType.ERROR
      };
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
