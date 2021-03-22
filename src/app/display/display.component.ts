import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{PassportService} from '../shared/passport.service';
import { Passport } from '../shared/passport.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public objs:PassportService) { }

  ngOnInit(): void {
    this.objs.passportList();
  }
  fillForm(selectedPP)
  {
     this.objs.formData=Object.assign({},selectedPP);
  }
  delPassport(id)
  {
this.objs.deletePassport(id).subscribe(
  res=>{
    alert("Passport Deleted Permanently!!!");
  },err=>{
    alert("Error Msg: "+err);
  }
)
  }

}
