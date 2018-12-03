import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private val :any;
  public signe1 : string;
  public history ;
  public leftOper:number;
  public rightOper: number;
  public anx : string;
  constructor(public navCtrl: NavController) {
    if(typeof(this.signe1) == 'undefined'){
      this.signe1 = "";
    } 

  }

  show(val){
    if(typeof(this.val) != 'undefined'){
      if(this.anx == this.val){
        this.anx ="";
        this.val = val;
      }else{

        this.val += val;
      }
      }else{
      this.val = val;
    }
  }
      operation(){
        if(this.val[this.val.length-1] == '-' || this.val[this.val.length-1] == '+' || this.val[this.val.length-1] == '*' || this.val[this.val.length-1] == '/'|| this.val[this.val.length-1] == '('){
          this.val = 'Error, one value missing';
          this.anx = this.val;
        }else{
          this.val = eval(this.val);
          this.anx = this.val;
          console.log(this.val[this.val.length-1])
        }
        if(this.val == 'Infinity'){
          this.val = 'Error,  division by zero';  
          this.anx = this.val;
        }
      }
    clearOne(){
      if (typeof(this.val) !== 'undefined') {
        let value = this.val.toString();
        this.val = value.slice(0,(value.length-1))
      }
    } 
    clearAll(){
      this.val ="";
    } 
}

