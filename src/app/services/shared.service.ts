import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SharedService {

  apiUrl = 'assets/sampleData.json';

  constructor(private http: HttpClient) { }

  fetchDoctorsList() {
    return this.http.get(this.apiUrl);
  }
}
