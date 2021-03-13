import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/core/menu/menu';
import { MenuService } from 'src/app/core/services/menu.service';
import { filter } from 'rxjs/operators';
let _subscriptions$: Subscription[] = [];

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage {
  appSidePages: Menu[];
  currentRouteUrl: string = this.router.url.split(/[?#]/)[0];

  constructor(private menuService: MenuService,
              private router: Router) { }

  ionViewWillEnter() {
    this.checkRouteEvents()
    this.getMenuTabs();
  }

  ionViewWillLeave(){
    _subscriptions$.map((subscription)=>subscription.unsubscribe())
  }

  checkRouteEvents() {
    _subscriptions$.push(this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
        console.log(this.currentRouteUrl)
      }));
  }

  getMenuTabs() {
    console.log('fdasda')
    _subscriptions$.push(this.menuService.getSideMenu()
      .subscribe((menu)=>{
        this.appSidePages = menu;
        console.log(this.appSidePages)
      }))
  }

  isActive(url: string): boolean {
    if (!url) { return; }

    if (this.currentRouteUrl === url) {
      return true;
    }
    return false;
  }
}
