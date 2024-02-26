import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../service/service-errors.service'; 
import { data } from '../models/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})

export class ErrorsComponent implements OnInit {
  pepe: any[] = []; // Declarar pepe como un array
  pepe1: any[] = []; 
  
  constructor(private service: ErrorsService) {}

  ngOnInit(): void {
    this.service.getErrors().subscribe(result => {
      // Convertir el objeto result.data.date a un array y asignarlo a pepe
      this.pepe = Object.values(result.data.nombre_del_error);
      this.pepe1= Object.values(result.data.date);
    });
  }
}

