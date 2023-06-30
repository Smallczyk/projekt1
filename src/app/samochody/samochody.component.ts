import { Component, Input, OnInit } from '@angular/core';
import { Samochod } from 'src/samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.scss']
})
export class SamochodyComponent implements OnInit{
  @Input()
  samochody: Samochod[] = [];

  constructor() { }
  ngOnInit() { }
  }