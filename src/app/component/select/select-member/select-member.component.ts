import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Member } from '../../../type/type';
@Component({
  selector: 'app-select-member',
  templateUrl: './select-member.component.html',
  styleUrls: ['./select-member.component.scss']
})
export class SelectMemberComponent implements OnInit {

  constructor(private service: CommonService) { }

  public memberData: Member[];

  ngOnInit() {
    const hasMemberData: boolean = this.service.hasMemberData();
    this.memberData = this.service.getMemberData();
  }

  public chengeState(i: number): void {
    let state = this.memberData[i].Attendance;
    if (state === true) {
      this.memberData[i].Attendance = false;
    } else {
      this.memberData[i].Attendance = true;
    }
  }

  public mergeMemberData(): void {
    this.service.setMemberData(this.memberData);
  }
}
