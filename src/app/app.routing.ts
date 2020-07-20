import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { WishEditorComponent } from './components/wish-editor/wish-editor.component';
import { WishComponent} from './components/wish/wish.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'addwish',          component: WishEditorComponent },
    { path: 'wish/:id/:slug',   component: WishComponent },
    { path: 'page/:pagenum',    component: ProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
