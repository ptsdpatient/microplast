import './assets/style/App.css'
import machine1 from './assets/icon/machinery/bag-conversion-line.webp'
import machine2 from './assets/icon/machinery/bobbin-cleaning-machine.webp'
import machine3 from './assets/icon/machinery/lamination-jpex.webp'
import machine4 from './assets/icon/machinery/looms.webp'
import machine5 from './assets/icon/machinery/tape-stretching-line.webp'
import machine6 from './assets/icon/machinery/manual-printing-machine.webp'
import machine7 from './assets/icon/machinery/hot-air-dryer.webp'
import machine8 from './assets/icon/machinery/gravimetric-dosing-mixer.webp'
import machine9 from './assets/icon/machinery/bale-press-machine.webp'
import machine10 from './assets/icon/machinery/manual-stitching.webp'
import machine11 from './assets/icon/machinery/flexographic.webp'
import machine12 from './assets/icon/machinery/weighing-scale.webp'





const Machinery = (props) => {



    return (<>
    <div className="machinery" style={{paddingTop:'1rem'}}>
    <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}><p style={{textAlign:'center',fontSize:props.mobile?'6vw':'3vw',marginBottom:'1.5rem',fontFamily:'data',fontWeight:'bolder',padding:'1vw'}}>Our Advanced Machinery</p></div>
    <div style={{width:'90%',margin:'auto'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'1.5vw',margin:'0rem',fontFamily:'data'}}>Explore Microplast Polytex's state-of-the-art machines, which make things like bags and fabrics. We use advanced technology to create high-quality products like bags for fertilizer and rice, as well as fabrics made from plastic. Our machines are really good at making these things efficiently and accurately, so we can provide top-notch plastic bag solutions for various industries.</p></div>
    <div style={{width:'90%',margin:'auto'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine1} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'18vw',left:props.mobile?'18vw':'10vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Bag Conversion Line</p></div></div>
   <div style={{width:props.mobile?'80%':'50%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'2.8vw':'1.4vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'0px 1px 1px #1b1b1b'}}>Our Tape Stretching Lines, manufactured by LOHIA CORP LIMITED, are designed to produce PP/HDPE tapes suitable for a wide range of applications. These applications include woven/knitted bags, flexible intermediate bulk containers (FIBC), carpet backing, tarpaulins, wrapping fabrics, jumbo bags, and more. These high-speed tape stretching lines incorporate cutting-edge technology to ensure optimal performance and quality. Our tape extrusion lines have been carefully engineered to meet the highest standards of performance and quality while maximizing efficiency and flexibility and minimizing the consumption of raw materials and energy. In fact, our plant boasts a monthly production capacity of 300MT for these tapes.</p></div>

    <div style={{width:'90%',margin:'auto',marginTop:'5vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine4} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'18vw',left:props.mobile?'18vw':'10vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Looms</p></div></div>
    <div style={{width:props.mobile?'80%':'50%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'2.8vw':'1.4vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'0px 1px 1px #1b1b1b'}}>We have 50 Nova 6 Looms specially designed for weaving high-quality fabric suitable for various packaging applications, such as cement, plastic granules, chemicals, and fertilizers. These looms are also ideal for producing covering fabrics like tarpaulin. To ensure top-notch fabric quality, we employ a load cell-type positive in-feed system to regulate the tension of warp tapes, which comes standard with the machine. Additionally, the speed of the inlet rollers is adjusted during weaving to maintain the desired tension levels.Our fabric surface winder is equipped with a load cell-assisted drive, ensuring consistent winding tensions throughout the entire fabric build. In total, these looms boast a monthly production capacity of approximately 3 million meters.</p></div>
    
    
    
    </div>
    
    </>)
}
export default Machinery