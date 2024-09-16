import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private firestore: AngularFirestore) { }

  obtenerColeccion(nombre: string): Observable<any[]> {
    return this.firestore.collection(nombre).valueChanges();
  }
}
