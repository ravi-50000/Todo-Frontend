import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import {DComponent} from './d/d.component'
import { ServiceService } from './backend/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  s="";
  data:any[]=[];
  constructor(public dialog:MatDialog,public service:ServiceService)
  {
   this.refresh();
  }

  openDialog()
  {
    const dialogref=this.dialog.open(DComponent,{
      width:'400px',
      height:'300px'
    }
      ).afterClosed().subscribe((value:any)=>{
        if(value){
          this.service.adddata(value).then(res=>{
            console.log(res);
            this.refresh();
          })
        }
      })
  }
  refresh(){
    this.service.getAllData().then((res:any)=>{
      this.data=res;
    })
  }
  delete(id:string){
    this.service.removeData(id).then((res:any)=>{
      console.log("deleted");
      this.data=this.data.filter((value,index)=>{
        if (value._id==id)
        return false;
        return true;
      })
    })
  }
}