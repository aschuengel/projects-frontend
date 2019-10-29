import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message';
import {MessageType} from '../message-type.enum';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  private message?: Message;

  constructor() {
  }

  ngOnInit() {
  }

  getClasses() {
    switch (this.message.type) {
      case MessageType.ERROR:
        return ['alert', 'alert-danger'];
      case MessageType.SUCCESS:
        return ['alert', 'alert-success'];
      default:
        return null;
    }
  }
}
