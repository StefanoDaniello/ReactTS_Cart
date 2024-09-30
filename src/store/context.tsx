import {createContext,ReactNode,useContext,useState} from "react";
import listArray from "./Array/listArray";
import { List } from "../type/List";
interface ContextType {
  list:List[];
  handleIncrese: (id: number, isCart: boolean) => void;
  handleDecrese: (id: number, isCart: boolean) => void;
  addToCart:(item:List)=>void;
  cart:List[];
  removeToCart: (id: number)=>void;
}

const Context =createContext<ContextType | undefined> (undefined);


const ContextProvider = ({ children }: { children: ReactNode }) => {

const [list,setList]=useState<List[]>(listArray)
const [cart,setCart]=useState<List[]>([])

const handleIncrese =(id:number, isCart: boolean)=>{

  if(isCart){
    const itemIndex = cart.findIndex(item => item.id === id)
    if( itemIndex !== -1){
      const  updatedList = [...cart]
      updatedList[itemIndex] = {
        ...updatedList[itemIndex],
        quantity: updatedList[itemIndex].quantity + 1
      };
      setCart(updatedList)
    }
  }else{
    const itemIndex = list.findIndex(item => item.id === id)
    if(itemIndex !== -1){
      const  updatedList = [...list]
      updatedList[itemIndex] = {
        ...updatedList[itemIndex],
        quantity: updatedList[itemIndex].quantity + 1
      };
      setList(updatedList)
    }
  }
}

const handleDecrese =(id:number, isCart: boolean)=>{
 
  if(isCart){
    const itemIndex = cart.findIndex(item => item.id === id)
    if(itemIndex !== -1 && cart[itemIndex].quantity > 1){
      const  updatedList = [...cart]
      updatedList[itemIndex] = {
        ...updatedList[itemIndex],
        quantity: updatedList[itemIndex].quantity - 1
      };
      setCart(updatedList)
    }
  }else{
    const itemIndex = list.findIndex(item => item.id === id)
    if(itemIndex !== -1 && cart[itemIndex].quantity > 1){
      const  updatedList = [...list]
      updatedList[itemIndex] = {
        ...updatedList[itemIndex],
        quantity: updatedList[itemIndex].quantity - 1
      };
      setList(updatedList)
    }
  }
}

const addToCart = (item: List) => {
  const itemInCart = cart.find(cartItem => cartItem.id === item.id);
  
  if (itemInCart) {
    // Se l'elemento esiste già nel carrello, somma la quantità
    const updatedCart = cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
    setCart(updatedCart);
  } else {
    // Se l'elemento non esiste nel carrello, aggiungilo
    setCart([...cart, { ...item, quantity: item.quantity }]);
  }
};

const removeToCart = (id: number) => {
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
};

const value ={list,handleIncrese,handleDecrese,addToCart,cart,removeToCart}
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

const useContextApp = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
};
  

export { ContextProvider, useContextApp };