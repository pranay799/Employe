import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/dashboard/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
   lists:List[];
  constructor() {
     this.lists = [
      {
        Name : "pranay",
        Desi:"UI specalist" ,
        Tech : "aws",
        Skill : "java",
        Avab:4,
        Base : "nagpur",
        Relo : "yes"
      },
      {
        Name : "Rahul",
        Desi:"visual studio" ,
        Tech : "python",
        Skill : "c++,C",
        Avab:3,
        Base : "nagpur",
        Relo : "yes"
      },
      {
        Name : "Hitesh",
        Desi:"UI specalist" ,
        Tech : "aws",
        Skill : "html,UI",
        Avab:4,
        Base : "nagpur",
        Relo : "No"
      },
      {
        Name : "kunal",
        Desi:"UI specalist" ,
        Tech : "aws",
        Skill : "html",
        Avab:4,
        Base : "nagpur",
        Relo : "NO"
      },
      {
        Name : "Rohit",
        Desi:"UI specalist" ,
        Tech : "aws",
        Skill : "html",
        Avab:8,
        Base : "nagpur",
        Relo : "yes"
      },
      {
        Name : "yash",
        Desi:"UI specalist" ,
        Tech : "aws",
        Skill : "html",
        Avab:7,
        Base : "nagpur",
        Relo : "yes"
      }
                  
      




     ]

   }

  ngOnInit(): void {
  }
  addlists(list:List){
   console.log(list);
   this.lists.push(list);

  }
}
