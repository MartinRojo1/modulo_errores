import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../service/service-errors.service'; 
import { data } from '../models/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.scss'
})

export class ErrorsComponent implements OnInit {
  pepe:any = {};
  constructor(private service:ErrorsService){
  }

  ngOnInit():void{
    this.service.getErrors().subscribe(a => console.log(a))
  }
}

