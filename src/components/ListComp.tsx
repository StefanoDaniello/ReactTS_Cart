import { useContextApp } from "../store/context"

function ListComp(){
    const {list,handleIncrese,handleDecrese,addToCart} =useContextApp()

    return(
       <>
       <div className="container">
        <h3>List:</h3>
            <ul>
                {list.map((item)=>(
                    <div  key={item.id}>
                        <li  className="my-2">
                            <h5>{item.name}</h5>
                        </li>
                        <div className="d-flex align-items-center">
                            <div className="ms-4 my-2">
                                <button className="circle" onClick={() => handleDecrese(item.id,false)} disabled={item.quantity === 1}>-</button>
                                <span className="mx-1">{item.quantity}</span>
                                <button className="circle" onClick={() =>handleIncrese(item.id,false)}>+</button>
                            </div>
                        <button className="btn btn-success ms-3" onClick={()=>addToCart(item)}>Add</button>
                        </div>
                    </div>
                ))}
            </ul>
       </div>
       </>
    )
}

export default ListComp