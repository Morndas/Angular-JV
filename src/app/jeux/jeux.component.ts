import {Component, Input, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

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

  constructor() { }

  ngOnInit() {
  }

}
