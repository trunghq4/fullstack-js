import { Component } from '@angular/core';
import { NotifyService } from './services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Trung Store';
  showNotification: boolean = false;
  msg: string = '';
  constructor(private notifyService: NotifyService) {}

  ngOnInit(): void{
    this.notifyService.notification$.subscribe((msg) => {
      if(msg){
        this.msg = msg;
        this.showNotification = true;
      }else{
        this.showNotification = false;
      }
    })
  }
}
