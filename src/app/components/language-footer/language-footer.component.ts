import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/datas/dataText.service';

@Component({
  selector: 'app-language-footer',
  templateUrl: './language-footer.component.html',
  styleUrl: './language-footer.component.scss'
})
export class LanguageFooterComponent {

  constructor(
    private dataService: DataService
  ) {}

  @Output() getValue = new EventEmitter<string>();
  setBtnPt = "Portugês";
  setBtnEn = "Inglês";
  setBtnEs = "Espanhol";

  language = [
    {
      en: "Hello, my name is Luiz Gabriel Santos and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Luiz Gabriel Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Luiz Gabriel Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:"
    }
  ]; 

  setValue(value:string){
    this.getValue.emit(value)

    if(value === 'pt'){
      this.setBtnPt = "Portugês"
      this.setBtnEn = "Inglês"
      this.setBtnEs = "Espanhol"
      this.dataService.updateSelectedValue(this.language[0].pt)
    
    } else if (value === 'en'){
      this.setBtnPt = "Portuguese"
      this.setBtnEn = "English"
      this.setBtnEs = "Spanish"
      this.dataService.updateSelectedValue(this.language[0].en)

    } else if(value === 'es'){
      this.setBtnPt = "Portugués"
      this.setBtnEn = "Inglés"
      this.setBtnEs = "Español"
      this.dataService.updateSelectedValue(this.language[0].es)

    }
  }

}
