import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(res => {
        console.log(res);
      })
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
