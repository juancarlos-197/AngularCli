import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-heder',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './heder.component.html',
  styleUrl: './heder.component.css'
})
export class HederComponent {

}
