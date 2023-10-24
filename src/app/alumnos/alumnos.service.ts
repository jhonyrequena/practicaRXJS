import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

export interface Alumno {
  id: number;
  name: string;
  power: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  constructor() { }

  getAlumnos(): Observable<Alumno[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'IronMan',
          power: 'Billionarie',
        },
        {
          id: 2,
          name: 'Superman',
          power: 'Inmortal',
        },
        {
          id: 3,
          name: 'Flash',
          power: 'Supervelocidad',
        },
        {
          id: 4,
          name: 'Thor',
          power: 'Dios del Trueno',
        },
      ])
    })

  }
}
