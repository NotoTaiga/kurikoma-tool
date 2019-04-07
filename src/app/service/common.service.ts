import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Member } from "../type/type";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public memberData:Member[];

  public httpGetMember():any{
    const memberUrl = "../assets/json/member.json";
    return this.http.get(memberUrl);
  }

  public setMemberData(memberData:Member[]):void{
    this.memberData = memberData;
  }

  public getMemberData():Member[]{
    return this.memberData;
  }

  public hasMemberData():boolean{
    if (this.memberData) {
      return true
    }else{
      return false
    }
  }


  public toolState:number;
  public setToolState(state:number):void{
    this.toolState = state;
  }
  public getToolState():number{
    return this.toolState;
  }
}
