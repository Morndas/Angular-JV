import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllJeux();
  }

  private jeux = [];
  jeuSubject = new Subject<any>();

  emitJeuSubject() {
    this.jeuSubject.next(this.jeux.slice());
  }

  getAllJeux() {
    return this.db.collection('jeux').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.jeux = res;
      this.emitJeuSubject();
    });
  }

  getJeuById(id: number) {
    for (const jeu of this.jeux) {
      if (jeu.id === id) {
        return jeu;
      }
    }
  }

}
