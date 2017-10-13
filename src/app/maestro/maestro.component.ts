import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  {name: 'Anne', age: 52, picture: 'https://img.20mn.fr/49x3TLvGSuiDhG2NprzTQQ/1200x768_anne-roumanoff-16-juin-2015', city: 'Lille', about: 'A vingt ans, tu gueules; à trente ans, tu fais la gueule; à quarante ans, tu fermes ta gueule.', height: 160, sport: 'Gym Suédoise', price: 25, fights: 5},
  {name: 'Steve', age: 35, picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAvaAAAAJGNjMGE4ZGU1LWJhNmEtNDFlYS04NDg0LTMxNjgyYTVkZjgwNg.jpg', city: 'Paris', about: 'Si Javabien, Javascript.', height: 187, sport: 'Java', price: 8, fights: 3},
  {name: 'Muhammad', age: 75, picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/225px-Muhammad_Ali_NYWTS.jpg', city: 'Lyon', about: 'Il est difficile d\'être humble lorsque vous êtes aussi grand que je le suis', height: 191, sport: 'Boxe Anglaise', price: 90, fights: 152},
  {name: 'Hicham', age: 22, picture: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAvnAAAAJDYwNzVhOGU1LTY2ZmItNDYxOC1iNDhlLTE4ODc5M2E0ZWIxMA.jpg', city: 'Sevran', about: 'Se raser la barbe c\'est comme jouer à la pétanque la nuit, tu es sûr de perdre tes boules', height: 170, sport: 'Boxe', price: 15, fights: 23},
  {name: 'Nawel', age: 22, picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAArJAAAAJDFhNDk3NWRjLTU5YjYtNGE4NC1iZGVkLTU5NDE4YWEwOGUwOQ.jpg', city: 'Paris', about: 'Tkt j\'arrivez pour casser des gueules. Si si.', height: 163, sport: 'Roule des clopes', price: 28, fights: 11},
  {name: 'Conor', age: 29, picture: 'https://i.pinimg.com/originals/dc/98/43/dc98432789ac386ae5674b66391cbfe4.jpg', city: 'Lyon', about: 'Je reste prêt pour pas avoir à me préparer.', height: 175, sport: 'MMA', price: 30, fights: 52},
  {name: 'Paul', age: 25, picture: 'https://avatars1.githubusercontent.com/u/25302722?s=460&v=4', city: 'Paris', about: 'I have no idea what I\'m doing.', height: 174, sport: 'Dresseur Pokémon', price: 5, fights: 1},
  {name: 'Tygnon', age: 0, picture: 'http://www.pokepedia.fr/images/thumb/6/6d/Tygnon_d%27Anthony.png/200px-Tygnon_d%27Anthony.png', city: 'Bourg-Palette', about: 'Tygnon.', height: 140, sport: 'Boxe Thai', price: 42, fights: 100},
];

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})

export class MaestroComponent {
  maestros = MAESTROS;
  basket: Maestro[] = [];
  selectedMaestro: Maestro;
  togglebasket: boolean = false;
  onSelect(maestro: Maestro) : void {
    this.selectedMaestro = maestro;
  }
  add(maestro: Maestro) {
    this.basket.push(maestro);
    this.togglebasket = true;
    setTimeout(() => {
      this.togglebasket = false;
    }, 1250);
  }
  toggle() {
    if(this.togglebasket) {
      this.togglebasket = false;
    }
    else {
      this.togglebasket = true
    };
  }
}
