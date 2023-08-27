import homePageVideo from "./assets/video/homepage.mp4"
const CompanyProfile = (props) => {
    return ( <>
    <div style={{position:'relative',width:'100%',height:'56.25%'}}>
        
        <div style={{position:'absolute',width:'100%',margin:'auto'}}>
        <p style={{width:'100%',textAlign:'center',height:'100%',fontSize:props.mobile?'1.4rem':'3rem',color:'snow',textShadow:'2px 2px 2px black',userSelect:'none'}}>Welcome to M/s Microplast Polytex Industries Pvt. Ltd.</p>
        </div>
        <video autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto',userSelect:'none' }}>
            <source src={homePageVideo} type="video/mp4" />
            
        </video>
       
    </div>
    </>
    )
}
export default CompanyProfile