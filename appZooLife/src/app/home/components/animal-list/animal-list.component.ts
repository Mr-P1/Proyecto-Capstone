import { Component, OnInit } from '@angular/core';
import { FirestoreService } from'../../../services/firestore.service'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent  implements OnInit {
  datos: any;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.obtenerColeccion('animal').subscribe(data => {
      this.datos = data;
      console.log('Datos obtenidos de Firestore:', this.datos);
    }, error => {
      console.error('Error al obtener datos de Firestore:', error);
    });
  }
}
