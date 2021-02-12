import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../services/jeux/jeux.service';

@Component({
  selector: 'app-jeu-modif',
  templateUrl: './jeu-modif.component.html',
  styleUrls: ['./jeu-modif.component.css']
})
export class JeuModifComponent implements OnInit {

  jeu: any;

  constructor(
    private Jeu: JeuxService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.jeu = this.jeu.getJeuById(id);
  }

}
