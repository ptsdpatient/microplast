import { useState,useEffect } from 'react'
import './assets/style/App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [addressTruncate, setAddressTruncate] = useState(window.innerWidth < 1020)
    var dropIcon = document.getElementById('dropdown');
    const handleSetMobile = () => {
        setIsMobile(window.innerWidth <768);
        setAddressTruncate(window.innerWidth < 1020)
    }
    useEffect(() => {
        handleSetMobile()
        window.addEventListener("resize", handleSetMobile)
        return () => {
            window.removeEventListener("resize",handleSetMobile)
        }
    }, [])
    useEffect(() => {
        if (dropIcon) {
            dropIcon.onClick = () => {
                alert("yes");
            }
        }
    }, [])
   


    return (<>
        <Header mobile={isMobile} truncate={addressTruncate} />
        <Footer mobile={isMobile} />
    </>)
}

export default App
