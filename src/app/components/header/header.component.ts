import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  options: any[] = [
    {status:"Vistos recentemente ou em andamento", title:"Harry Potter", img:"https://img.quizur.com/f/img5e271d85b32176.75186954.jpg?lastEdited=1579621773", type:"Filme", stars: 4.3},
	
    {status:"Já Visto", title:"The Big Bang Theory", img:"https://s2.glbimg.com/LUbNMwVEbrQ7UCd-CicWqL0tV_Y=/362x536/https://s2.glbimg.com/aRuGAenCi9cZJGCNwfTnWucVyGU=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/g/x/v9MQb2ToyQ4L77w3mJ2A/2018-216-midia-kit-series-the-big-bang-theory-poster.jpg", type:"Série", stars: 4.5},
	
    {status:"Vistos recentemente ou em andamento", title:"Biblia Sagrada", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFuDOdKZeyQT_3jtIxbwjVU9uFBeFGkobNLqxC7u1xDWR03Sj9", type:"Livro", stars: 5},
	
    {status:"Vistos recentemente ou em andamento", title:"Suits", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeqCx9nMlN3XiSh8dLK_HeYVUhbMeMn4-gS_pucEuKHD1HxSoj", type:"Série", stars: 3.3},
	
	{status:"Vistos recentemente ou em andamento", title:"God Friend Me", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ82CzvChx_lCVvRNEcpHURdurPbVgwH1oX1_i14LZ8r0g2M-9", type:"Série", stars: 3.8},
	
	{status:"Desejados", title:"Parasita", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOawEr707LF0O1jp05RqSIIc1DH-y2mr8-uml-PPv51C8VgxOQ", type:"Filme", stars: 0},
	
	{status:"Já Visto", title:"Silicon Valley", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOawEr707LF0O1jp05RqSIIc1DH-y2mr8-uml-PPv51C8VgxOQ", type:"Série", stars: 3.1},
	
	{status:"Já Visto", title:"Vingadores: Ultimato", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFBrcCLOW7m3LTRsTWfTF9x0JgbeMUbLlzUgePeuF0A9eIqBYi", type:"Filme", stars: 4},
	
	{status:"Já Visto", title:"A sutil arte de ligar o f*oda-se", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrgSJfw3SXh3qVF0M6TZMIYuUBiNnFtA1AH-8DH0AMrDmVRbmJ", type:"Livro", stars: 3.1},
	
	{status:"Desejados", title:"Como fazer amigos e influenciar pessoas", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI_2XLDIA9nhVmeacPLHCCZwTEPCA91DYTBU4ekxG4aMfdbXtB", type:"Livro", stars: 0},
	
	{status:"Já Visto", title:"Joker", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaXtzHdPWsg6apaJ1oMhdiEWlBq2bdPuZa042ZDtTTnflUnJ3y", type:"Filme", stars: 4},
	
	{status:"Já Visto", title:"Toy Story 4", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9WWSfhTXYuwSiHBO3VfV4cAY0PlgRCP0I01LxGv8inaIFJv2j", type:"Filme", stars: 4.3},
	
	{status:"Vistos recentemente ou em andamento", title:"Doctor Who", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJD_uYGz7oTgEmn3KVV4POLjmlhZEg-DPVXp8BsK0dhIo7KfFW", type:"Série", stars: 3.5},
	
	{status:"Já Visto", title:"Doutor House", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFkcp2iNzHGb6TcZMBeQGJPbtXIkUhiIEesADrIj762_8bwmXt", type:"Série", stars: 4},
];

  filteredOptions: Observable<any[]>;

  ngOnInit() {
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

}
