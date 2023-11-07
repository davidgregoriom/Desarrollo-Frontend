import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { pacientcomplete } from "../../types/pacient.ts";
import { ApiService } from "../../services/api/api.service.ts";
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private api:ApiService) { }

  dataPacient:pacientcomplete|undefined;
  edictFormGroup = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    dni:new FormControl(''),
    address:new FormControl(''),
    token:new FormControl(''),
    pacient:new FormControl('')
  });

  ngOnInit(): void {
    const pacientid = this.activatedRoute.snapshot.paramMap.get('id');
    const token= this.getToken();
    console.log(token);
    this.api.getPacient(pacientid).subscribe((data)=>{
        this.dataPacient = data[0];
        this.edictFormGroup.setValue({
          'name':this.dataPacient.name,
          'email':this.dataPacient.email,
          'phone':this.dataPacient.phone,
          'dni':this.dataPacient.dni,
          'address':this.dataPacient.address,
          'token':token,
          'pacient':pacientid
        });
      console.log(this.edictFormGroup.value);
    });
  }
  getToken(){
    return localStorage.getItem('token');
  }
  postForm(pacient:pacientcomplete){
    this.api.putPacient(pacient).subscribe((data)=>{
      console.log(data);
    });
  }
  deleteForm():void{
    const data:pacientcomplete = this.edictFormGroup.value;
    this.api.deletePacient(data).subscribe((data)=>{
      console.log(data);
    });
  }
}

