import { Component } from '@angular/core';
import { TestButtonComponent } from "./shared/components/test-button/test-button.component";

@Component({
  selector: 'app-root',
  imports: [TestButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rlm-frontend';
}
