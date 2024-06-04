import { Component } from '@angular/core';
import { SimplePack } from 'src/app/models/simple-packet';
import { SimpleService } from 'src/app/services/simple.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  constructor(private simpleService:SimpleService){}

  pack:SimplePack = {
    input:0,
    result:0,
  };

  process(): void{
    this.simpleService.process(this.pack)
    .subscribe(result => this.pack = result);
    
  }

}
