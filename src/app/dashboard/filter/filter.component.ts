import { Component, Input, OnInit } from '@angular/core';
import { List } from '../List';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() list: List;
  constructor() { }

  ngOnInit(): void {
  }

}
