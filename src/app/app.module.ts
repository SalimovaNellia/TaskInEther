import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtherFormComponent } from './ether-form/ether-form.component';
import { MediafilesListComponent } from './mediafiles-list/mediafiles-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { EtherTaskStepsComponent } from './ether-task-steps/ether-task-steps.component';
import { TimeDurationComponent } from './time-duration/time-duration.component';

@NgModule({
  declarations: [
    AppComponent,
    EtherFormComponent,
    MediafilesListComponent,
    EtherTaskStepsComponent,
    TimeDurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
