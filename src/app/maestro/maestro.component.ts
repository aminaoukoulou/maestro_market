import { Component, OnInit } from '@angular/core';

export class Maestro {
  name: string;
  age: number;
  picture: string;
  city: string;
  about: string;
  height: number;
  sport: string;
  price: number;
  fights: number;
}

const MAESTROS: Maestro[] = [
  {name: 'Tyson', age: 45, picture: 'https://i.pinimg.com/736x/76/9e/0d/769e0dbe6e1e369d9fe6e11b7aa77196--earl-sweatshirt-mike-tyson.jpg', city: 'Paris', about: 'Tout le monde avait des projets jusqu\'à ce qu’il soit frappé.', height: 178, sport: 'Boxe', price: 50, fights: 73},
  {name: 'Conor', age: 29, picture: 'https://i.pinimg.com/originals/dc/98/43/dc98432789ac386ae5674b66391cbfe4.jpg', city: 'Lyon', about: 'Je reste prêt pour pas avoir à me préparer.', height: 175, sport: 'MMA', price: 30, fights: 52},
  {name: 'Anne', age: 52, picture: 'https://img.20mn.fr/49x3TLvGSuiDhG2NprzTQQ/1200x768_anne-roumanoff-16-juin-2015', city: 'Lille', about: 'A vingt ans, tu gueules; à trente ans, tu fais la gueule; à quarante ans, tu fermes ta gueule.', height: 160, sport: 'Gym Suédoise', price: 25, fights: 5},
]

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent {

  constructor() { }

  ngOnInit() {
  }

}
