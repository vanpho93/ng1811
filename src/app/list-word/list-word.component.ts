import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {
  subjects = ['NodeJS', 'Angular', 'React', 'Mongo', 'Android'];
  cars = [
    { name: 'Honda', color: 'white' },
    { name: 'BMW', color: 'black' },
    { name: 'Toyota', color: 'red' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
