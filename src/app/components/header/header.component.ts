import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/user';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  authenticated$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router, private itemService: ItemsService){
    this.user$ = this.authService.getUser();
    this.authenticated$ = this.authService.isAuthenticated();
  }

  myControl = new FormControl();
  options: any[] = [];
  items$: Observable<Item[]>;

  filteredOptions: Observable<any[]>;

  ngOnInit() {
    this.items$ = this.itemService.getItems();
    this.items$.subscribe((o)=>{
      this.options = o
    })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.options.slice())
      );
  }

  displayFn(collection?: any): string | undefined {
    return collection ? collection.title : undefined;
  }

  private _filter(title: string): any[] {
    const filterValue = title.toLowerCase();

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
