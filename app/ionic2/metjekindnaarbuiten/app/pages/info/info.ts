import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Info } from '../../models/info';

@Component({
  templateUrl: 'build/pages/info/info.html'
})
export class InfoPage {

  info: Info = new Info();

  constructor(private nav: NavController) {
    this.load();
  }

  load() {
    let info = this.info;
    info.description = 'This is the metjekindnaarbuiten app created by Marinus Geuze as part of his developer quest';
    info.provider = 'Marinus Geuze';
    info.site = 'https://github.com/marinusgeuze/metjekindnaarbuiten';
    info.version = '0.0.1';
    info.updatedOn = new Date();
  }
}
