import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediafilesListComponent} from './mediafiles-list/mediafiles-list.component';
import {EtherFormComponent} from './ether-form/ether-form.component';
import {SuccessComponent} from './success/success.component';


const routes: Routes = [
  { path: '', redirectTo: 'mediafiles', pathMatch: 'full' },
  { path: 'ether-settings', component: EtherFormComponent },
  { path: 'mediafiles', component: MediafilesListComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
