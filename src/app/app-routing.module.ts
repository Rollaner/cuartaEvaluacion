import { viewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasViewComponent } from '../app/components/notas-view/notas-view.component';
import {NotasUpdateComponent} from '../app/components/notas-update/notas-update.component';
import {NotasCreateComponent} from '../app/components/notas-create/notas-create.component';

const routes: Routes = [
  {path: '', component:NotasCreateComponent},
  {path: 'view', component:NotasViewComponent},
  {path: 'view/:id', component:NotasUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
