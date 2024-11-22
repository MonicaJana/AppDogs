import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  saveBookWithDog(book: { title: string; image: string }) {
    const booksCollection = collection(this.firestore, 'booksWithDogs');
    return addDoc(booksCollection, book);
  }
}
