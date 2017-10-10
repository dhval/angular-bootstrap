import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    <div>
      <ul class="list-group">
        <li class="list-group-item" *ngFor='let hero of heroes' (click)="onSelectHero(hero)">
          <span class="badge">{{hero.id}}</span>
          <span class="label label-info">{{hero.name}}</span>
        </li>
      </ul>
    </div>
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  title = 'Hero Tour';
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }
}
