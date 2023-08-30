import homePageVideo from "./assets/video/homepage.mp4"
import websiteVisitIcon from './assets/icon/visit-white.webp'
import cementIcon from './assets/icon/cement-white.webp'
import experienceIcon from './assets/icon/experience-white.webp'
import productImage1 from './assets/icon/products/fertilizers-sack-removebg-preview.webp'
import productImage2 from './assets/icon/products/ppfabrics-removebg-preview.webp'
import productImage3 from './assets/icon/products/ppwoven-laminated-removebg-preview.webp'
import productImage4 from './assets/icon/products/ppwovenfabrics-removebg-preview.webp'
import productImage5 from './assets/icon/products/ppwovensacks-2-removebg-preview.webp'
import productImage6 from './assets/icon/products/ppwovensacks-removebg-preview.webp'
import productImage7 from './assets/icon/products/ricebags-removebg-preview.webp'
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
    <div style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',backgroundColor:'#cecece'}}>
        <div style={{width:'100%',justifyContent:'space-around',display:'flex',backgroundColor:'#dedede',fontSize:'2vw'}}><img src={productImage1} style={{width:'12vw',height:'10vw',margin:'1.5vw',marginLeft:'4vw',marginRight:'2vw'}}></img><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'8rem'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',margin:'auto'}}>We produce and provide a diverse range of Fertilizer Sacks, known for their water resistance, quality finish, and durability, made from top-notch materials and available in various sizes and types to suit client needs.</p></div></div>

    </div>
    </>
    )
}
export default CompanyProfile