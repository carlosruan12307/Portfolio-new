import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-button-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './button-header.component.html',
  styleUrl: './button-header.component.css'
})
export class ButtonHeaderComponent  {
   @Input() object : {textButton: string,route: string,class: string} = {textButton: "",route: "",class: ""}
 @Input() isActive : boolean = false;
   constructor(private router:Router){

   }


 }
