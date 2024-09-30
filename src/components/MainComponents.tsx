import CartComp from "./CartComp"
import ListComp from "./ListComp"
function MainComponents (){
    return(
        <main className="container d-flex justify-content-between mt-5">
           <ListComp></ListComp>
           <CartComp></CartComp>
        </main>
    )
}
export default MainComponents