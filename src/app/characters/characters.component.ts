import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe(
      response => {
        this.characters = response.characters.map((character: any) => ({
          ...character,
          showDetails: false
        }));
      },
      error => {
        console.log(error);
      }
    );
  }

  showDetails(character: any) {
    character.showDetails = !character.showDetails;
  }
}
