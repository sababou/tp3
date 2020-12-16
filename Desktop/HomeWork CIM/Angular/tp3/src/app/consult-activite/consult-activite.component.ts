import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  constructor(private actRout: ActivatedRoute, private activiteService: ActiviteService, private monRouteur: Router) { }

  myParam;
  param2;
  nouveauNom;

  isInput = false;

  ngOnInit(): void {
    this.actRout.params.subscribe(parameter=>{
      this.myParam = parameter["id"];
      this.param2 = parameter["param2"];
      this.nouveauNom = this.getObjectif(this.myParam);
    })
  }



  saveElem(){
    this.activiteService.objectifs[this.myParam] = this.nouveauNom;
    this.isInput = false;
  }

  showInput(){
    this.isInput = true;
  }

  retourHome(){
    this.monRouteur.navigate(['index.html']);
  }




  getObjectif(myParam){
    return this.activiteService.objectifs[myParam];
  }

  getActiviteService(){
    return this.activiteService;
  }

  
  removeElem(i){
    this.activiteService.objectifs.splice(i,1);
    setTimeout(()=>{
      this.monRouteur.navigate(['index.html']);
    }, 1000);
    }

  secondParam(): boolean{
    if(this.param2 != undefined){
      return true;
    }else{
      return false;
    }
  }

}
