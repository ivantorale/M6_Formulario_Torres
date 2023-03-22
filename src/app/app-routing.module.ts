import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { ResultadosComponent } from './resultados/resultados/resultados.component';
import { CampoComponent } from './campo/campo/campo.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'jugadores', component: BodyComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'campo', component: CampoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'formulariodos', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
