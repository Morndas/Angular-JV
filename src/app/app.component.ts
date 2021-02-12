import {Component, OnInit} from '@angular/core';
import {JeuxService} from './services/jeux/jeux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jeux';

  jeux: any = [  ];

  constructor(
    private Jeu: JeuxService
  ) {  }

  ngOnInit() {
    // this.jeux = this.Jeu.jeux;
  }
}
