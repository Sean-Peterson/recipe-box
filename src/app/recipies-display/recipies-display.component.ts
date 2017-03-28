import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies-display',
  templateUrl: './recipies-display.component.html',
  styleUrls: ['./recipies-display.component.css']
})
export class RecipiesDisplayComponent implements OnInit {
  title = 'Recipie Box!';
  recipies: Recipie [] = [
  new Recipie("cerial", "uncle sams, almond milk", "put cerial in bowl. Pour on some almond milk. eat that shit.", 1),
  new Recipie("pasta", "pasta, pasta sauce, water, garlic", "boil water. put pasta in water. when it's done, drain water. put on sauce and garlic. eat that shit.", 2),
  new Recipie("apple", "granny smith", "wash apple. eat that shit.", 3),
  new Recipie("frozen pizza", "mama celeste", "heat oven. put in pizza. take it out when it smells good. eat that shit but don't burn your mouth.", 2),
  new Recipie("sandwich", "fake meat, lettuce, bread", "combine ingredients. eat that shit.", 1),
  new Recipie("bread", "flour, water, salt", "combine ingredients. bake bread. eat that shit.", 2),
  new Recipie("apple", "kale, lettuce, salad dressing", "combine ingredients. eat that shit.", 3),
  new Recipie("candy", "red vines", "open wrapper. eat that shit.", 2)
  ];
  constructor() { }

  ngOnInit() {
  }

  showEditForm(recipie) {
    recipie.showForm = true;
  }

  editTitle() {
    alert("Edit a task!");
  }

  difficultyColor(recipie) {
    if (recipie.difficulty === 3) {
      return "bg-danger";
    } else if (recipie.difficulty === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  selectedRecipie = null;


  editRecipie(recipie) {
    let selectedRecipie = recipie;
    console.log(selectedRecipie);
  }

  finishedEditing(recipie) {
    recipie.showForm = false;
  }
}


export class Recipie {
  haveTried: boolean = false;
  showForm: boolean = false;

  constructor(public title: string, public ingredients: string, public directions: string, public difficulty: number) { }

  tried() {
    if (this.haveTried === false) {
      return "no!"
    } else {
      return "yes!"
    }
  }


}
