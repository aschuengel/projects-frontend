import {Injectable} from '@angular/core';
import {Message} from './message';
import {timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  add(header: string, text: string, type: string = 'success', timeout: number = 2500) {
    const message = {
      header,
      text,
      type,
      timeout
    };
    this.messages.push(message);
    if (timeout > 0) {
      timer(timeout).subscribe(() => {
        this.remove(message);
      });
    }
  }

  constructor() {
  }

  remove(message: Message) {
    this.messages = this.messages.filter(item => message !== item);
  }
}
