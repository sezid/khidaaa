import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =createContext(null);

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems]=useState({});
    const [darkMode,setDarkMode]=useState(false);
    // const [dotShow, setDotShow]=useState('no-dot');


    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        // setDotShow('dot')
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
        
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]*0}));
        // setDotShow('no-dot')
      };
    
    const dMode=()=>{

        if (darkMode){
            setDarkMode(false);
            console.log(darkMode)
        }
        else {
            setDarkMode(true);
            console.log(darkMode);
            
        }
        
    }  

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){

            if (cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
        
            
        }
        return totalAmount;
    }



    

    const contextValue={
        food_list,
        cartItems,
        // dotShow,
        darkMode,
        setCartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        dMode,
        getTotalCartAmount
        
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;