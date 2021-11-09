import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boom',
  templateUrl: './boom.component.html',
  styleUrls: ['./boom.component.css'],
})
export class BoomComponent implements OnInit {
  someFlag: boolean = true;

  constructor() {}

  ngOnInit() {}
}
