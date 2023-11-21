import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { useState } from 'react';

const items = [
    {
        name: "Apples",
        quantity: 5,
        id: 0
    },
    {
        name: "Bananas",
        quantity: 7,
        id: 1
    },
    {
        name: "Box of Pasta",
        quantity: 1,
        id: 2
    },
    {
        name: "Cookies",
        quantity: 12,
        id: 3
    }
]

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

    return (
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            <button className='increment'>+</button>
            <button className='decrement'>-</button>
            <span className='quantity-amount'>{quantity}</span>
        </div>
    )
}
const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' />
            <span className='item-name'>{props.itemName}</span>
            <Counter />
        </div>
    )
}
const App = (props) => {
    return (
        <div className='grocery-list'>
            <Header 
                title='Grocery List' 
                itemTotal={1} 
            />

            {/* Grocery List*/}
            {props.initialList.map(item => (
                <Item 
                    itemName={item.name} 
                    key={item.id}
                />
            ))}
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App initialList={items} />
    </StrictMode>
);