import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    SchedulerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SchedulerModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
