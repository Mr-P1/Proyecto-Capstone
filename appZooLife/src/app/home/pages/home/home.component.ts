import { Component, OnInit } from '@angular/core';
import { FirestoreService } from'../../../services/firestore.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  datos: any[] = [];
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

