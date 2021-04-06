import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfertasService } from './service/ofertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemOferts:any[] =[];
  listCharacteristics: any[] = [];
  formUssr!:FormGroup;
  title = 'pruebaMetnet';
  versions={
    id:'',
    name:''
  };
  productOfferingPrices={
    precioBase:'',
    impuestoIva:'',
    impuestoOtro:'',
    precioVenta:''
  }
  ofert= false;
  constructor(private serviceOferts:OfertasService,
              private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.formUssr = this.fb.group({
      ofert:['']
    })
    this.loadOferts();
    this.formUssr.controls['ofert'].valueChanges.subscribe((value) =>{
      if(value != ''){
        this.listCharacteristics = [];
        this.versions.name = value.versions[0].name;
        this.versions.id = value.versions[0].id
        this.listCharacteristics = value.versions[0].characteristics;
        this.updatePrices(value.versions[0].productOfferingPrices)
      }else{
      }
    })
  }
  loadOferts(){
    this.serviceOferts.getOferts().subscribe((item) => {
      this.itemOferts = item;
      this.formUssr.controls['ofert'].setValue(this.itemOferts[0]);
    })

  }
  mapCharacterist(item:any[]){
      this.listCharacteristics = item;
  }
  updatePrices(item: any[]){

    item.find((value)=>{
      switch (value.id) {
        case "CT_TecPrecioBaseOTC":
          this.productOfferingPrices.precioBase = value.versions[0].price.amount;
          break;
        case 'CT_TecPromocionPrecioBaseOTCD':
          this.productOfferingPrices.precioVenta = value.versions[0].price.amount;
          break;
        case "CT_TecTaxIVA":
          this.productOfferingPrices.impuestoIva = value.versions[0].price.amount;
          break;
        case "CT_TecPromocionFueraPrecioBaseOT":
          this.productOfferingPrices.impuestoOtro = value.versions[0].price.amount;
          break;
      }
    })
  }

}
