import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <label>id:</label> {{hero.id}}
      <label>name:</label> {{hero.name}}
    </div>
    <div *ngIf="hero">
      <input [(ngModel)]='hero.name' placeholder="name"/>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
