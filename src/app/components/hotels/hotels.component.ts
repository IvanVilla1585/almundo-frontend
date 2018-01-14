import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [HotelService]
})
export class HotelsComponent implements OnInit {
  public hotels: Array<object>;

  constructor(private _hotelService: HotelService) {
    this.hotels = [];
  }

  ngOnInit() {
    this.getDataHotels();
  }
  getDataHotels() {
    this._hotelService.findHotels('').subscribe(
      (res: any) => {
        this.hotels = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

}
