import { Component, OnInit } from '@angular/core';
import { NewArticleService } from '../services/newArticle.service';

interface category {
  id: number,
  name: string

}
@Component({
  selector: 'app-newArticle',
  templateUrl: './newArticle.component.html',
  styleUrls: ['./newArticle.component.scss']
})
export class NewArticleComponent implements OnInit {
  myResult: any;
  formData: any = {};


  // catNew!: category[];
  // categories_ID!: category[];
  constructor(private _newArticleService: NewArticleService) { }

  ngOnInit() {
    this.getData();

  }

  getData() {
    this._newArticleService.getData()
      .then((result: any) => {
        this.myResult = result;
        console.log(this.myResult);
      });
  }
  create() {
    this._newArticleService.create(this.formData)
      .then(response => {
        console.log("Thêm bản ghi thành công", response);
        this.closeForm();
        this.getData();
      }, error => {
        console.log('Lỗi', error);
      })
  }

  getDetail(id: number) {
    this._newArticleService.getDatabyID(id)
      .then((editData: any) => {
        this.formData = editData;
      }, error => {
        console.error('Lỗi', error);
      })
  }

  listImage(id:number){
    this._newArticleService.ListImage(id)
    .then((editData: any) => {
      this.formData = editData as any[];
    }, error => {
      console.error('Lỗi', error);
    })
  }

  edit(id: number) {
    this._newArticleService.edit(id, this.formData)
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
    this._newArticleService.delete(id).then(
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
