import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'ACB-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend06';
}
