import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidencias, IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent implements OnInit {

  incidenciaNueva: Incidencias={id:'', falla:'', electrodomestico:'', marca:'', modelos:''};

  constructor(private incidenciaService: IncidenciasService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarIncidencia(){
    this.incidenciaService.saveIncidencia(this.incidenciaNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      error=>console.log(error)
    );
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
