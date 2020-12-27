import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http"; /** we needd import httpclient to injetc it  */

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  /**We inject the http inside the constructor */
  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  readonly baseURL ='http://localhost:61279/api/PaymentDetail';/**this is read only property */
  /**Create a array of list  in order to store the list of our payment details*/
  list: PaymentDetail[]; /**This is an array List with the type is paymentdetail (class) */
  /**we make a past request with create a function */
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  } 
  
  putPaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`,this.formData);
  }
  /**this is using to delete the row (once payment in the data table)  */
  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  /**Create a function to retrieve all of these records payent detail form the table payment details with the help of the get methods , get details  
   * Since, the get function with the baseURL parameter will return Observer then we need to convert to the toPromise, then inside the call back function
   * to paymentdetail array
   */
  refreshList(){
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as PaymentDetail[]);
  }
}
