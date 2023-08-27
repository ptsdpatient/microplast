import homePageVideo from "./assets/video/homepage.mp4"
const CompanyProfile = () => {
    return ( 
    <div style={{width:'100%'}}>
        <p>Welcome to M/s Microplast Polytex Industries Pvt. Ltd.</p>
        <video autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto',userSelect:'none' }}>
            <source src={homePageVideo} type="video/mp4" />
        </video>
    </div>
    )
}
export default CompanyProfile