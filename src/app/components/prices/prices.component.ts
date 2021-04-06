import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {


  @ Input () productOfferingPrices: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productOfferingPrices)
  }

}
