import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('infoData') infoData: any;

  constructor() { }

  ngOnInit() {  }

  getClass(status){    
    switch (status) {
      case 'Vistos recentemente ou em andamento':
        return {class:'working', icon: 'check_circle_outline'} 
      case 'Já Visto':
        return {class:'watched', icon: 'check_circle'}
      case 'Desejados':
        return {class:'wished', icon: 'how_to_vote'}  
      default:
        return {class:'working', icon: 'offline_pin'}
    }
  }

}
