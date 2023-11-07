import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service.ts";
import { pacient } from "../../types/pacientlist.ts";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pacientList: pacient[] = [];
  constructor(private api:ApiService,private router:Router) {
  };
  ngOnInit(): void {
    this.api.getAllPacients(1).subscribe((data)=>{
      this.pacientList=data;
    });
  }
  editPacient(id:number){
    this.router.navigate(['/edit',id]);
  }
  newPacient(){
    this.router.navigate(['/new']);
  }
}
