import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  enablePara: boolean = true;
  data = [];
  constructor() { }

  ngOnInit() {
  }

  toggle()
  {
    this.enablePara = !this.enablePara;
    this.data.push(this.data.length+1);
  }

}
