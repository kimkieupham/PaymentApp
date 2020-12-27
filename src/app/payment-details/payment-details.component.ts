import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
/**Inkect the service class */
  constructor(public service: PaymentDetailService,
    private toastr : ToastrService) { }
   /**render the service inside the ngONit so whenever it inject then the  function got call */
  ngOnInit(): void {
    this.service.refreshList();
  }
  /**this function will get the parameter of the paymentdetail class, then inside the onsumbit event we need to update the data */
  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  /**this function use to delete the data inside the table that we want to delete */
  onDelete(id:number) {
    if(confirm('Are you sure to delete this record ')){
    this.service.deletePaymentDetail(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted successfully",'Payment Detail Register');
      },
      err => {console.log(err)}
    )
  }
}
}
