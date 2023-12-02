
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedValueSubject = new BehaviorSubject<string>('Olá, meu nome é Luiz Gabriel Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:');
  selectedValue$ = this.selectedValueSubject.asObservable();

  updateSelectedValue(value: string) {
    this.selectedValueSubject.next(value);
  }
}