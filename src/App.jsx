import { useState,useEffect } from 'react'
import './assets/style/App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
   
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [addressTruncate, setAddressTruncate] = useState(window.innerWidth < 1020)
    
    const handleSetMobile = () => {
        setIsMobile(window.innerWidth <768);
        document.body.style.backgroundColor=window.innerWidth < 768? '#dedede': 'snow'
        setAddressTruncate(window.innerWidth < 1020)
        document.body.style.overflowY= window.innerWidth >768?'auto':''

    }
    useEffect(() => {
        handleSetMobile()
        window.addEventListener("resize", handleSetMobile)
        return () => {
            window.removeEventListener("resize",handleSetMobile)
        }
    }, [])
   
   


    return (<>
        <Header mobile={isMobile} truncate={addressTruncate} />
        <Footer mobile={isMobile} />
    </>)
}

export default App
