import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coursefaculty-card',
  templateUrl: './coursefaculty-card.component.html',
  styleUrls: ['./coursefaculty-card.component.css']
})
export class CoursefacultyCardComponent implements OnInit {
  @Input() course:any;

  constructor() { }

  ngOnInit(): void {
  }

}
