import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediafilesListComponent} from './mediafiles-list/mediafiles-list.component';
import {EtherFormComponent} from './ether-form/ether-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'mediafiles-list', pathMatch: 'full' },
  { path: 'ether-form', component: EtherFormComponent },
  { path: 'mediafiles-list', component: MediafilesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
