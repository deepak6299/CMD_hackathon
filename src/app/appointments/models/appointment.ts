import { Doctor } from "./doctor";
import { Patient } from "./patient";

// Entity class
export class Appointment{
    id:number=0;
    date:Date=new Date;
    time:string='';
    duration:string='';
    patient!:Patient;
    reason:string='';
    doctor!:Doctor;
    status:string='';


}