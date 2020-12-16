import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-record',
  templateUrl: './attendance-record.component.html',
  styleUrls: ['./attendance-record.component.css']
})
export class AttendanceRecordComponent implements OnInit {

  @Input() record: any;

  present;
  absent;

  constructor() { }

  ngOnInit(): void {
    this.present = this.record.present;
    this.absent = !this.record.present;
  }

}
