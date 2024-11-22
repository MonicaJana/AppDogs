import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {

  items: any[] = [];
  constructor(private dataService: DataService,
    private firestoreService : FirestoreService
  ) { }

  ngOnInit() {
    this.dataService.getBooksWithDogs().subscribe((data) => {
      this.items = data;
    });
  }
  saveToFirestore() {
    this.items.forEach((item) => {
      this.firestoreService
        .saveBookWithDog(item)
        .then(() => console.log('Saved:', item))
        .catch((error) => console.error('Error saving:', error));
    });
  }

}
