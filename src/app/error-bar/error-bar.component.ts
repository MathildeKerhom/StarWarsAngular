import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-bar',
  templateUrl: './error-bar.component.html',
  styleUrls: ['./error-bar.component.css']
})
export class ErrorBarComponent implements OnInit {
  @Input()
  public message: string;

  constructor() { }

  ngOnInit() {
  }

}
