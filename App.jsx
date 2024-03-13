import Navbar from './src/Components/Navbar/Navbar';
import Banner from './src/Components/Banner/Banner';
import './src/CSS/locomotive.css'
import { useEffect, useRef, useState } from 'react';

const App = () => {

    const [preLoader, setPreLoader] = useState(true)
    const [timer, setTimer] = useState(3)

    const id = useRef(null)
    const clear = () => {
        window.clearInterval(id.current)
        setPreLoader(false)
    }
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clear();
                    return prevTimer; // Return current value if already zero
                }
                return prevTimer - 1; // Decrement timer otherwise
            });
        }, 1000);

        return () => {
            window.clearInterval(id.current);
        };
    }, []);

    console.log(timer);

    return (
        <>
            {
                preLoader ? <div>
                    <h1 >Loading</h1>
                </div>
                    :
                    <div>
                        <Navbar></Navbar>
                        <Banner></Banner>
                    </div>
            }
        </>
    );
};

export default App;