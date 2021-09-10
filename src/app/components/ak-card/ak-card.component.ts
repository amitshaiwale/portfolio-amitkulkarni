import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ak-card',
  templateUrl: './ak-card.component.html',
  styleUrls: ['./ak-card.component.scss']
})
export class AkCardComponent implements OnInit {

  @Input()
  info: string;
  @Input()
  tense: string;
  @Input()
  designation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
