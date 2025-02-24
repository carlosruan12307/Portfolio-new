import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { ButtonHeaderComponent } from "../../components/button-header/button-header.component";
import { SobreComponent } from "../../components/sobre/sobre.component";
@Component({
  selector: 'app-resumo',
  standalone: true,
  imports: [CommonModule, ButtonHeaderComponent, SobreComponent],
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.css'
})
export class ResumoComponent implements OnInit,AfterViewInit  {


  @ViewChild("typewriter") t: ElementRef | undefined;
  activeRoute : string = "/"
  activeButtonIndex: number | null = null;
    list: {textButton: string,route: string,class: string}[] = [{textButton : "Veja Mais",route: "/",class: "buttonResumo"},{textButton : "Contate-me",route: "/projetos",class: "buttonResumo"}]
constructor(private routePath  : Location){

}
// Chamada ao clicar no botão
onButtonClick(index: number): void {

  this.activeButtonIndex = index;  // Define o índice do botão ativo
}
  click(){
    this.initTypewriterEffect();
  }
  ngAfterViewInit(): void {
    console.log(this.t?.nativeElement);
    this.initTypewriterEffect();
  }
  ngOnInit(): void {
    if(this.routePath.path() == ""){
      this.activeButtonIndex = 0
     }else{
      this.activeButtonIndex =  this.list.findIndex((e) => e.route == this.routePath.path())
     }

  }
  initTypewriterEffect(): void {
    const typewriter = new Typewriter(this.t?.nativeElement, {
      loop: false,
      delay: 75
    });

    typewriter
      .start()
    .typeString('Olá,<br>Meu nome é Ruan')
      .pauseFor(1000)
      .typeString('<br>Desenvolvedor FullStack')
      .pauseFor(1000)

  }
}
