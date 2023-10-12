import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.scss']
})
export class DanhmucComponent implements OnInit {
  myResult: any;
  formData: any = {
    id: '0',
    name: '',
    description: '',
    dated: new Date(),
    created: 'admin',
    newActicles: [],
  };
  p: number = 1;

  constructor(
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getData();
  }



  //Getdata
  getData() {
    this._categoriesService.getData().then((result: any) => {
      this.myResult = result;
      console.log(this.myResult);
    });
  }



  //Thêm
  Create() {
    this._categoriesService.createdata(this.formData).then(
      response => {
        console.log('Thêm bản ghi thành công:', response);
        this.closeForm();
        this.getData();
        this.formData={};

      },
      error => {
        console.error('Lỗi thêm bản ghi:', error);
      }
    );
  }

  getDetails(items: number) {
    this._categoriesService.getdatabyID(items).then(
      (editData: any) => {
        this.formData = editData;

      },
      error => {
        console.error('lỗi:', error);
      }
    );
  }


  // update
  update(items: number) {
    this._categoriesService.updateData(items, this.formData).then(
      response => {
        console.log('Cập nhật thành công:', response);
        this.closeFormEdit();
        this.getData();
        this.formData={};

      },
      error => {
        console.error('Lỗi cập nhật:', error);
      }
    );
  }
  // //Thông báo
  confirmUpdate() {
    const confirmResult = confirm("Bạn có chắc muốn cập nhật thông tin danh mục?");
    if (confirmResult) {
      this.update(this.formData.id);
    }
  }


  //Xóa
  delete(items: number) {
    this._categoriesService.deleteData(items).then(
      response => {
        console.log('Xóa thành công:', response);
        this.getData();
      },
      error => {
        console.error('Lỗi:', error);
      }
    );
  }
  // //Thông báo
  confirmDelete(items: number) {
    const confirmResult = confirm("Bạn có chắc muốn xóa?");
    if (confirmResult) {
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
