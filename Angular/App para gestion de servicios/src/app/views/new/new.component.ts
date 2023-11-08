import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { pacientcomplete } from "../../types/pacient";
import { ApiService } from "../../services/api/api.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { response } from "../../types/response";
import { AlertService } from "../../services/alerts/alert.service";



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{


  newForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    dni:new FormControl(''),
    address:new FormControl(''),
    token:new FormControl(''),
    pacient:new FormControl('')
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private api:ApiService, private alert:AlertService) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.newForm.patchValue({
      'token':token
    });
  }
  postForm(pacient:pacientcomplete){
    this.api.postPacient(pacient).subscribe((data)=>{
      const response:response = data;
      if(response.status === 200){
        this.alert.showSuccess(response.message,'Success');
      }else{
        this.alert.showError(response.message,'Error');
      }

    });
  }
  out():void{
    this.router.navigate(['/dashboard']);
  }
}
