import React from "react";
import CurrencyFormat from "react-currency-format";
import {useNavigate} from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {value}
            </p>
            
          </>
        )}
        decimalScale={2}
        value={""}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={event => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;