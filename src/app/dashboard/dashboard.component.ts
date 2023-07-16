import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UnicodeConverterService } from 'src/shared/service/unicode-converter/unicode-converter.service';
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

  constructor(
    public unicodeConverter: UnicodeConverterService,
  ) {}

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
    this.outputText = this.unicodeConverter.convertToKap(this.inputText);
  }

}
