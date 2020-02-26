import { Component, OnInit } from '@angular/core';
import { GroupByPipe } from 'ngx-pipes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[GroupByPipe]
})
export class HomeComponent implements OnInit {  

  collectionsList$: Observable<Item[]>;   
  
  collectionListGroupStatus: any = []
  constructor(private grouByPipe: GroupByPipe, private itemService: ItemsService) {}

  ngOnInit() {
    this.collectionsList$ = this.itemService.getItems();    
    this.load()
  }

  async load(){
    let list = await this.collectionsList$
    list.subscribe((items)=>{      
      let groupCollection = this.grouByPipe.transform(items, 'status');  
      
      Object.keys(groupCollection).map((key)=>{
        this.collectionListGroupStatus.push({name:key, data:groupCollection[key]})
      });
    })
    
  }
}
