import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { LanguageFooterComponent } from '../../components/language-footer/language-footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LanguageFooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
