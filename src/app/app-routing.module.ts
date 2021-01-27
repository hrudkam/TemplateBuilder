import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplatesComponent } from './components/templates/templates.component';
const routes: Routes = [
  {path: '', component: TemplatesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'templates/:id', component: TemplatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
