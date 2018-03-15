import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listObservable: Observable<any[]>;
  doctorsList = [];
  searchParam: string;
  loading = true;
  initialList = [];

  page = 1;
  currentPage = 1;
  pageSize = 10;
  totalRecords: any;
  totalPages: any;
  numberOfRecordsToLoad: any;
  remainingRecords: any;
  startIndex = 0;
  endIndex: any;
  filteredList = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.listObservable = this.getDoctorsList();
    this.getDoctorsList()
      .subscribe(snapshot => {
        this.initialList = snapshot;
        this.totalRecords = this.initialList.length;
        this.filteredList = [...this.initialList];
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        this.lazyLoadRecords(this.currentPage);
        this.loading = false;
      });
  }

  getDoctorsList() {
    return this.db.list('/doctors').valueChanges();
  }

  filterList() {
    if (this.searchParam !== '') {
      this.filteredList = this.initialList.filter(each => each.name.toLowerCase().indexOf(this.searchParam.toLowerCase()) > -1);
    } else {
      this.filteredList = [...this.initialList];
    }
    this.totalRecords = this.filteredList.length;
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
    this.startIndex = 0;
    this.lazyLoadRecords(this.currentPage);
  }

  lazyLoadRecords(pageNumber) {
    this.startIndex = (pageNumber - 1) * this.pageSize;
    this.page = pageNumber;
    if (this.totalPages === pageNumber) {
      this.endIndex = this.totalRecords;
    } else {
      this.endIndex = pageNumber * this.pageSize;
    }
    this.doctorsList = this.filteredList.slice(this.startIndex, this.endIndex);
  }

  nextPage(pageNo) {
    this.lazyLoadRecords(pageNo);
  }
}
