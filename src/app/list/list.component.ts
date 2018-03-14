import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listObservable: Observable<any[]>;
  doctorsList: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.listObservable = this.getDoctorsList();
  }

  getDoctorsList() {
    return this.db.list('/doctors').valueChanges();
  }

}
