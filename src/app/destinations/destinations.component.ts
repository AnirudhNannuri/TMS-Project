import { Component, OnInit } from '@angular/core';
import placeData from '../in.json';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  placeList: {}[] = placeData;

  lat = 28.6139;
  long = 77.2090;

}
