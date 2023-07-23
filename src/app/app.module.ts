import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './appointments/add-appointment/add-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorComponent } from './doctor/doctor.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    AddPatientComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
