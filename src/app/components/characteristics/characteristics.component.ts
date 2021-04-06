import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {
  @Input () listCharacteristics:any = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.listCharacteristics)
  }

}


