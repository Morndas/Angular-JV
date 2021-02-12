import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { JeuxComponent } from './jeux/jeux.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { JeuxService } from './services/jeux/jeux.service';
import { HomeComponent } from './home/home.component';
import { JeuListComponent } from './jeu-list/jeu-list.component';
import { JeuModifComponent } from './jeu-modif/jeu-modif.component';
import { JeuNewComponent } from './jeu-new/jeu-new.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'jeux',
    component: JeuListComponent
  },
  {
    path: 'new',
    component: JeuNewComponent
  },
  {
    path: 'modif/:id',
    component: JeuModifComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FilmComponent,
    JeuxComponent,
    HomeComponent,
    JeuListComponent,
    JeuModifComponent,
    JeuNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JeuxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
