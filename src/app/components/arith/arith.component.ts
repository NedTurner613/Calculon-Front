import { Component } from '@angular/core';
import { Arithmetic } from 'src/app/models/arithmetic';
import { ArithService } from 'src/app/services/arith.service';
import { MessageService } from 'src/app/services/message.service';
import { SimpleService } from 'src/app/services/simple.service';

@Component({
  selector: 'app-arith',
  templateUrl: './arith.component.html',
  styleUrls: ['./arith.component.css']
})
export class ArithComponent {

  constructor(
    private messageService:MessageService,
    private arithService:ArithService
  ){}

  equationValues:Arithmetic ={
    a: 0,
    b: 0,
    x: undefined,
    y: undefined,
    operator: "+",
    toSolve: "y",
  }

  process(): void{
    this.log("Calculating...");
    this.arithService.process(this.equationValues)
      .subscribe(result => this.equationValues = result
      );
    this.log(`Calculation complete.`)
  }

  operatorSelect(operatorChange:string):void{
    this.equationValues.operator = operatorChange;
    this.log(`Operator set to ${this.equationValues.operator}`);
  }

  variableSelect(variableChange:string):void{
    // change the toSolve variable
    this.equationValues.toSolve = variableChange;
    this.log(`Variable to solve for set to ${variableChange}`)

  }





  


  log(message:string){
    console.log(`Arithmetic Component: ${message}`)
  }
}
