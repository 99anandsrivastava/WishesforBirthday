import { Injectable } from '@angular/core';
import { Wish } from '../models/wishes';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private db: AngularFirestore) { }

  createWish(wish: Wish) {
    const wishData = JSON.parse(JSON.stringify(wish));
    return this.db.collection('wishes').add(wishData);
    }

    getAllWishes(): Observable<Wish[]> {
      const wishesList = this.db.collection<Wish>('wishes', ref => ref.orderBy('createdDate', 'desc'))
      .snapshotChanges().pipe(
      map(actions => {
      return actions.map(
      c => ({
        wishId: c.payload.doc.id,
      ...c.payload.doc.data()
      }));
      }));
      return wishesList;
      }

    getPostbyId(id: string): Observable<Wish> {
        const wishDetails = this.db.doc<Wish>('wishes/' + id).valueChanges();
        return wishDetails;
        }

    deleteWish(postId: string) {
          return this.db.doc('wishes/' + postId).delete();
          }
      
}
