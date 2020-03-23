import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any[] = [];
  term:string;
  @Input() index:number;

  constructor(  private activatedRoute:ActivatedRoute,
                private _heroesService: HeroesService,
                private router:Router   ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.heroes = this._heroesService.buscarHeroes( params['term'] );
    })
  }

  verHeroe () {
    this.router.navigate(['/heroe',this.index]);
  }

}
