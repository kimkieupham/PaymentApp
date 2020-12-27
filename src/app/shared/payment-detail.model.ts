export class PaymentDetail {
    /**we will have something similar to the payment detail in the visual studio 2019, project  */
    paymentDetailId:number = 0;
    cardOwnerName:string = '';
    cardNumber:string = '';
    expirationDate:string = '';
    securityCode:string = '';
    /**Since, in the payment-detail srvice would return the object containing all the property with the default value 
     * in the c#, so we need to intialize the value when we create the object. 
     * Or we can create the contructor and then initialize all the property one by one 
     * here is how we can do it as the second method: 
     *      contructor() {
     *          this.paymentDetailId= 0;
     *          this.cardOwnerName = '';
     *          this.cardNumber = '';
     *          this.expirationDate = '';
     *          this.securityCode = '';
     *      }
      */

}
