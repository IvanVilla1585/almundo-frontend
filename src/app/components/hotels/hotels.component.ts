import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel/hotel.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [HotelService]
})
export class HotelsComponent implements OnInit {

  private searchForm: FormGroup;
  private hotels: Array<object>;
  public openFilterName: boolean;
  public openFilterStar: boolean;
  private stars: Array<any>;
  private rowsStar: Array<any>;
  constructor(
    private _hotelService: HotelService,
    private fb: FormBuilder
  ) {
    this.hotels = [];
    this.stars = [];
    this.rowsStar = [];
    this.openFilterName = true;
    this.openFilterStar = true;
  }

  ngOnInit() {
    this.rowsStar = new Array(5);
    this.fetchDataHotels('');
    this.createForm();
  }

  /**
   * Save and delete stars
   * @params {number} numbers stars
   */
  selectStar(stars) {
    const size = this.stars.length;
    if (this.searchForm.get(`star${stars}`).value) {
      this.stars.push(stars);
    } else {
      this.stars = this.stars.filter(data => data !== stars);
    }
    if (size === 5) {
      this.searchForm.get('all').setValue(true);
    } else if (size === 4) {
      this.searchForm.get('all').setValue(false);
    }
  }

  /**
   * Open filters
   * @params {boolean} property to change
   */
  openFilters(property) {
    if (property === 'openFilterName') {
      this.openFilterName = !this.openFilterName;
    } else if (property === 'openFilterStar') {
      this.openFilterStar = !this.openFilterStar;
    }
  }

  /**
   * Check and uncheck all checkbox in the search form
   */
  selectAndUnselectAll() {
    const value = this.searchForm.get('all').value;
    if (value) {
      this.stars = [];
    }
    for (let i = 1; i <= 5; i++) {
      this.searchForm.get(`star${i}`).setValue(value);
      this.selectStar(i);
    }
  }

  /**
   * Search hotels with filter data
   * @returns {string}
   */
  filterHotels() {
    const data: any = {};
    const size: number = this.stars.length;
    const search: string = this.searchForm.get('search').value;
    if (search) {
      data.name = search;
      if (size > 0 && size < 5) {
        data.stars = this.stars;
      }
    } else if (size > 0 && size < 5) {
      data.stars = this.stars;
    }
    const query: string = this.parseFilters(data);
    this.fetchDataHotels(query);
  }

  /**
   * Serialize object to stringify parameters '?foo=bar'
   * @params {object} filters
   * @returns {string}
   */
  parseFilters(filters: object): string {
    if (!filters) {
      return '';
    }
    let response = '';
    Object.keys(filters).map(key => {
      response += `&${key}=${JSON.stringify(filters[key])}`;
    });
    return `?${response.substring(1)}`;
  }

  /**
   * Create search form
   */
  createForm() {
    this.searchForm = this.fb.group({
      search: [''],
      all: [''],
      star5: [''],
      star4: [''],
      star3: [''],
      star2: [''],
      star1: ['']
    });
  }

  /**
   * Check and uncheck all checkbox in the search form
   * @params {string} query stringify parameters
   */
  fetchDataHotels(query) {
    this._hotelService.findHotels(query)
      .subscribe(
        (res: any) => {
          this.hotels = res;
        },
        err => {
          console.log('error', err);
        }
      );
  }

}
