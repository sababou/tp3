import { Component, OnInit } from '@angular/core';
import {trigger, style,transition, animate, keyframes, query, stagger} from '@angular/animations';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [ trigger('animobjectifs' , [
    transition ('*=>*' , [
    query(':enter', style({opacity: 0}), {optional : true}),
    query(':enter', stagger('300ms', [animate ('.6s ease-in', keyframes ([
    style({opacity: 0, transform:'translate(-75%)', offset:0}), style({opacity: .5, transform:'translateY(35px)', offset: .3}),
    style({opacity: 1, transform:'translateY(0)', offset:1}),]))]), {optional: true})
    ]) ])]
})
export class HomeComponent implements OnInit {

  
  constructor(private monRouteur: Router, private activiteService: ActiviteService) {}


  nbItems: number = 4;

  btnText: string = "Ajouter un item";
  objectifText: string;

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }


  getActiviteService(){
    return this.activiteService;
  }

  ajoutItem(): void{
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.activiteService.objectifs.length;
    setTimeout(()=>{
      this.monRouteur.navigate(['about']);
    }, 1000);
  }

  isNotTextEmpty(): boolean{
    if(this.objectifText != undefined ){
      return true;
    }else{
      return false;
    }
  }

  consultAct(i){
    this.monRouteur.navigate(['consultAct/'+i]);
  }
  

}
