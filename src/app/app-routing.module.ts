import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediafilesListComponent} from './mediafiles-list/mediafiles-list.component';
import {EtherFormComponent} from './ether-form/ether-form.component';
import {EtherTaskStepsComponent} from './ether-task-steps/ether-task-steps.component';


const routes: Routes = [
  { path: '', redirectTo: 'ether-task', pathMatch: 'full' },
  { path: 'ether-task', component: EtherTaskStepsComponent},
  { path: 'ether-form', component: EtherFormComponent },
  { path: 'mediafiles', component: MediafilesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
