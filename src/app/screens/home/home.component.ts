import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/datas/dataText.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  selectedValue: string | undefined;

  constructor(private dataService: DataService ) { 
    this.dataService.selectedValue$.subscribe((values) => {
      this.selectedValue = values;
    })
  }
  
  skills = ["Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"]
  
}

