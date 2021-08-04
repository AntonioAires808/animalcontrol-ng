import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  pageTitle = 'Animals'

  animals = [
    'aaaaaaa',
    'aaaaaaa',
    'aaaaaaa',
    'aaaaaaa',
    'aaaaaaa',
    'aaaaaaa'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
