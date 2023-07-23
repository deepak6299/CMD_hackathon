import { Component } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Appointment } from '../models/appointment';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { AddAppointmentService } from '../services/add-appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
// [x: string]: any;
 
appointmentForm!:FormGroup;
appointmentObj:Appointment=new Appointment();


doctorAll: any;
patientAll: any;




 

constructor(private formbuilder:FormBuilder,private addAppointment:AddAppointmentService){}
ngOnInit():void{
   this.appointmentForm=this.formbuilder.group({
  id:[''],
  date:['',Validators.required],
  time:['',Validators.required],
  duration:['',Validators.required],
  patient:['',Validators.required],
  reason:['',[Validators.required,Validators.maxLength(250)]],
  doctor:['',Validators.required],
  status:['',Validators.required]
})
this.getDoctorData();
this.getPatientData();
this.dateNotPrevious();
}


Appointments(){
  this.appointmentObj.date=this.appointmentForm.value.date;
  this.appointmentObj.time=this.appointmentForm.value.time;
  this.appointmentObj.duration=this.appointmentForm.value.duration;
  this.appointmentObj.patient=this.appointmentForm.value.patient;
  this.appointmentObj.reason=this.appointmentForm.value.reason;
  this.appointmentObj.doctor=this.appointmentForm.value.doctor;
  this.appointmentObj.status=this.appointmentForm.value.status;

  this.addAppointment.postAppointment(this.appointmentObj).subscribe(res=>{
    console.log(res);
    alert("added successfully");

  },
  err=>{
    alert("something went wrong");
  })
}

getDoctorData(){
  this.addAppointment.getDoctors().subscribe(res=>{
    this.doctorAll=res;

  })
}

getPatientData(){
  this.addAppointment.getPatient().subscribe(res=>{
    this.patientAll=res;

    console.log("ppppppppppppppppppppppppppppuibhiuiygbiyyyy",res)
  })
}

// for validation



minDate:any="";
maxDate:any=" ";
// Date should not be previous date
dateNotPrevious(){
  var date:any=new Date();
  var toDate:any=date.getDate();
  if(toDate<10){
    toDate ="0" + toDate;
  }
  var month:any=date.getMonth() +1;
  if(month<10){
    month="0"+ month;
  }
  var year= date.getFullYear();
  this.minDate=year +"-"+month+"-"+toDate;
  console.log(this.minDate);
}







get date(){
  return this.appointmentForm.get('date')
}
get time(){
  return this.appointmentForm.get('time')
}
get duration(){
  return this.appointmentForm.get('duration')
}
get reason(){
  return this.appointmentForm.get('reason')
}
get patient(){
  return this.appointmentForm.get('patient')
}
get doctor(){
  return this.appointmentForm.get('doctor')
}
get status(){
  return this.appointmentForm.get('status')
}
}
