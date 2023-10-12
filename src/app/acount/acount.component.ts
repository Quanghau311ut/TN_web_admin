import { Component, OnInit } from '@angular/core';
import { AcountsService } from '../services/acounts.service';


@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {
  myResult:any;
  formData:any={};
  p: number = 1;
  constructor(private _acountService:AcountsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._acountService.getData().then((result:any) => {
      this.myResult = result;
      console.log(this.myResult);
    });
  }

  create(){
    this._acountService.Create(this.formData)
        .then(response=>{
          console.log('Thêm bản ghi thành công',response);
          this.closeForm();
          this.getData();
        },error=>{
          console.error('Lỗi thêm bản ghi',error);
        })
  }

  getDetail(items:number){
    this._acountService.getDatabyID(items).then(
      (editData:any)=>{
        this.formData=editData;
      },error =>{
        console.error('Lỗi',error);
      }
    );
  }

  edit(items:number){
    this._acountService.edit(items,this.formData)
    .then(response =>{
      console.log('Sửa thành công',response);
      this.closeFormEdit();
      this.getData();
    },error=>{
      console.error('Lỗi',error);
    })
  }
  confirmEidt(){
    const confirmResult=confirm("Bạn có chắc chắn muốn thay đổi thông tin");
    if(confirmResult){
      this.edit(this.formData.id);
    }
  }

  delete(items:number){
    this._acountService.delete(items).then(
      response=>{
        console.log('Xóa thành công',response);
        this.getData();
      },
      error=>{
        console.error('Lỗi',error);
      }
    )
  }
  confirmDelete(items:number){
    const confirmResult=confirm("Bạn có chắc chắn muốn xóa id " + `${items}`);
    if(confirmResult){
      this.delete(items);
    }
  }

  closeForm() {
    const closeElement = document.getElementById('close-form');
    if (closeElement) {
      closeElement.click();
      this.formData = {};
    }
  }
  closeFormEdit() {
    const closeElement = document.getElementById('close-form-edit');
    if (closeElement) {
      closeElement.click();
      this.formData = {};
    }
  }
}
