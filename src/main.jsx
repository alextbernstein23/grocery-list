import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { useState } from 'react';


const Header = (props) => {
    return (    
        <header>
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    )
}
const Counter = (props) => {
    const [quantity, setQuantity] = useState(0) // 'quantity' is a function that holds the current state (0), setQuantity is the function we will use to update the state.

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
        if (props.name == "Apples"){
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    }
    const decrementQuantity = () => {
        if (quantity > 0){
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    return (
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            <button className='increment' onClick={incrementQuantity}>+</button>
            <button className='decrement' onClick={decrementQuantity}>-</button>
            <span className='quantity-amount'>{quantity}</span>
        </div>
    )
}
const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)} />
            <span className='item-name'>{props.itemName}</span>
            <Counter name={props.name}/>
        </div>
    )
}


const App = () => {
    const [items, setItems] = useState([
        {
            name: "Apples",
            id: 0
        },
        {
            name: "Bananas",
            id: 1
        },
        {
            name: "Box of Pasta",
            id: 2
        },
        {
            name: "Cookies",
            id: 3
        }
    ])
    const handleRemoveItem = (id) => {
        setItems(prevItems => prevItems.filter(i => i.id !== id))
    }

    return (
        <div className='grocery-list'>
            <Header 
                title='Grocery List' 
                itemTotal={items.length} 
            />

            {/* Grocery List*/}
            {items.map(item => (
                <Item 
                    itemName={item.name} 
                    id={item.id}
                    key={item.id}
                    removeItem={handleRemoveItem}
                />
            ))}
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);