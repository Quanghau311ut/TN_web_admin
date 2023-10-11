import { Component, OnInit } from '@angular/core';
import { IntroduceService } from '../services/introduce.service';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  myResult:any;
  formData:any={
    image: '',
    name: '',
    description: '',
    content: '',
    creator:'admin',
    dated:new Date()
  };

  constructor(private _introduceService:IntroduceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this._introduceService.getData()
    .then((result:any)=>{
      this.myResult = result;
      console.log(this.myResult);
    })
  }

  Create(){
    this._introduceService.createData(this.formData)
    .then(response=>{
      console.log('Thêm bản ghi thành công',response);
      this.closeForm();
      this.getData();
    },error=>{
      console.log('Lỗi',error);
    })

  }
  getDatabyID(id:number){
    this._introduceService.getdatabyID(id)
    .then((editData:any)=>{
      this.formData=editData;
    },error=>{
      console.error('Lỗi',error);
    })
  }

  update(id:number){
    this._introduceService.updataData(id,this.formData)
    .then(response=>{
      console.log('Cập nhật thành công bản ghi có id ='+`${id}`, response);
      this.closeFormEdit();
      this.getData();
    },error=>{
      console.error('Lỗi',error);
    })
  }

  confirmUpdate(){
    const confirmResult= confirm("Bạn có chắc chắn muốn thay đổi thông tin");
    if(confirmResult){
      this.update(this.formData.id);
    }
  }

  delete(id:number){
    this._introduceService.deleteData(id)
    .then(response=>{
      console.log('Xóa thành công bản ghi có id ='+`${id}`,response);
      this.getData();
    },error=>{
      console.error('Lỗi',error);
    })
  }

  confirmDelete(id:number){
    const confirmResult = confirm("Bạn có chắc chắn muốn xóa bản ghi có id ="+ `${id}`);
    if(confirmResult){
      this.delete(id);
    }
  }

  closeForm() {
    const closeElement = document.getElementById('close-form');
    if (closeElement) {
      closeElement.click();
    }
  }
  closeFormEdit() {
    const closeElement = document.getElementById('close-form-edit');
    if (closeElement) {
      closeElement.click();
    }
  }

  onUpload(event: UploadEvent) {
    const file = event.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.formData.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImage() {
    this.formData.image = null;
  }
}
