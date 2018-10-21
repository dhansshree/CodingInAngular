import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindings',
  templateUrl: './databindings.component.html',
  styleUrls: ['./databindings.component.css']
})
export class DatabindingsComponent implements OnInit {
  userName: string = '';
  constructor() { }

  ngOnInit() {
  }

  emptyUserName()
  {
    this.userName = "";
  }

  getStatus()
  {
    if(this.userName.length == 0)
     return true;
    else
     return false;
  }

}
