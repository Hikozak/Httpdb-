import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {
  baseURL = 'https://firstprojectdb.firebaseio.com/';
  rootNode = 'people';
  refID: any;

  fname: string;
  lname: string;

  person: object;
  
  constructor() { }

  ngOnInit() {
  }

  deleteData(){

  }
}
