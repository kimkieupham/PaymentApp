import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {
  /**We need to inject the payment-detai;s.service into the this class
   * because we are trying to design a form insidde this component html
   * => So whenever the instance of the PaymentDetailFormComponent is created then the 
   * instance of the PaymentDetailService will also be created and passed and shared into this constructor 
   * and it will be shared among all the other component
    */
  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  /**the submit event will bind all the data , we need to make a post request into the http
   * when the request is successfull then we will subscribe it 
   * when we access the api, there will be a security features call Course resouce sharing
   * 
   * if the paymentdetailid is equaling to 0, then we will insert the inform into the table, otherwise we will just need to update it 
  */
  onSubmit(form:NgForm) {
    if(this.service.formData.paymentDetailId == 0) 
      this.insertRecord(form);
    else 
      this.updateRecord(form);
  }
  /** This function will insert the data into the paayament detail table
   *  */
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Payment detail Register') /**using to display the message 
        Toastr will use to display the message on the rright ctop conner whenever, an event may happen */
      },
      err => {console.log(err); } /**use to handle the error  */
    );
  }
 /**This function will do the update the information that the user wnat to make the change to the existing 
  * data inside the table . which will need to call the http inside the visual studio 2019   */
 updateRecord(form:NgForm){
  this.service.putPaymentDetail().subscribe(
    res => {
      this.resetForm(form);
      this.service.refreshList();/**Which will refresh the table once the inform have change */
      this.toastr.info('Updated successfully','Payment detail Register') /**using to display the message 
      Toastr will use to display the message on the rright ctop conner whenever, an event may happen */
    },
    err => {console.log(err); } /**use to handle the error  */
  );
 }
  /**This function is using to reset the value
   * in order to reset a angular form, we can make use of this ng form instance or the reference  of the form and we 
   * also should update the form data with the instance 
   */

  resetForm(form:NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
