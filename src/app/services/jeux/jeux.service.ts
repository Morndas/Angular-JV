import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllJeux();
  }

  jeux = [];

  getAllJeux() {
    return this.db.collection('jeux').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        });
      })
    ).subscribe(res => {
      this.jeux = res;
      // this.emitJeuSubject
    });
  }

}
