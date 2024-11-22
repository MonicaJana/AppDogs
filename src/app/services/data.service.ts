import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private booksApi = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogApi = 'https://dog.ceo/api/breed/beagle/images/random';

  constructor(private http: HttpClient) {}

  // Obtener los libros
  getBooks(): Observable<any[]> {
    return this.http.get<any>(this.booksApi).pipe(map((data) => data.results));
  }

  // Obtener una imagen de perrito
  getDogImage(): Observable<string> {
    return this.http.get<any>(this.dogApi).pipe(map((data) => data.message));
  }

  // Combinar los datos de libros y perritos
  getBooksWithDogs(): Observable<any[]> {
    return this.getBooks().pipe(
      mergeMap((books) => {
        // Crear una lista de observables que combinan título e imagen
        const requests = books.map((book) =>
          this.getDogImage().pipe(
            map((dogImage) => ({ title: book.title, image: dogImage }))
          )
        );
        // Ejecutar todas las solicitudes en paralelo y combinarlas
        return forkJoin(requests);
      })
    );
  }
}
