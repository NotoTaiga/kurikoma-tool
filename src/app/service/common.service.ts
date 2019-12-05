import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Member } from "../type/type";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public memberData: Member[] = [
    {
      Id: 0,
      Name: "たいが",
      Attendance: true
    }, {
      Id: 1,
      Name: "ふさ",
      Attendance: true
    }, {
      Id: 2,
      Name: "ザン",
      Attendance: true
    }, {
      Id: 3,
      Name: "Dynamis",
      Attendance: true
    }, {
      Id: 4,
      Name: "Xiaoqing",
      Attendance: true
    }, {
      Id: 5,
      Name: "Loh",
      Attendance: true
    }
  ];

  public selectZemiMemberArr: Member[][] = [[
    {
      Id: 0,
      Name: "たいが",
      Attendance: true
    }, {
      Id: 1,
      Name: "ふさ",
      Attendance: true
    }, {
      Id: 2,
      Name: "ザン",
      Attendance: true
    }, {
      Id: 3,
      Name: "Dynamis",
      Attendance: true
    }, {
      Id: 4,
      Name: "Xiaoqing",
      Attendance: true
    }, {
      Id: 5,
      Name: "Loh",
      Attendance: true
    }
  ], [
    {
      Id: 0,
      Name: "ハタダ",
      Attendance: true
    }, {
      Id: 1,
      Name: "kimeunhyea",
      Attendance: true
    }, {
      Id: 2,
      Name: "zhongyi",
      Attendance: true
    }, {
      Id: 3,
      Name: "あかね",
      Attendance: true
    }, {
      Id: 4,
      Name: "アン",
      Attendance: true
    }, {
      Id: 5,
      Name: "もんちゃん",
      Attendance: true
    }
  ]

  ]

  public selectZemiMember(i: number) {
    this.memberData = this.selectZemiMemberArr[i]
  }

  public setMemberData(memberData: Member[]): void {
    this.memberData = memberData;
  }

  public getMemberData(): Member[] {
    return this.memberData;
  }

  public hasMemberData(): boolean {
    if (this.memberData) {
      return true
    } else {
      return false
    }
  }


  public toolState: number;
  public setToolState(state: number): void {
    this.toolState = state;
  }
  public getToolState(): number {
    return this.toolState;
  }
}
