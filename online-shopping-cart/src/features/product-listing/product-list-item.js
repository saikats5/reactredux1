import React from 'react';

export default function ProductListItem(props){
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div>
                <h3>{ props.name }</h3>
                <div>{ props.description }</div>
                <div>${ props.price }</div>
                <div>
                    <button onClick={()=>props.addToCart(props.product)}>Add to cart ({(thisItemInCart && thisItemInCart.quantity) || 0})</button>
                </div>
            </div>
}