import {Component, Input, OnInit} from '@angular/core';
import {JeuxService} from '../services/jeux/jeux.service';

@Component({
  selector: 'app-jeu-new',
  templateUrl: './jeu-new.component.html',
  styleUrls: ['./jeu-new.component.css']
})
export class JeuNewComponent implements OnInit {

  public jeu: any = {
    name: null,
    genre: null,
    developer: null,
    editor: null,
    release_date: null,
    cover: null
  };

  create: any;

  constructor(
    private Jeu: JeuxService
  ) { }

  ngOnInit() {
  }

  add() {
    this.Jeu.saveNewJeu(this.jeu).subscribe(() => {
      this.jeu = {
        name: null,
        genre: null,
        developer: null,
        editor: null,
        release_date: null,
        cover: null
      };
      this.create = true;
      setTimeout(() => {
        this.create = false;
      }, 3000);
    });
  }

}
