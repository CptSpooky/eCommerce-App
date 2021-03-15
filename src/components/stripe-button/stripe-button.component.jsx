import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IVMQMBCeT8oE9y8clAzzLczpreh3Z2NoZJqk6Mx71agpSgfanrNbSzmYy3aWhbqW1cM0H6FluHSEj6lzUBewkhX00EzsxlxQF';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is 4 $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;