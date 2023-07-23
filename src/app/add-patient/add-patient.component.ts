import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../appointments/models/patient';
import { AddAppointmentService } from '../appointments/services/add-appointment.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

patientForm!:FormGroup

patientObj:Patient=new Patient();
constructor(private formbuilder:FormBuilder,private addAppointment:AddAppointmentService){}
ngOnInit():void{
  this.patientForm=this.formbuilder.group({
    id:[''],
    name:[''],
    gender:[''],
    age:[''],
    date_of_birth:[''],
    mobile_number:[''],
    address:[''],
  })
}


Patient(){
 console.log( this.patientForm.value);
  this.patientObj.name=this.patientForm.value.name;
  this.patientObj.gender=this.patientForm.value.gender;
  this.patientObj.age=this.patientForm.value.age;
  this.patientObj.date_of_birth=this.patientForm.value.date_of_birth;
  this.patientObj.mobile_number=this.patientForm.value.mobile_number;
  this.patientObj. address=this.patientForm.value. address;

  this.addAppointment.postPatient(this.patientObj).subscribe(res=>{
    console.log(res);
    alert("added successfully")
  },
  err=>{
alert("something went wrong")
  }
  )
}

}
