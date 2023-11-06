import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NewComponent } from './views/new/new.component';
import { EditComponent } from './views/edit/edit.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NewComponent, EditComponent]
export const routingPaths = ['login', 'dashboard', 'new', 'edit']
