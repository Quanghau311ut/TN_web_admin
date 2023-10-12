import { Component, OnInit } from '@angular/core';
import { MenusService } from '../services/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myResult: any;
  formData: any = {
    name: '',
    description: '',
    creator: 'admin',
    dated: new Date()
  };
  p: number = 1;
  constructor(private _menuService: MenusService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._menuService.getData()
      .then((result: any) => {
        this.myResult = result;
        console.log(this.myResult);
      })
  }
  Create() {
    this._menuService.creatData(this.formData).then(
      response => {
        console.log('Thêm bản ghi thành công:', response);
        this.closeForm();
        this.getData();
      },
      error => {
        console.error('Lỗi thêm bản ghi:', error);
      }
    );
  }
  getdatabyID(id: number) {
    this._menuService.getdatabyID(id)
      .then((editData: any) => {
        this.formData = editData;
      }, error => {
        console.error('lỗi', error);
      })
  }
  Update(id: number) {
    this._menuService.updataData(id, this.formData)
      .then(response => {
        console.log('Cập nhật thành công', response);
        this.closeFormEdit();
        this.getData();
      }, error => {
        console.error('Lỗi', error);
      })
  }

  confirmUpdate() {
    const confirmResult = confirm("Bạn có chắc chắn muốn cập nhật thông tin bản ghi không?");
    if (confirmResult) {
      this.Update(this.formData.id);
    }
  }

  delete(id: number) {
    this._menuService.deleteData(id)
      .then(response => {
        console.log('Xóa thành công bản ghi có id=' + `${id}`, response);
        this.getData();
      }, error => {
        console.error('Lỗi', error);
      })
  }

  confirmDelete(id: number) {
    const confirmResult = confirm("Bạn có chắc chắn muốn xóa bản ghi id =" + `${id}`);
    if (confirmResult) {
      this.delete(id);
    }
  }


  closeForm() {
    const closeElement = document.getElementById('close-form');
    if (closeElement) {
      closeElement.click();
      this.formData={};
    }
  }
  closeFormEdit() {
    const closeElement = document.getElementById('close-form-edit');
    if (closeElement) {
      closeElement.click();
      this.formData={};

    }
  }

}
