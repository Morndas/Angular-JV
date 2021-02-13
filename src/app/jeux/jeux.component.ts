import {Component, Input, OnInit} from '@angular/core';
import {JeuxService} from '../services/jeux/jeux.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  @Input() name: string;
  @Input() genre: string;
  @Input() developer: string;
  @Input() editor: string;
  @Input() release_date: string;
  @Input() cover: string;
  @Input() id: string;

  constructor(
    private Jeu: JeuxService
  ) { }

  ngOnInit() {
  }

  supr() {
    this.Jeu.delete(this.id);
  }

}
