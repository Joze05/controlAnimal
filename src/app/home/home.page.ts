import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{


sheep = {

date: ""

}

  constructor(private router: Router) {}

goToTable(){

this.router.navigate(['table'])

}

goToRegister(){

this.router.navigate(['register'])

}

}
