import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  @Input() formDir!:NgForm | FormGroupDirective;
  @Input() campo:any = '';
  @Input() mensagem:string = '';
  @Input() error!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
