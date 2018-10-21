import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowServer: boolean = false;
   serverCreatedStatus: string = "No server was created.";
   serverName: string = 'TestServer';
   serverCreated: boolean = false;
   servers = ['A','B'];

  constructor() {

    setTimeout ( () => this.allowServer = true , 2000);
   }

  ngOnInit() {
  }

  onServerCreated()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "Server was created. Name is " + this.serverName;
  }

  onServerNameUpdate(event: Event)
  {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }

}
