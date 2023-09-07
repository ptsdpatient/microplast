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
import companyData from './data.json'
import {useState} from 'react'
const CompanyProfile = (props) => {
    const views = companyData[0].views;
    const bags = companyData[1].bags;
    const exp = companyData[2].exp;

    return ( <>
    <div style={{position:'relative',width:'100%',height:'56.25%'}}>
        
        <div style={{position:'absolute',width:'100%',margin:'auto'}}>
        <p style={{width:'100%',marginTop:props.mobile?'0.5rem':'3rem',marginBottom:'1%',textAlign:'center',height:'100%',fontSize:props.mobile?'5vw':'3.8vw',color:'snow',textShadow:'0px 3px 2px black',userSelect:'none'}}>Welcome to M/s Microplast Polytex Industries Pvt. Ltd.</p>
        <p style={{width:props.mobile?'100%':'80%',fontFamily:'sans-serif',textAlign:'center',margin:'auto',marginTop:props.mobile?'1%':'3%',height:'100%',fontSize:props.mobile?'3.5vw':'3vw',color:'snow',textShadow:'0px 3px 2px black',userSelect:'none'}}>Microplast Polytex Industries Pvt. Ltd., based in Jamb, Maharashtra, India, is a cutting-edge plastic bag production company. Specializing in P.P. Woven Sacks, Fabrics, Bags, Valve Type Bags, and Gusseted Bags, they're strategically located just 65 km from Nagpur. Equipped with state-of-the-art machinery, they guarantee top-notch quality.</p>
        <div className="homePageIcon" style={{marginTop:props.mobile?'2%':'3%'}}>
                <div ><img src={websiteVisitIcon}></img><div><h4>{views}</h4></div> </div>
                <div><img src={cementIcon}></img><div><h4>{bags}M</h4></div></div>
                <div><img src={experienceIcon}></img><div><h4>{exp}Y</h4></div></div>
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
        <div style={{width:props.mobile?'100%':'80%',display:'flex',justifyContent:'space-around',margin:'auto'}}><p style={{textAlign:'center',fontSize:props.mobile?'1rem':'1.5rem',margin:'auto',marginBottom:'2.5rem',marginTop:'0.5rem'}}>Our products cater to diverse industries like fertilizers, cement, polymer, sugar, chemicals, textiles, and food grains. With a monthly capacity of 300 MT of P.P. granules, they produce a staggering 30 lac bags/month. Their highly skilled team ensures that every product meets the highest quality standards, maintaining strict quality control at every production stage.</p></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Fertilizer Sacks</p><img src={productImage1} style={{width:props.mobile?'22vw':'12vw',height:props.mobile?'20vw':'10vw',margin:'auto'}}></img></div><div className="productDataDiv"  style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>We produce and provide a diverse range of Fertilizer Sacks, known for their water resistance, quality finish, and durability, made from top-notch materials and available in various sizes and types to suit client needs.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div className="productDataDiv" style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>Our PP Woven Fabric offers reliable and cost-effective packaging solutions for various industries worldwide.</p></div><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>HDPE Fabrics</p><img src={productImage2} style={{width:props.mobile?'22vw':'14vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Gussetted Bags</p><img src={productImage3} style={{width:props.mobile?'22vw':'12vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div><div className="productDataDiv"  style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>PP woven laminated gusseted bags maximize vertical storage capacity with their unique design, making them perfect for storing agri products and food grains while efficiently utilizing space.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div className="productDataDiv" style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>Our P.P. woven fabric is meticulously crafted using advanced techniques, ensuring durability and versatility for various industrial applications.</p></div><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Woven Fabrics</p><img src={productImage4} style={{width:props.mobile?'22vw':'14vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Woven Sacks</p><img src={productImage5} style={{width:props.mobile?'22vw':'12vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div><div className="productDataDiv"  style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>We provide a comprehensive selection of polypropylene woven bags and sacks with liners, designed to safeguard and securely package materials like chemicals, fertilizers, animal feed, and more, all produced in our advanced manufacturing facility.</p></div></div>
        <div style={{width:'90%',justifyContent:'end',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div className="productDataDiv" style={{width:'70%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}}>These woven polypropylene bags are exceptionally durable and versatile, serving as robust packaging solutions for various industries such as grain, milling, sugar, fodder, chemicals, fertilizers, cement, and more; we provide fully customized designs to meet each customer's specific needs.</p></div><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Woven Bags</p><img src={productImage6} style={{width:props.mobile?'22vw':'14vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div></div>
        <div style={{width:'90%',justifyContent:'start',display:'flex',backgroundColor:'#dedede',fontSize:'2vw',padding:'1rem',margin:'auto'}}><div style={{position:'relative'}}><p style={{width:'100%',position:'absolute',marginTop:'7vw',margin:'auto',textAlign:'center',top:'7vw',fontSize:props.mobile?'4vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Rice Bags</p><img src={productImage7} style={{width:props.mobile?'22vw':'12vw',height:props.mobile?'22vw':'10vw',margin:'auto'}}></img></div><div className="productDataDiv" style={{width:'55%',margin:'auto',backgroundColor:'#cecece',height:'auto',borderRadius:'20px',paddingLeft:'2rem',overflowY:props.mobile?'auto':'hidden'}}> <p style={{fontFamily:'sans-serif',width:'92%',height:'80%',fontSize:props.mobile?'1rem':'1.3rem',textShadow:'1px 1px 1px #cecece'}} >Our high-quality PP Rice Bags, specially designed for packing rice and food grains, offer durability, customization options, water resistance, and effective preservation of packed contents, all verified through rigorous industrial quality checks.</p></div></div>
        
        
    </div>
    </>
    )
}
export default CompanyProfile