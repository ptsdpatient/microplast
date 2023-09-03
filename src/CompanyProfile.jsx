import './assets/style/App.css'
import homePageVideo from "./assets/video/homepage.mp4"
import websiteVisitIcon from './assets/icon/visit-white.webp'
import cementIcon from './assets/icon/cement-white.webp'
import experienceIcon from './assets/icon/experience-white.webp'
import productImage1 from './assets/icon/products/fertilizers-sack-removebg-preview.webp'
import productImage2 from './assets/icon/products/ppfabrics-removebg-preview.png'
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
        <p style={{width:'80%',fontFamily:'sans-serif',textAlign:'center',margin:'auto',height:'100%',fontSize:props.mobile?'3.2vw':'3vw',color:'snow',textShadow:'2px 2px 2px black',userSelect:'none'}}>Nestled in the picturesque locale of Jamb, within the vibrant landscape of Samudrapur, District Wardha, Maharashtra, India, stands M/s Microplast Polytex Industries Pvt. Ltd. This innovative and dynamic plastic bag manufacturing company has carved its name as a pioneer in the realm of P.P. woven products.</p>
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
    <div style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',backgroundColor:'#dedede',justifyContent:'space-around'}}>
        <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}><p className="underline-paragraph" style={{textAlign:'center',fontSize:props.mobile?'1.5rem':'2.5rem',margin:'1.5rem'}}>Our Products</p></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><img src={productImage1} style={{width:'12vw',height:'10vw',margin:'auto'}}></img><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>We produce and provide a diverse range of Fertilizer Sacks, known for their water resistance, quality finish, and durability, made from top-notch materials and available in various sizes and types to suit client needs.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>Our PP Woven Fabric offers reliable and cost-effective packaging solutions for various industries worldwide.</p></div><img src={productImage2} style={{width:'14vw',height:'10vw',margin:'auto'}}></img></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><img src={productImage3} style={{width:'12vw',height:'10vw',margin:'auto'}}></img><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>PP woven laminated gusseted bags maximize vertical storage capacity with their unique design, making them perfect for storing agri products and food grains while efficiently utilizing space.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>Our P.P. woven fabric is meticulously crafted using advanced techniques, ensuring durability and versatility for various industrial applications.</p></div><img src={productImage4} style={{width:'14vw',height:'10vw',margin:'auto'}}></img></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><img src={productImage5} style={{width:'12vw',height:'10vw',margin:'auto'}}></img><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>We provide a comprehensive selection of polypropylene woven bags and sacks with liners, designed to safeguard and securely package materials like chemicals, fertilizers, animal feed, and more, all produced in our advanced manufacturing facility.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><div style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>These woven polypropylene bags are exceptionally durable and versatile, serving as robust packaging solutions for various industries such as grain, milling, sugar, fodder, chemicals, fertilizers, cement, and more; we provide fully customized designs to meet each customer's specific needs.</p></div><img src={productImage6} style={{width:'14vw',height:'10vw',margin:'auto'}}></img></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem'}}><img src={productImage7} style={{width:'12vw',height:'10vw',margin:'auto'}}></img><div style={{width:'55%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem'}}>Our high-quality PP Rice Bags, specially designed for packing rice and food grains, offer durability, customization options, water resistance, and effective preservation of packed contents, all verified through rigorous industrial quality checks.</p></div></div>
        
        
    </div>
    </>
    )
}
export default CompanyProfile