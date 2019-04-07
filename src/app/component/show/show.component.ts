import { Component, OnInit } from '@angular/core';
import { CommonService} from '../../service/common.service';
import { Member } from '../../type/type';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  public title:string;

  constructor(private service :CommonService) { }

  public memberData:Member[];
  public toolState:number;



  public randomMemberData:Member[]=[];

  public randomTeam:any[]=[];

  private filterMember():void{
    this.memberData = this.memberData.filter(member => {
      return member.Attendance === true;
    })
  }

  private shuffleMember():void{
    let randomNumber:number[]=[]
    for (let i = 0; i < this.memberData.length; i++){
      while(true){
        const random = Math.floor( Math.random() * (this.memberData.length) );
        if(!randomNumber.includes(random)){
          randomNumber.push(random);
          this.randomMemberData.push(this.memberData[random]);
          break;
        }
      }
    }
  }

  private assignMember() {
    if (this.toolState === 1) {
      this.randomTeam.push([],[]);
    }else{
      this.randomTeam.push([],[],[]);
    }

    const memberNumber:number = Math.floor(this.randomMemberData.length / this.randomTeam.length);
    let count:number = 0;
    for (let i = 0; i < this.randomTeam.length; i++) {
      for (let l = 0; l < memberNumber; l++) {
        this.randomTeam[i].push(this.randomMemberData[count]);
        count++;
      }
    }

    let assignedNumber:number=0;
    this.randomTeam.forEach(team=>{
      assignedNumber += team.length;
    });
    if (assignedNumber !== this.memberData.length) {
      const difference:number = this.memberData.length - assignedNumber;
      for (let i = 0; i < difference; i++) {
        this.randomTeam[i].push(this.randomMemberData[this.randomMemberData.length - 1 - i]);
      }
    }
  };

  private makeRandomTeam():void{
    switch (this.toolState) {
      case 1:
        this.randomTeam.push([],[]);
        for (let i = 0; i < this.randomMemberData.length; i++) {
          const check = i % 2;
          if (check === 0) {
            this.randomTeam[0].push(this.randomMemberData[i]);
          }else{
            this.randomTeam[1].push(this.randomMemberData[i]);
          }
        }
        break;

      case 2:
        this.randomTeam.push([],[],[]);
        for (let i = 0; i < this.randomMemberData.length; i++) {
          
        }
        break;
    
      default:
        break;
    }
    
  }

  public PickMemberIndex:number[]=[];
  private pickMember():void{
    this.randomTeam.forEach(team=>{
      const max = team.length;
      const random = Math.floor(Math.random()*max) ;
      this.PickMemberIndex.push(random);
    })
  }

  ngOnInit() {
    this.toolState = this.service.getToolState();
    this.memberData = this.service.getMemberData();
    this.filterMember();

    switch (this.toolState) {
      case 0:
        this.title = "発表順"
        this.shuffleMember();
        break;

      case 1:
      case 2:
        this.title = this.toolState === 1? "2グループ":"ペア";
        this.shuffleMember();
        this.assignMember();
        this.pickMember();
        break;
    
      default:
        break;
    }


    
  }
}
