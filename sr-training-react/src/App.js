import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);

    const fetchItem = () => {
        const instance = axios.create()
        instance.get('http://localhost:4545/items').then((res) => {
            setItems(res.data.data.items)
        })
    }

    return (
        <div className="App" onClick={fetchItem}>
            <button onClick={fetchItem}>FETCH ITEMS</button>
            {items.map((item) => {
                return <div key={item.id} className="item">
                    <span>ITEM:</span>{item.desc}
                </div>
            })}
        </div>
    );
}

export default App;
