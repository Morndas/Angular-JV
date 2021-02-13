import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

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

  saveNewJeu(jeu: any) {
    return new Observable(obs => {
      this.db.collection('jeux').add(jeu).then(() => {
        console.log('success');
        obs.next();
      });
    });
  }

  update(jeu: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`jeux/${id}`).update(jeu);
      obs.next();
    });
  }

}
