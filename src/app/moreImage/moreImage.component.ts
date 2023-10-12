import { Component, OnInit } from '@angular/core';
import { MoreImageService } from '../services/moreImage.service';
import { ActivatedRoute } from '@angular/router';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-moreImage',
  templateUrl: './moreImage.component.html',
  styleUrls: ['./moreImage.component.scss']
})
export class MoreImageComponent implements OnInit {
  myResult: any;
  formData: any = {
    image: '',
    // new_ID: '',
    name_img: '',
    dated: new Date(),
    created: 'admin'
  };
  p: number = 1;
  constructor(
    private _moreImageService: MoreImageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formData.NEW_ID = this.route.snapshot.paramMap.get('id');
    this.getData();
  }


  getData() {
    this._moreImageService.getByNewId(this.formData.NEW_ID)
      .then((result: any) => {
        this.myResult = result;
        console.log(this.myResult);
      });
  }
  create() {
    this._moreImageService.create(this.formData)
      .then(response => {
        console.log("Thêm bản ghi thành công", response);
        this.closeForm();
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
