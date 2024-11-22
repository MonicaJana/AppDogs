import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {

  items: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooksWithDogs().subscribe((data) => {
      this.items = data;
    });
  }

}
