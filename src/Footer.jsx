import './assets/style/App.css'
import websiteVisitIcon from './assets/icon/website-visit.webp'
import cementIcon from './assets/icon/cement.webp'
import experienceIcon from './assets/icon/experience.webp'

import callIcon from './assets/icon/call.webp'
const Footer = () => {
     return (<>
            <div style={{width:'100%',height:'31rem',backgroundColor:'#dedede',marginTop:'2rem',boxShadow:'2px 3px 6px 2px #808080'}}>
            <div style={{height:'26rem', width:'100%',display:'flex',justifyContent:'space-around'}}>
            <div style={{width:'45%',height:'95%',display:'flex',flexDirection:'column'}}>
                <p style={{width:'100%',textAlign:'center',marginTop:'1rem',marginBottom:'1.8rem',fontSize:'2rem'}}>Get in touch</p>
                <div style={{width:'100%',display:'flex'}}>
                
                <div style={{width:'40%',height:'100%'}}>
                <div className="iconBox-footer">
                <div ><img src={websiteVisitIcon}></img><div><h4>8732</h4><p>visits</p></div> </div>
                <div><img src={cementIcon}></img><div><h4>8M</h4><p>bags produced</p></div></div>
                <div><img src={experienceIcon}></img><div><h4>15Y</h4><p>experience</p></div></div>

                </div>
                </div>

                <form className="formBox" style={{}}>
                <input placeholder="Your Name"></input><br></br>
                <input placeholder="Email Address"></input><br></br>
                <input placeholder="Phone Number"></input><br></br>
                <textarea className="messageBox" placeholder="Message" style={{}}></textarea><br></br>
                <button>Submit</button>
                </form>

                </div>

            </div>
            
            <div style={{width:'45%',height:'95%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div style={{display:'flex',width:'40%',height:'2rem',justifyContent:'space-around',margin:'auto'}}><p className='underline-paragraph' style={{margin:'0rem',marginTop:'0.5rem'}}>Office</p><p className='underline-paragraph' style={{margin:'0rem',marginTop:'0.5rem'}}>Factory</p> </div>
            <div style={{height:'85%',width:'85%',margin:'auto'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2173815383794!2d78.93767842089476!3d20.62185060085711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3675e5da57411%3A0x7bb026d16e8fff11!2sMicroplast%20Polytex%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1693046183193!5m2!1sen!2sin" style={{border:'0',height:'100%',width:'100%'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            </div>
            </div>

            <div style={{width:'100%',height:'0.2rem',backgroundColor:'#aeaeae'}}></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'95%',height:'4.5rem',margin:'auto',alignItems:'center'}}> 
            <p>© Copyright 2023. All Rights Reserved. Designed by Tanishq Dhote</p>
            <div style={{width:'10.5rem' ,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}><img alt="callIcon" src={callIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }}></img>
            <p>+91 9890916981 <br></br>+91 902169878</p>
            </div>
            
            </div>
            </div>
        </>)
    }


export default Footer