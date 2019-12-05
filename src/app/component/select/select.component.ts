import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../service/common.service';

import { SelectMemberComponent } from './select-member/select-member.component';

import { Member } from '../../type/type';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @ViewChild(SelectMemberComponent)
  public selectMemberComponent: SelectMemberComponent;

  constructor(private service: CommonService) { }
  public title = 'クリコマtool';

  ngOnInit() {

  }

  public toolSelect(state: number): void {
    this.service.setToolState(state);
    this.selectMemberComponent.mergeMemberData();
  }

}
