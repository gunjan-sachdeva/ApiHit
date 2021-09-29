import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  newsData;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    const url="https://newsapi.org/v2/everything?q=bitcoin&from=2021-2-28&sortBy=publishedAt&apiKey=99f0539b57404813b2d0d5770c40f018";
    this.http.get(url)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.status=="ok")
        {
          this.newsData=this.resData.articles;
          console.log(this.newsData)
        }
      })
  }

}
