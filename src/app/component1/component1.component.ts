import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @Output() onUpdate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
