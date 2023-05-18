import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../httpcalls.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private service:HttpcallsService) { }

  ngOnInit(): void {
  }

  onClickSingle(){
    this.service.listSingle(0).subscribe(response=>{
      console.log(response);
    })
  }
  onClickAll(){
    
    this.service.listAll().subscribe(response=>{
      console.log(response);
    })
  }
  onClickUpdate(){
    const data={
      "id":23,
      "name": "fenil 4",
      "sku": 5,
      "price": 0,
      "quantity": 0
    }
    this.service.add(data).subscribe(response=>{
      console.log(response);
    })
  }
  onCliickDelete(){
    this.service.delete(2).subscribe(response=>{
      console.log(response);
    })
  }
  onClickInsert(){
    const data={
      "id":0,
      "name": "fenil 3",
      "sku": 5,
      "price": 0,
      "quantity": 0
    }
    this.service.add(data).subscribe(response=>{
      console.log(response);
    })
  }

}
