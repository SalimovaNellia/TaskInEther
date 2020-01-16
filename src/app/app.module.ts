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
import {MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { EtherTaskStepsComponent } from './ether-task-steps/ether-task-steps.component';
import { DurationComponent } from './duration/duration.component';
import { FormatDurationPipe } from './pipe/format-duration.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TimeComponent } from './time/time.component';
import { FormatTimePipe } from './pipe/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EtherFormComponent,
    MediafilesListComponent,
    EtherTaskStepsComponent,
    DurationComponent,
    FormatDurationPipe,
    TimeComponent,
    TimeComponent,
    FormatTimePipe
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
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
