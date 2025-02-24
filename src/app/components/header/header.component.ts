import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonHeaderComponent } from "../button-header/button-header.component";
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonHeaderComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  activeRoute : string = "/"
  activeButtonIndex: number | null = null;
    list: {textButton: string,route: string,class : string}[] = [{textButton : "Resumo",route: "/",class: "buttonHeader"},{textButton : "Projetos",route: "/projetos",class: "buttonHeader"}]
constructor(private routePath  : Location){

}

    ngOnInit(): void {
     if(this.routePath.path() == ""){
      this.activeButtonIndex = 0
     }else{
      this.activeButtonIndex =  this.list.findIndex((e) => e.route == this.routePath.path())
     }

    }
  // Chamada ao clicar no botão
  onButtonClick(index: number): void {

    this.activeButtonIndex = index;  // Define o índice do botão ativo
  }
  }
