import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../List';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  Name: string;
  Desi:string;
  Tech:string;
  Skill:string;
  Avab: number;
  Base: string;
  Relo:string;
  @Output() listAdd: EventEmitter<List> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const List = {
      Name: this.Name,
      Desi: this.Desi,
      Tech: this.Tech,
      Skill:this.Skill,
      Avab: this.Avab,
      Base:this.Base,
      Relo: this.Relo
    }
    this.listAdd.emit(List);

  }
}
