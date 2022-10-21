import React, {useState} from 'react'
import f1 from './../src/desk.png'
import f2 from './../src/coffeShop.png'
import f3 from './../src/coffee-shop-1209863_1920 (1).png'
import f4 from './../src/coffee-2179009_1920.png'

function App() {
    const [count, setCount] = useState('one');
    const data = [
        {
            img1: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            img2: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'
        }
    ]

    return (
        <div className="App">
            <div>
                <img width='300px' height='300px' src={count === 'one' ? data[0].img1 : data[0].img2} alt=""/>
            </div>
            <button onClick={()=> setCount(count === 'one' ? 'two' : 'one')}>меняй</button>


            <div>
                <img src={f1} alt=""/>
                <img src={f2} alt=""/>
                <img src={f3} alt=""/>
                <img src={f4} alt=""/>
            </div>
        </div>
    );
}

export default App;
