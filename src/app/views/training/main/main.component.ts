import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any[];
  constructor(private http: HttpClient) {
        // this.http.get("https://api.baum.co.nz/users",
        // {
        //   headers: new HttpHeaders ({
        //     "content-type": "application/json",
        //   }),
        // }).subscribe((res)=> console.log(res))
   }


  ngOnInit(): void {
  }
}
