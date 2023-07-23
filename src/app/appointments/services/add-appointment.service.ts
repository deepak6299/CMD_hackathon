import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Patient } from '../models/patient';
import { Doctor } from '../models/doctor';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentService {

  constructor(private http:HttpClient){}

postPatient(patient:Patient){
return this.http.post<Patient>('http://localhost:3000/Patient',patient)

}
postDoctor(doctor:Doctor){
  return this.http.post<Doctor>('http://localhost:3000/Doctor',doctor)
  
  }

 

  postAppointment(appointment:Appointment){
    return this.http.post<Appointment>('http://localhost:3000/Appointment',appointment)
    
    }
  getDoctors(){
    return this.http.get('http://localhost:3000/Doctor')
  } 
  
  getPatient(){
    return this.http.get('http://localhost:3000/Patient')
  }
}
