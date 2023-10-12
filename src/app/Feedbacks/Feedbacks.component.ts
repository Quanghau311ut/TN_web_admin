import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/Feedback.service';

@Component({
  selector: 'app-Feedbacks',
  templateUrl: './Feedbacks.component.html',
  styleUrls: ['./Feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

  myResult: any;
  formData: any = {};
  p: number = 1;
  constructor(private _feedbackService: FeedbackService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._feedbackService.getData().then((result: any) => {
      this.myResult = result;
      console.log(this.myResult);
    });
  }

  delete(items: number) {
    this._feedbackService.deleteData(items).then(response => {
      console.log('Xóa thành công:', response);
      this.getData();
    }, error => {
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


}
