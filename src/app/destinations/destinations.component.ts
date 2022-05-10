import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';
import { Address } from '../address';
import { DataService } from '../shared/data.service';
import placeData from '../in.json';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit, AfterViewInit {

  @ViewChild('searchBar') searchBar: ElementRef;

  post: Address[];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(posts => {
      this.post = posts;
      this.service.postsData = posts;
    });
  }

  ngAfterViewInit(): void {
      fromEvent(this.searchBar.nativeElement, 'keyup').pipe(distinctUntilChanged(),
      debounceTime(200),
      map((e: any) => e.target.value)
      ).subscribe( x => {
        this.service.filteredListOptions();
      });
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.service.searchOption.length > 0)
      this.post = this.service.filteredListOptions();
    else {
      this.post = this.service.postsData;
    }

  }


  placeList: {}[] = placeData;

  lat = 28.6139;
  long = 77.2090;

}
