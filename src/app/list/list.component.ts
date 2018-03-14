import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SharedService]
})
export class ListComponent implements OnInit {

  doctorsList: any;
  filteredDoctorsList: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.fetchDoctorsList()
      .subscribe(data => {
        this.doctorsList = Object.values(data);
        this.filteredDoctorsList = Object.values(data);
        console.log(this.doctorsList);
      },
      error => {
        alert(error.message);
      });
  }

}
