import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class SharedService {

  apiUrl = 'assets/sampleData.json';

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  fetchDoctorsList() {
    return this.http.get(this.apiUrl);
  }

  getDoctorsList() {
  	return this.db.list('/doctors').valueChanges();
  }
}
