import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TemplatesComponent } from './components/templates/templates.component';
const routes: Routes = [
  {path: '', component: TemplatesComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'templates/:id', component: TemplatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
