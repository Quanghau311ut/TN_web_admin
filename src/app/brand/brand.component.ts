import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  myResult: any;
  formData: any = {
    id:'0',
    image: '',
    name: '',
    content: '',
    dated: new Date(),
  };
  p: number = 1;
  constructor(private _brandService: BrandsService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this._brandService.getData()
      .then((result: any) => {
        this.myResult = result;
        console.log(this.myResult);
      })
  }

  Create() {
    this._brandService.createData(this.formData)
      .then(response => {
        console.log('Thêm bản ghi thành công', response);
        this.closeForm();
        this.getData();
      }, error => {
        console.log('Lỗi', error);
      })
  }
  getDatabyID(id: number) {
    this._brandService.getdatabyID(id)
      .then((editData: any) => {
        this.formData = editData;
      }, error => {
        console.error('Lỗi', error);
      })
  }

  update(id: number) {
    this._brandService.updateData(id, this.formData)
      .then(response => {
        console.log('Cập nhật thành công bản ghi có id =' + `${id}`, response);
        this.closeFormEdit();
        this.getData();
      }, error => {
        console.error('Lỗi', error);
      })
  }

  confirmUpdate() {
    const confirmResult = confirm("Bạn có chắc chắn muốn thay đổi thông tin");
    if (confirmResult) {
      this.update(this.formData.id);
    }
  }

  delete(id: number) {
    this._brandService.deleteData(id)
      .then(response => {
        console.log('Xóa thành công bản ghi có id =' + `${id}`, response);
        this.getData();
      }, error => {
        console.error('Lỗi', error);
      })
  }

  confirmDelete(id: number) {
    const confirmResult = confirm("Bạn có chắc chắn muốn xóa bản ghi có id =" + `${id}`);
    if (confirmResult) {
      this.delete(id);
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
