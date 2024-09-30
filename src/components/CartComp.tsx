import { useContextApp } from "../store/context"
function CartComp(){  
    const {cart,handleIncrese,handleDecrese,removeToCart} =useContextApp()
  
    return(
       <>
        <div className="container">
            <ul>
                {cart.map((item)=>(
                    <div key={item.id}>
                        <li  className="my-2">
                            <h5>{item.name}</h5>
                        </li>
                        <div className="d-flex align-items-center">
                            <div className="ms-4 my-2">
                                <button className="circle" onClick={() => handleDecrese(item.id, true)} disabled={item.quantity === 1}>-</button>
                                <span className="mx-1">{item.quantity}</span>
                                <button className="circle" onClick={() =>handleIncrese(item.id,true)}>+</button>
                            </div>
                        <button className="btn btn-danger ms-3" onClick={()=>removeToCart(item.id)}>Remove</button> 
                        </div>
                    </div>
                ))}
            </ul>
       </div>
       </>
    )
}

export default CartComp