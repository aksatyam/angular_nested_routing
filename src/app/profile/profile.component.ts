import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model: any = {};
  getCountry: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCountry = this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(res => {
        console.log(res);
      })
  }

  ngOnDestroy() {
    // ...

    if (this.getCountry) this.getCountry.unsubscribe();
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
