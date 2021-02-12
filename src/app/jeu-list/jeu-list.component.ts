import { Component, OnInit, OnDestroy } from '@angular/core';
import { JeuxService } from '../services/jeux/jeux.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jeu-list',
  templateUrl: './jeu-list.component.html',
  styleUrls: ['./jeu-list.component.css']
})
export class JeuListComponent implements OnInit, OnDestroy {

  jeux: any = [];
  jeuSubscription: Subscription;

  constructor(
    private Jeu: JeuxService
  ) { }

  ngOnInit() {
    this.jeuSubscription = this.Jeu.jeuSubject.subscribe((listJeu) => {
      this.jeux = listJeu;
    });
    this.Jeu.emitJeuSubject();
  }

  ngOnDestroy() {
    this.jeuSubscription.unsubscribe();
  }

}
