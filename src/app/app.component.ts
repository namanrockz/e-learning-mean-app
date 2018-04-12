import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img5 = 'images/5.jpg';
  img4 = 'images/4.jpg';
  img6 = 'images/g6.jpg';

  users: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getUsers()
      .subscribe(res => this.users = res);

  }

}
