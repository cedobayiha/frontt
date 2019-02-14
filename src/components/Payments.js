import React from "react";
// import Wrapper2 from "../Wrapper2.js";

if(window.PaymentRequest){

  const Payments = () => {

  let supportedPaymentMethods = [{
    supportedMethods: ['basic-card']
  }];
  let paymentDetails = {
    total: {
      label: "Total Cost",
      amount: {
        currency: "$",
        price: this.props.price
      }
    }
  }
  const options ={}

  const PaymentRequest = new PaymentRequest(
    supportedPaymentMethods, paymentDetails, options
  );
  PaymentRequest.show()
   .then(payment => console.log(payment))
   .catch(error => console.log(error))
}


  return(
    <div></div>
  )
} else {
  
}
export default Payments