import React, {useState} from 'react'

function UseCoupon() {
   const [redeem, setRedeem] = useState({item:"Free dinner for 4 guests ", instruction:"To use your coupon, click the button below.", redeemed: false});
  
    const handleClick=(prevState)=>{ 
        setRedeem({...prevState, item:"Your coupon has been used.", instruction:"Please visit our restaurant to renew your gift card.", redeemed: true});
    }

    return (
    <div>
<div className="coupon">
<h2>Gift Card </h2>
<h3>Customer: Jennifer Smith</h3>
<p>{redeem.item}</p>
<p>{redeem.instruction} </p>
{!redeem.redeemed && <button onClick={handleClick}>Spend Gift Card </button>}
</div>
    </div>
  )
}

export default UseCoupon;