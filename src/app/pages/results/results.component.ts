import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {  

  collectionsList$: Observable<Item[]>;

  constructor(private itemService: ItemsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.collectionsList$ = this.itemService.getItems();    
  }

  openDialog(info){
    
    this.dialog.open(ModalComponent, {
      width: '750px',
      data: info
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });    
  }

}
