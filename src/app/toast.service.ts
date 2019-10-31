import { Injectable } from '@angular/core';
import { Toast } from './toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = [];
  add(header: string, message: string) {
    this.toasts.push({
      header,
      message
    });
  }

  constructor() { }

  getToasts(): Toast[] {
    return this.toasts;
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(toast2 => toast !== toast2);
  }
}
