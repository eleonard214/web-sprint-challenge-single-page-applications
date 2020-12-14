import React from 'react'

function Confirmed({post}){
    console.log("confirmed", post)

    return(
        <div>
            <p className="confirmed" data-cy="confirmed">Order Confirmed. Your pizza will be delivered in 25 minutes.</p>
            <h5>Order Details</h5>
            <div className="details">
                <h4>{post.name}</h4>
                <p>Size:{post.size}</p>
                <h4>Toppings</h4>
                {(post.onion)? <p>Onion</p> : null}
                {(post.xtracheese)? <p>Xtracheese</p> : null}
                {(post.mushroom)? <p>Mushroom</p> : null}
                {(post.pepperoni)? <p>Pepperoni</p> : null}
                {(post.sausage)? <p>Sausage</p> : null}
                {(post.ham)? <p>Ham</p> : null}
                {(post.bellpepper)? <p>Bell Pepper</p> : null}
                {(post.bacon)? <p>Bacon</p> : null}
                {(post.olive)? <p>Olive</p> : null}
                {(post.chicken)? <p>Chicken</p> : null}
                <p>{post.special}</p>
            </div>
        </div>
    )
}


export default Confirmed;