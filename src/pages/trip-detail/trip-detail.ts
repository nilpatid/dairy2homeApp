import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  // number of adult
  public halfltr = 7;
  public oneltr = 0;
  public fiveltr = 0;
 

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trip = tripService.getItem(1);
  }

  // minus adult when click minus button
  minusHalfltr() {
    this.halfltr=this.halfltr-7;
  }

  // plus adult when click plus button
  plusHalfltr() {
    this.halfltr=this.halfltr+7;
  }

  // minus children when click minus button
  minusOneltr() {
    this.oneltr=this.oneltr-7;
  }

  // plus children when click plus button
  plusOneltr() {
    this.oneltr=this.oneltr+7;
  }
   // minus children when click minus button
  minusFiveltr() {
    this.fiveltr=this.fiveltr-7;
  }

  // plus children when click plus button
  plusFiveltr() {
    this.fiveltr=this.fiveltr+7;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage);
  }
}
