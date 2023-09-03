import './assets/style/App.css'
import {useState,useEffect } from 'react'
import logo from './assets/icon/microplast-logo.webp'
import callIcon from './assets/icon/call.webp'
import emailIcon from './assets/icon/email.webp'
import officeIcon from './assets/icon/office.webp'
import dropdownIcon from './assets/icon/menu.webp'
import dropdownActiveIcon from './assets/icon/menu-a.webp'
import CompanyProfile from './CompanyProfile'
import PlantMachinery from './PlantMachinery'
import TechnicalSpecification from './TechnicalSpecification'
import Quality from './Quality'
import Advantages from './Advantages'
import Contact from './Contact'
const Header = (props) => {
    const [page, setPage] = useState(0)
    const [pageLink] = useState(["Company", "Machinery", "Specifications", "Quality", "Benefits", "Contact"])
    const [dropdownActive, setdropdownActive] = useState(false);

    const handleDropDown = () => {
        setdropdownActive(dropdownActive?false:true)      
    }
    
    useEffect(()=>{
        document.body.style.overflowY=dropdownActive?'hidden':'auto'
        
    },[dropdownActive])

    const selectPage = () => {
        switch (page) {
            case 0: return <CompanyProfile mobile={props.mobile} />;
            case 1: return <PlantMachinery mobile={props.mobile} />;
            case 2: return <TechnicalSpecification mobile={props.mobile} />;
            case 3: return <Quality mobile={props.mobile} />;
            case 4: return <Advantages mobile={props.mobile} />;
            case 5: return <Contact mobile={props.mobile} />;
            default: return null;
        }
    }

    if (!props.mobile) {
        return (
            <>
                <div className="header" style={{ width: '100%',height:'7rem', backgroundColor: '#dedede', boxShadow: '2px 3px 6px 2px #808080',overflowX:'auto' }}>
                    <div style={{ width: '96%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 'auto' }}>
                        <div><img alt="logo" src={logo} className="logo"></img></div>
                        <div className="officeAddress" style={{ width: props.mobile ? '15rem' : '20rem', display: 'flex', alignItems: 'center' }}><img src={officeIcon} style={{ width: '1.6rem', height: '1.6rem', margin: '1rem', userSelect: 'none' }}></img><p className={props.truncate ? "addressTruncate" : ""} style={{fontFamily:'sans-serif'}}>Plot No.2, Ashok Colony, Near Telecom Nagar, Khamla, Nagpur, Maharashtra 440 025 (India)</p> </div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><img alt="callIcon" src={callIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }}></img> <div><p className={props.truncate ? "addressTruncate" : ""} style={{fontFamily:'sans-serif'}}>+91 9890916981 <br></br>+91 902169878</p></div></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}><img alt="emailIcon" src={emailIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }} ></img> <div><p style={{fontFamily:'sans-serif'}}>microplastpolytex@yahoo.com<br></br> amolshamkule@hotmail.com</p></div></div>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: props.mobile ? 'column' : 'row', width: '80%', justifyContent: 'space-evenly', margin: 'auto', alignItems: 'flex-start', gap: '2rem' }}>{pageLink.map((buttonName, key) => (<p className="underline-paragraph" key={key} onClick={() => { setPage(key) }}>{buttonName}</p>))} </div>
                {selectPage()}
            </>
        )
    } else {
        return (<>
            
            <div className="header" style={{width: '100%', height: '6rem', backgroundColor: '#dedede'}}>
                <div style={{ display: 'flex', width: '100%', height: '100%',justifyContent:'space-between' }}>
                    <img id="dropdown" src={dropdownActive ?dropdownActiveIcon: dropdownIcon} onClick={() => { handleDropDown()} } style={{ width: 'height', height: '40%', margin: 'auto', marginLeft: '1.5rem', marginRight: '0rem', cursor: 'pointer' }}></img>
                    <img src={logo} style={{ width: 'height', height: '70%', margin: 'auto', marginLeft: '1rem', marginRight: '2.5rem', cursor: 'pointer' }}></img>
                         
                </div>
            </div>
            <div style={{ position:'absolute',zIndex:'10000',backgroundColor:'#dedede', display: dropdownActive ? 'flex' : 'none', flexDirection: 'row', width: '100%', height: '20rem', justifyContent: 'start', margin: 'auto', alignItems: 'flex-start', gap: '2rem' }}>
                
                <div  style={{ height: '90%', margin: 'auto', marginTop: '0rem', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column' }}>{pageLink.map((buttonName, key) => (<p className="underline-paragraph" style={{ margin: 'auto' }} key={key} onClick={() => { setPage(key); handleDropDown() }}>{buttonName}</p>))}</div>
                <div style={{height:'100%',margin:'auto',overflowX:'auto',paddingRight:'3rem'} }>
                <div className="officeAddress" style={{ width:'15rem', display: 'flex', alignItems: 'center' }}><img src={officeIcon} style={{ width: '1.6rem', height: '1.6rem', margin: '1rem', userSelect: 'none' }}></img><p style={{fontFamily:'sans-serif'}}>Plot No.2, Ashok Colony, Near Telecom Nagar, Khamla, Nagpur, Maharashtra 440 025 (India)</p> </div>
                <div style={{ display: 'flex', alignItems: 'center' }} ><img alt="callIcon" src={callIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }}></img> <div><p style={{fontFamily:'sans-serif'}} className={props.truncate ? "addressTruncate" : ""}>+91 9890916981 <br></br>+91 902169878</p></div></div>
                <div style={{ display: 'flex', alignItems: 'center'}}><img alt="emailIcon" src={emailIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }} ></img> <div><p style={{fontFamily:'sans-serif'}}>microplastpolytex@yahoo.com<br></br> amolshamkule@hotmail.com</p></div></div>
                </div>
            
            </div>
            {selectPage()}

        </>)
    }
    }
export default Header