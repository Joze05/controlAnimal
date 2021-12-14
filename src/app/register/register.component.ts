import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent {

  public data:any = {name:'', weight:'', birthday:''}

constructor() {} //constructor del componente


saveSheepData(){ //metodo que almacena los datos de la oveja en el localstorage

  console.log(this.data)
//localStorage.setItem("name","melcocha")

}


}



