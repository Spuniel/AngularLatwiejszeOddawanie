import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dhadrian_12BMI';

  wzrost:number = 0;
  waga: number = 0;
  ocena: string = "niedowaga";
  bmi: number = 0;
  sciezka: string = 'bmi1.png';


  kalkulatorBMI(){
    this.bmi = this.waga / ((this.wzrost/100) ** 2);
    console.log(this.bmi);
    if( this.bmi < 18.5 ){

      this.ocena = "niedowaga";
      this.sciezka = 'bmi1.png';

    } else if ( this.bmi >= 18.5 && this.bmi < 24.9){

      this.ocena = "waga prawidłowa";
      this.sciezka = 'bmi2.png';

    } else if ( this.bmi >= 25 && this.bmi < 29.9){

      this.ocena = "nadwaga";
      this.sciezka = 'bmi3.png';

    } else if ( this.bmi >= 30 ){

      this.ocena = "otyłość";
      this.sciezka = 'bmi4.png';

    }

  }


  
}
