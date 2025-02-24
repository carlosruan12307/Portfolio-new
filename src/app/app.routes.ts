import { Routes } from '@angular/router';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
  {path:'',component: ResumoComponent},
  {path:'projetos',component: ProjetosComponent}

];
