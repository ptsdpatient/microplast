import './assets/style/App.css'
import websiteVisitIcon from './assets/icon/website-visit.webp'
import cementIcon from './assets/icon/cement.webp'
import factoryIcon from './assets/icon/factory.png'
import experienceIcon from './assets/icon/experience.webp'
import officeIcon from './assets/icon/office.webp'
import callIcon from './assets/icon/call.webp'
import {useState} from 'react'  
const Footer = (props) => {

    const [officeMapSelection,setOfficeMapSelection] = useState(false)

     return (<>
            <div style={{width:'100%',height:props.mobile?'58rem':'32rem',backgroundColor:'#dedede'}}>
                <br></br>
                <div style={{height:props.mobile?'52rem':'26rem', width:'100%',display:'flex',justifyContent:'space-around',flexDirection:props.mobile?'column':'row'}}>
                <div style={{width:props.mobile?'100%':'50%',height:'95%',display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}><p className="underline-paragraph" style={{textAlign:'center',fontSize:props.mobile?'1.5rem':'2.0rem',marginBottom:'1rem',marginTop:'1rem'}}>Get in touch</p></div>
                <div style={{width:'100%',display:'flex'}}>
                <div style={{width:'40%',height:'100%'}}>
                <div className="iconBox-footer">
                <div ><img src={websiteVisitIcon}></img><div style={{overflowX:props.mobile?'auto':'hidden'}}><h4 style={{fontSize:'1.5rem'}}>8732</h4><p style={{fontSize:'1rem'}}>visits</p></div> </div>
                <div><img src={cementIcon}></img><div style={{overflowX:props.mobile?'auto':'hidden'}}><h4 style={{fontSize:'1.5rem'}}>8M</h4><p style={{fontSize:'1rem'}}>products produced</p></div></div>
                <div><img src={experienceIcon}></img><div style={{overflowX:props.mobile?'auto':'hidden'}}><h4 style={{fontSize:'1.5rem'}}>15Y</h4><p style={{fontSize:'1rem'}}>experience</p></div></div>
                </div>
                </div>
                <form className="formBox">
                <input placeholder="Your Name"></input><br></br>
                <input placeholder="Email Address"></input><br></br>
                <input placeholder="Phone Number"></input><br></br>
                <textarea placeholder="Message"></textarea><br></br>
                <button>Submit</button>
                </form>

                </div>

            </div>
            
            <div style={{width:props.mobile?'100%':'45%',height:'95%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div style={{display:'flex',width:'60%',height:'2rem',justifyContent:'space-around',margin:'auto'}}><div><img src={officeIcon} style={{width:'1.5rem',height:'1.5rem',margin:'0rem',marginTop:'0.6rem',marginRight:'0.6rem'}}></img><p className='underline-paragraph' style={{margin:'0rem',marginTop:'0.5rem',fontSize:props.mobile?'1.3rem':'1.4rem'}} onClick={()=>{setOfficeMapSelection(true)}}>Office</p></div><div><img src={factoryIcon} style={{width:'1.5rem',height:'1.5rem',margin:'0rem',marginTop:'0.6rem',marginRight:'0.6rem'}} ></img><p className='underline-paragraph' style={{margin:'0rem',marginTop:'0.5rem',fontSize:props.mobile?'1.3rem':'1.4rem'}} onClick={()=>setOfficeMapSelection(false)}>Factory</p></div> </div>
            <div style={{height:'75%',width:'85%',margin:'auto'}}>
            <iframe src={officeMapSelection?"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.953103843093!2d79.055590299413!3d21.10831059973994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf84e9f8886f%3A0xcd08786aa9d9cc7a!2sKhamla%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693056864309!5m2!1sen!2sin":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2173815383794!2d78.93767842089476!3d20.62185060085711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3675e5da57411%3A0x7bb026d16e8fff11!2sMicroplast%20Polytex%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1693046183193!5m2!1sen!2sin"} style={{border:'0',height:'100%',width:'100%',boxShadow:'2px 5px 6px 4px #cecece'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            </div>
            </div>

            <div style={{width:'100%',height:'0.2rem',backgroundColor:'#aeaeae'}}></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'95%',height:'4.5rem',margin:'auto',alignItems:'center'}}> 
            <p style={{fontFamily:'sans-serif',fontSize:props.mobile?'3.3vw':'1.5vw' }}>© Copyright 2023. All Rights Reserved. Designed by Tanishq Dhote</p>
            <div style={{width:'12rem' ,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <img alt="callIcon" src={callIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }}></img>
            <p style={{fontFamily:'sans-serif',width:'100%',fontSize:props.mobile?'3.3vw':'1.5vw'}}>9359721860</p>
            </div>
            
            </div>
            </div>
        </>)
    }


export default Footer