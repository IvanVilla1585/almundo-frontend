import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-star',
  templateUrl: './icon-star.component.html',
  styleUrls: ['./icon-star.component.css']
})
export class IconStarComponent implements OnInit {

  @Input()
  private stars: number;
  @Input()
  private size: number;
  @Input()
  private color: number;
  private array: Array<any>;
  constructor() {
    this.stars = 0;
  }

  ngOnInit() {
    this.array = new Array(this.stars);
  }

}
