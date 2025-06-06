import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button'; // necesario para mat-raised-button

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule],
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css'],
})
export class TestButtonComponent {
  constructor(private snackBar: MatSnackBar) {}

  showToast(): void {
    this.snackBar.open('¡Material funciona correctamente!', 'Cerrar', {
      duration: 3000,
    });
  }
}
