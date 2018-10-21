import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { 

    this.serverStatus =  Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }


  getServerStatus()
  {
    return this.serverStatus ;
  }

  getColor()
  {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

}
