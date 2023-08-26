import './assets/style/App.css'
import websiteVisitIcon from './assets/icon/website-visit.webp'
import cementIcon from './assets/icon/cement.webp'
import experienceIcon from './assets/icon/experience.webp'

import callIcon from './assets/icon/call.webp'
const Footer = () => {
     return (<>
            <div style={{width:'100%',height:'30rem',backgroundColor:'#dedede',marginTop:'2rem',boxShadow:'2px 3px 6px 2px #808080'}}>
            <div style={{height:'26rem', width:'100%',display:'flex',justifyContent:'space-around'}}>
            <div style={{backgroundColor:'#cecece',width:'45%',height:'95%',display:'flex',flexDirection:'column'}}>
                <p style={{width:'100%',textAlign:'center',marginTop:'1rem',marginBottom:'1rem',fontSize:'2rem'}}>Get in touch</p>
                <div style={{width:'100%',display:'flex'}}>
                
                <div style={{width:'40%',height:'100%'}}>
                <div style={{width:'85%',height:'100%',backgroundColor:'white',margin:'auto',display:'flex',flexDirection:'column'}}>
                <div style={{width:'95%',height:'32%',backgroundColor:'blue',margin:'auto',display:'flex'}}><img src={websiteVisitIcon} ></img><div></div> </div>
                <div style={{width:'95%',height:'32%',backgroundColor:'black',margin:'auto',display:'flex'}}><img src={cementIcon}></img><div></div></div>
                <div style={{width:'95%',height:'32%',backgroundColor:'black',margin:'auto',display:'flex'}}><img src={experienceIcon}></img><div></div></div>

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
            
            <div style={{backgroundColor:'#cecece',width:'45%',height:'95%'}}>
            <div>

            </div>
            <div>

            </div>
            </div>
            </div>


            <div style={{display:'flex',justifyContent:'space-between',width:'95%',height:'4rem',margin:'auto',alignItems:'center'}}> 
            <p>© Copyright 2023. All Rights Reserved. Designed by Tanishq Dhote</p>
            <div style={{width:'10.5rem' ,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}><img alt="callIcon" src={callIcon} style={{ width: '1.5rem', height: '1.5rem', margin: '1rem', userSelect: 'none' }}></img>
            <p>+91 9890916981 <br></br>+91 902169878</p>
            </div>
            
            </div>
            </div>
        </>)
    }


export default Footer