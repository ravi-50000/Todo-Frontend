import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-d',
  templateUrl: '/d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor(public thisdialog:MatDialogRef<DComponent>) {

   }

  ngOnInit(): void {
  }
  s="";
  getValue(){
    let input1:any=document.getElementById("i1");
    let input2:any=document.getElementById("i2");
    console.warn(input1.value+" "+input2.value);
    this.thisdialog.close({
      title:input1.value,
      des:input2.value
    });
  }
  close(){
    this.thisdialog.close(false);
  }
}
