import { Component, OnDestroy } from '@angular/core';
import { Alumno, AlumnosService } from './alumnos.service';
import { Observable, Subscription, map, take } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnDestroy {

  alumnos$: Observable<Alumno[]>;
  name: string[] = [];
  count = 0;

  countSubscription: Subscription;

  constructor(private alumnosService: AlumnosService) {
    this.alumnos$ = this.alumnosService.getAlumnos();

    this.countSubscription = this.alumnos$.subscribe({
        next: (alumnos) => {
          this.name = alumnos.map(alumno => alumno.name);
          this.count = this.name.length;
        }
    })
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }
}
