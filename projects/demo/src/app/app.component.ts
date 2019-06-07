import { Component, OnInit } from '@angular/core';
import { NavLinkModel } from '@fathym-it/hello-world-common';
import { NavigationConstants } from '../utils/constants/navigation.constants';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public Links: Array<NavLinkModel>;
  title = 'demo';

  public ngOnInit(): void {
    this.Links = NavigationConstants.MENU_ITEMS;
  }
}
