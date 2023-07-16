import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ClipboardModule, MatIconModule],
})
export class DashboardComponent {

  inputText: string = '';
  outputText: string = '';

  handelReset() {
    this.inputText = '';
  }

  handlePaste() {
    navigator.clipboard.readText().then(pastedText => {
      this.inputText = this.inputText + pastedText;
    }).catch(error => {
      console.error('Error reading clipboard data:', error);
    });
  }

  handleConvert() {
    this.outputText = this.inputText;
  }

}
