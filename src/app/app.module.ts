import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxEditorModule } from 'ngx-editor';
import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { WishCardComponent} from './components/wish-card/wish-card.component';
import {ProfileComponent} from './examples/profile/profile.component';
import { WishEditorComponent} from './components/wish-editor/wish-editor.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {WishComponent} from './components/wish/wish.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { PersonalComponent } from './personal/personal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExcerptPipe,
    WishCardComponent,
    ProfileComponent,
    WishEditorComponent,
    WishComponent,
    PaginatorComponent,
    SlugPipe,
    PersonalComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    CKEditorModule,
    NgxEditorModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularEditorModule,
    HttpClientModule,
    CovalentTextEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
