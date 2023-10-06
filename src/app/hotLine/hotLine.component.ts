import { Component, OnInit } from '@angular/core';
import { HotlinesService } from '../services/hotlines.service';

@Component({
  selector: 'app-hotLine',
  templateUrl: './hotLine.component.html',
  styleUrls: ['./hotLine.component.scss']
})
export class HotLineComponent implements OnInit {
  myResult:any;
  formData:any={};

  constructor(private _hotlineService:HotlinesService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._hotlineService.getData().then((result: any) => {
      this.myResult = result;
      console.log(this.myResult);
    });
  }

  delete(items: number) {
    this._hotlineService.deleteData(items).then(response => {
      console.log('Xóa thành công:', response);
      this.getData();
    }, error => {
      console.error('Lỗi:', error);
    }
    );
  }
  confirmDelete(items: number) {
    const confirmResult = confirm("Bạn có chắc muốn xóa?");
    if (confirmResult) {
      this.delete(items);
    }
  }
}
