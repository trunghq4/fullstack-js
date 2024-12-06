import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotifyService {

  constructor() { }

  private notificationSrc = new BehaviorSubject<string | null>(null);
  notification$ = this.notificationSrc.asObservable();

  showNotification(msg: string){
    this.notificationSrc.next(msg);
    setTimeout(() => this.notificationSrc.next(null), 2001);
  }
}
