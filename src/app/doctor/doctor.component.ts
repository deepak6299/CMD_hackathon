import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from '../appointments/models/doctor';
import { AddAppointmentService } from '../appointments/services/add-appointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  doctorForm!:FormGroup;

  doctorObj:Doctor=new Doctor();
  constructor(private formbuilder:FormBuilder,private addAppointment:AddAppointmentService){}
  ngOnInit():void{
    this.doctorForm=this.formbuilder.group({
      id:[''],
      name:[''],
      speciality:[''],
      gender:[''],
      age:['']
     
    })
  }
  
  
  Doctor(){
    this.doctorObj.name=this.doctorForm.value.name;
    this.doctorObj.speciality=this.doctorForm.value.speciality;
    this.doctorObj.gender=this.doctorForm.value.gender;
    this.doctorObj.age=this.doctorForm.value.age;
  
    this.addAppointment.postDoctor(this.doctorObj).subscribe(res=>{
      console.log(res);
      alert("added successfully")
    },
    err=>{
  alert("something went wrong")
    }
    )
  }
  
}
