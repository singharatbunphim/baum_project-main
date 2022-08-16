import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/api/user.service';
import { User } from 'src/model/user';
import { CommonUtil } from 'src/utils/commonUtil';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss']
})
export class UserApiComponent implements OnInit {

    // เรียกใช้ Service
    userSrv: UserService;
    cfg = CommonUtil.getApiConfig();
  
    usersList : User[];
    user: User[];
    
    constructor(private http: HttpClient) {
    
      this.userSrv = new UserService(this.http, `${this.cfg.basePath}`, this.cfg);
  
     }

  ngOnInit(): void {
  }

  async loadUsers() {
    var users = await lastValueFrom(this.userSrv.getAllUsers()).then( (data :any) => {
      this.usersList = data.data;
    });
    //
  }


  async getUser(uid:any, callback: any = null) {

    // ส่งแบบ parameter body นำ formBody ไปใส่ใน function Ex. getUserbyUID(formBody)
    const formBody: any = {
      "uid" : uid
    }

    // ในกรณีนี้ ส่งไปแบบ parameter path Ex. getUserbyUID(uid)
    var users = await lastValueFrom(this.userSrv.getUserByUID(uid)).then( (data :any) => {
      this.user = data.data;
    });

    if (callback) {
      callback();
    }
    //
  }

}
