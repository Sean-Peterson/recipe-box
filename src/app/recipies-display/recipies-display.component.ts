import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies-display',
  templateUrl: './recipies-display.component.html',
  styleUrls: ['./recipies-display.component.css']
})
export class RecipiesDisplayComponent implements OnInit {
  title = 'Recipie Box!';
  recipies: Recipie [] = [
  new Recipie("cerial", "uncle sams, almond milk", "put cerial in bowl. Pour on some almond milk. eat that shit."),
  new Recipie("pasta", "pasta, pasta sauce, water, garlic", "boil water. put pasta in water. when it's done, drain water. put on sauce and garlic. eat that shit."),
  new Recipie("apple", "granny smith", "wash apple. eat that shit."),
  new Recipie("frozen pizza", "mama celeste", "heat oven. put in pizza. take it out when it smells good. eat that shit but don't burn your mouth.")
  new Recipie("sandwich", "fake meat, lettuce, bread", "combine ingredients. eat that shit."),
  new Recipie("bread", "flour, water, salt", "combine ingredients. bake bread. eat that shit."),
  new Recipie("apple", "kale, lettuce, salad dressing", "combine ingredients. eat that shit."),
  new Recipie("candy", "red vines", "open wrapper. eat that shit.")
  ];
  constructor() { }

  ngOnInit() {
  }

}

export class Recipie {
  haveTried: boolean = false;

  constructor(public title: string, public ingredients: string, public directions: string) { }

  tried() {
    if (this.haveTried === false) {
      return "yes!"
    } else {
      return "no!"
    }
  }


}
