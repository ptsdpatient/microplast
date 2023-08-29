import homePageVideo from "./assets/video/homepage.mp4"
import websiteVisitIcon from './assets/icon/visit-white.webp'
import cementIcon from './assets/icon/cement-white.webp'
import experienceIcon from './assets/icon/experience-white.webp'
const CompanyProfile = (props) => {
    return ( <>
    <div style={{position:'relative',width:'100%',height:'56.25%'}}>
        
        <div style={{position:'absolute',width:'100%',margin:'auto'}}>
        <p style={{width:'100%',textAlign:'center',height:'100%',fontSize:props.mobile?'4vw':'4vw',color:'snow',textShadow:'2px 2px 2px black',userSelect:'none'}}>Welcome to M/s Microplast Polytex Industries Pvt. Ltd.</p>
        <p style={{width:'80%',fontFamily:'sans-serif',textAlign:'center',margin:'auto',height:'100%',fontSize:props.mobile?'3vw':'3vw',color:'snow',textShadow:'2px 2px 2px black',userSelect:'none'}}>Nestled in the picturesque locale of Jamb, within the vibrant landscape of Samudrapur, District Wardha, Maharashtra, India, stands M/s Microplast Polytex Industries Pvt. Ltd. This innovative and dynamic plastic bag manufacturing company has carved its name as a pioneer in the realm of P.P. woven products.</p>
        <div className="homePageIcon">
                <div ><img src={websiteVisitIcon}></img><div><h4>8732</h4></div> </div>
                <div><img src={cementIcon}></img><div><h4>8M</h4></div></div>
                <div><img src={experienceIcon}></img><div><h4>15Y</h4></div></div>
        </div>
        
        </div>
        <video autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto',userSelect:'none',opacity:'100%' }}>
            <source src={homePageVideo} type="video/mp4" />
            
        </video>
       
    </div>
    </>
    )
}
export default CompanyProfile