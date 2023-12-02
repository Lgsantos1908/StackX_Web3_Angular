import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  onClick(): void {
    window.open ('https://www.stackx.com.br/','_blank')
  }
}
