import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { menu } from 'src/app/content/config/menu';
import { Menu } from '../menu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  appPages: Menu[] = menu;
  constructor() { }

   getSideMenu(): Observable<Menu[]>{
    return of(this.appPages = menu
                   .sort((m1,m2) =>  m1.order - m2.order)
                   .filter((x=> x.ativo && x.typeMenu  == 'Side')));
  }
}
