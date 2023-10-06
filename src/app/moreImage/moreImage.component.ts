import { Component, OnInit } from '@angular/core';
import { MoreImageService } from '../services/moreImage.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-moreImage',
  templateUrl: './moreImage.component.html',
  styleUrls: ['./moreImage.component.scss']
})
export class MoreImageComponent implements OnInit {
  myResult: any;
  formData: any = {};

  constructor(
    private _moreImageService: MoreImageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    const newId = this.route.snapshot.paramMap.get('id');
    this._moreImageService.getByNewId(newId)
      .then((result: any) => {
        this.myResult = result;
        console.log(this.myResult);
      });
  }
  create() {
    this._moreImageService.create(this.formData)
      .then(response => {
        console.log("Thêm bản ghi thành công", response);
        this. closeForm();
        this.getData();
      },
        error => {
          console.error('Lỗi', error);
        })
  }

  getDetail(id: number) {
    this._moreImageService.getDatabyID(id)
      .then((editData: any) => {
        this.formData = editData;
      }, error => {
        console.error('Lỗi', error);
      })
  }
  edit(id: number) {
    this._moreImageService.edit(id, this.formData)
      .then(response => {
        console.log('Sửa thành công', response);
        this.closeFormEdit();
        this.getData();
      }, error => {
        console.error('Lỗi', error);
      })
  }
  confirmEdit() {
    const confirmResult = confirm("Bạn có chắc chắn muốn thay đổi thông tin");
    if (confirmResult) {
      this.edit(this.formData.id);
    }
  }

  delete(id: number) {
    this._moreImageService.delete(id).then(
      response => {
        console.log("Xóa thành công");
        this.getData();
      }
    )
  }
  confirmDelete(id: number) {
    const confirmResult = confirm("Bạn có chắc chắn muốn xóa bản ghi có id " + `${id}`);
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

}
