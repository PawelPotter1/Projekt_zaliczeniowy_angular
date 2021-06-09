import { Component, OnInit } from '@angular/core';
import { WcagService } from 'src/app/services/wcag.service';

@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.css']
})
export class WcagComponent implements OnInit {
  public bigFontTemp = false;
  public darkModeTemp = false;
  constructor(private wcagService: WcagService) { }

  ngOnInit(): void {
  }

  bigFont(){
    this.wcagService.bigFont = !this.wcagService.bigFont;
    this.bigFontTemp = !this.bigFontTemp;
  }

  darkMode() {
    this.wcagService.darkMode = !this.wcagService.darkMode;
    this.darkModeTemp = !this.darkModeTemp;
    }

}
