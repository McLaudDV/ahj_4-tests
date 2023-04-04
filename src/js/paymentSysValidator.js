/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
export default function toGetPaymentSystem(number) {
    let paymentSystem;
    if (number[0] === '4') {
      paymentSystem = 'visa';
    }
    if (number[0] === '3' && number[1] === '6' || number[0] === '5' && number[1] === '4') {
      paymentSystem = 'diners';
    }
    if (number[0] === '3' && number[1] === '4' || number[1] === '7') {
      paymentSystem = 'american-express';
    }
    if (number[0] === '5' && number[1] === '1' || number[1] === '2' || number[1] === '3' || number[1] === '4' || number[1] === '5') {
      paymentSystem = 'mastercard';
    }

    if (number[0] === '2' && number[1] === '2' || number[1] === '3' || number[1] === '4' || number[1] === '5' || number[1] === '6'|| number[1] === '7' && number[2] === '2' &&  number[3] === '1' || number[3] === '0' &&  number[4] === '0' || number[4] === '1' || number[4] === '2'|| number[4] === '3' || number[4] === '4' || number[4] === '5'|| number[4] === '6' || number[4] === '7' || number[4] === '8' || number[4] === '9' &&  number[5] === '0' || number[5] === '1' || number[5] === '2'|| number[5] === '3' || number[5] === '4' || number[5] === '5'|| number[5] === '6' || number[5] === '7' || number[5] === '8' || number[5] === '9') {
      paymentSystem = 'mastercard';
    }

    if (number[0] === '2') {
      paymentSystem = 'mir';
    }
    if (number[0] === '6' && number[1] === '0') {
      paymentSystem = 'discover';
    }
    
    if(number.length === 0 || number.length < 16) {
      return alert('Invalid!');
    }

    return paymentSystem;
  }