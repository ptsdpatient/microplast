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
import machine13 from './assets/icon/machinery/automatic-printing-machine.webp'




const Machinery = (props) => {

    const tableStyle = {
        border: '1px solid #ccc',
        borderCollapse: 'collapse',
        width: props.mobile?'90%':'50%',
        margin: 'auto',
      };
      
      const cellStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'center',
        fontFamily:'data',
        backgroundColor:'snow'
      };

    return (<>
    <div className="machinery" style={{paddingTop:'1rem',paddingBottom:'1rem'}}>
    <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}><p style={{textAlign:'center',fontSize:props.mobile?'6vw':'3vw',marginBottom:'1.5rem',fontFamily:'data',fontWeight:'bolder',padding:'1vw'}}>Our Advanced Machinery</p></div>
    <div style={{width:'90%',margin:'auto'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'1.5vw',margin:'0rem',fontFamily:'data'}}>Explore Microplast Polytex's state-of-the-art machines, which make things like bags and fabrics. We use advanced technology to create high-quality products like bags for fertilizer and rice, as well as fabrics made from plastic. Our machines are really good at making these things efficiently and accurately, so we can provide top-notch plastic bag solutions for various industries.</p></div>
                                  
    
    <div style={{width:'100%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine1} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'15vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Bag Conversion Line</p></div></div>
    <div style={{width:'80vw',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'2vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'1px 1px 2px grey'}}>We have three Bag Conversion Lines (BCS) from LOHIA CORP LIMITED. These machines are designed to make woven sacks from rolls of tubular woven PP/HDPE fabric. The specific model we have is the BCS 850/45 from Lohia, which is a high-speed machine perfect for making standard bags. It can do several tasks, like cutting the tubular fabric, folding the bottom, sewing it together, and stacking the finished bags. This new-generation machine comes with advanced servo and PLC controls. It can handle fabric widths of up to 850 mm and achieve speeds of up to 45 bags per minute. The actual speed depends on factors like the material used, fabric width, number of folds, and stitching details. There are several advantages that make these bag-making machines the top choice.</p></div>
    
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine4} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'35vw':'15vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Looms</p></div></div>
    <div style={{width:'80%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'2vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'1px 1px 2px grey'}}>We have 50 Nova 6 Looms specially designed for weaving high-quality fabric suitable for various packaging applications, such as cement, plastic granules, chemicals, and fertilizers. These looms are also ideal for producing covering fabrics like tarpaulin. To ensure top-notch fabric quality, we employ a load cell-type positive in-feed system to regulate the tension of warp tapes, which comes standard with the machine. Additionally, the speed of the inlet rollers is adjusted during weaving to maintain the desired tension levels.Our fabric surface winder is equipped with a load cell-assisted drive, ensuring consistent winding tensions throughout the entire fabric build. In total, these looms boast a monthly production capacity of approximately 3 million meters.</p></div>
  
    <div style={{width:props.mobile?'95%':'80%',margin:'auto',marginTop:'1.5rem',borderRadius:'25px'}}>
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Working Width</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Double Flat : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 30 to 90 cm</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>No. of shuttles : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 6</p></div>
                
            </div>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Capacity</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Weft insertion rate : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 1100ppm</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>No. of tapes : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 576/720</p></div>
               
            </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Warp bobbin</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Internal diameter : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 35mm**</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length of core : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 218mm**</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Max. bobbin diameter : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 160mm**</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length of traverse : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 200mm</p></div>
                
            </div>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Weft bobbin</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Internal diameter : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 35mm**</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length of core : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 218mm**</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Max. bobbin diameter : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 115mm</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length of traverse : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 200mm</p></div>
               
            </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Creel capacity</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Bobbins per machine : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 576</p></div>
                
            </div>
            <div style={{width:'46%',borderRadius:'25px',display:'flex',flexDirection:'column'}}>
                
                <p style={{padding:'1vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',textAlign:'center',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Fabric Winder</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Max. roll diameter : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 1500mm</p></div>
               
            </div>
            </div>
            <div style={{width:'100%',borderRadius:'25px',display:'flex',flexDirection:'column',paddingTop:'0.5rem'}}>
                
                <p style={{padding:'1vw',paddingLeft:'4vw',margin:'0rem',fontSize:props.mobile?'3.5vw':'2.2vw',backgroundColor:'#1b1b1b',borderRadius:'1rem',color:'snow'}}>Machine Dimensions</p>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length x Width x Height x Center (for 576 tapes) : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 9.7 x 2.8 x 3.0 x 2.2 m</p></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}>Length x Width x Height x Center (for 720 tapes) : </p><p style={{padding:'1vw',textShadow:'1px 1px 2px grey',margin:'0rem',fontSize:props.mobile?'3.5vw':'2vw'}}> 10.3 x 2.8 x 3.0 x 2.2 m </p></div>
               
            </div>
        </div>

    </div>


    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine5} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'15vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Tape sretching line</p></div></div>
    <div style={{width:'80%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'2vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'1px 1px 2px grey'}}>Our Tape Stretching Lines, developed by LOHIA CORP LIMITED, are designed to create PP/HDPE tapes for various uses like making woven or knitted bags, flexible intermediate bulk containers (FIBC), carpet backing, tarpaulins, wrapping fabrics, jumbo bags, and more. These High-Speed Tape Stretching Lines use cutting-edge technology to ensure top-notch performance and quality. They are efficient and flexible while minimizing the use of raw materials and energy. The plant's monthly capacity for tape production is 300 metric tons.</p></div>
  
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine13} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'8vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Automatic printing machine</p></div></div>
    <div style={{width:'80%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'2vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'1px 1px 2px grey'}}>We have three 6-color flexographic printing machines, each capable of producing 100,000 bags per day. Additionally, we have one 8-color rotogravure printing machine with a daily capacity of 50,000 bags. Furthermore, we have four automatic bag cutting and stitching machines. Together, these machines can produce a total of 150,000 bags per day.</p></div>
  
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine6} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'10vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Manual printing machine</p></div></div>
    <div style={{width:'80%',margin:'auto',backgroundColor:'white',borderRadius:'15px',padding:props.mobile?'3vw':'1.5vw'}}><p style={{textAlign:'center',fontSize:props.mobile?'3.5vw':'2vw',margin:'0rem',fontFamily:'sans-serif',color:'#181818',textShadow:'1px 1px 2px grey'}}>We  have  10  Nos  Stichman  Ahemadabad  make  manual  stitching  machines having capacity 1.5 Lacs bag per day for bottom, top and valve stitching</p></div>
  
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine3} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'5vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Lamination Machine : JP extrusion</p></div></div>
    

    <div className="container" style={{width:props.mobile?'80%':'50%',margin:'auto'}}>
        <h2>JP 80 CR 1600 Coating Plant Overview</h2>
        <p style={{fontFamily:'data'}}>
            The JP 80 CR 1600 coating plant is designed for applying LDPE on HDPE fabric and PP on PP woven fabric. It offers a versatile range of coating widths, from 800 mm to 1500 mm, and LDPE film thickness ranging from 20 microns to 80 microns.
        </p>
        <br></br>
        <p style={{fontFamily:'data'}}>
            The plant consists of the following equipment:
        </p>
        <ul className="equipment-list">
            <li className="equipment-item">80 mm Extruder with Main AC Motor</li>
            <li className="equipment-item">Screen Changer with Adaptor</li>
            <li className="equipment-item">Carriage (Forward/Reverse) & (UP/Down)</li>
            <li className="equipment-item">1650mm T’Die (Coat Hanger Type)</li>
            <li className="equipment-item">Unwinder Mechanical Two-Station with Edge Guiding System</li>
            <li className="equipment-item">(Note: Overhead Crane to be arranged by the customer for smooth handling of rolls/materials)</li>
            <li className="equipment-item">Laminator Unit with AC Motor</li>
            <li className="equipment-item">Turn Bar Arrangement</li>
            <li className="equipment-item">Manual Edge Trimming</li>
            <li className="equipment-item">Winder Turret with AC Motor</li>
            <li className="equipment-item">AC Drive Control Panel</li>
            <li className="equipment-item">Temperature Control Panel</li>
        </ul>
    </div>
    <div style={{width:'100%'}}><p style={{padding:'1rem',fontSize:props.mobile?'7vw':'2.5vw',color:'#1b1b1b',textShadow:'1px 2px 2px #cecece',textAlign:'center',font:'data'}}>Technical Specification</p></div>

    <table style={tableStyle}>
        <tbody>
          <tr ><td style={cellStyle}>Material  </td><td  style={cellStyle}>Nitrided Nitro Alloy Steel</td></tr>
          <tr ><td style={cellStyle}>Screw diameter  </td><td  style={cellStyle}>80 MM</td></tr>
          <tr ><td style={cellStyle}>L/D Ratio   </td><td  style={cellStyle}>30 : 1</td></tr>
          <tr ><td style={cellStyle}>Output  </td><td  style={cellStyle}>LDPE-160 to 180 kg/hr maximum & PP-140 to 160 kg/hr maximum for PP depending upon coating thickness, substrate width, type of raw material and processing conditions.</td></tr>
          <tr ><td style={cellStyle}>Barrel Cooling System</td><td  style={cellStyle}>Jacketed water cooling system on feed zone. All barrel zones cooling by 0.18 KW blower on each zone</td></tr>
          <tr ><td style={cellStyle}>Heating Zones  </td><td  style={cellStyle}>4 Nos </td></tr>
          <tr ><td style={cellStyle}>Heating Load </td><td  style={cellStyle}>24 KW</td></tr>
          <tr ><td style={cellStyle}>Reduction   </td><td  style={cellStyle}>Helical type with inbuilt thrust bearing</td></tr>
          <tr ><td style={cellStyle}>Gearbox  </td><td  style={cellStyle}>housing designed to withstand thrust developed during extrusion</td></tr>
        </tbody>
      </table>
    
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine2} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'18vw':'10vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Bobbin Cleaning Machine</p></div></div>
    <div style={{width:'90%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine11} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'32vw':'15vw',left:props.mobile?'1vw':'10vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Flexographic Printing Machine</p></div></div>
    <div style={{width:props.mobile?'40%':'50%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine10} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'10vw':'10vw',left:props.mobile?'4vw':'5vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black',width:'150%'}}>Manual Stitching machine</p></div></div>
    <div style={{width:props.mobile?'60%':'50%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine7} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'30vw':'15vw',left:props.mobile?'15vw':'5vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Hot air dryer</p></div></div>
    <div style={{width:props.mobile?'30%':'40%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine8} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'30vw':'25vw',left:props.mobile?'0vw':'2vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Gravimetric Dosing Mixture</p></div></div>
    <div style={{width:props.mobile?'40%':'50%',margin:'auto',marginTop:props.mobile?'10vw':'5vw',marginBottom:props.mobile?'4vw':'2vw'}}><div style={{position:'relative',width:props.mobile?'100%':'50%',margin:'auto'}}><img src={machine9} style={{width:'100%'}}></img><p style={{position:'absolute',top:props.mobile?'20vw':'15vw',left:props.mobile?'15vw':'7vw',fontSize:props.mobile?'6vw':'2.5vw',color:'snow',textShadow:'2px 2px 2px black'}}>Bale Press</p></div></div>
    
   
    
    </div>
    
    </>)
}
export default Machinery