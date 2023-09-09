import './assets/style/App.css'
import client1 from './assets/icon/client/godrejagrovet.webp'
import client2 from './assets/icon/client/iffco.webp'
import client3 from './assets/icon/client/ITC.webp'
import client4 from './assets/icon/client/shriramfood.webp'
import client5 from './assets/icon/client/snehapoultry.webp'
const Client = (props) => {

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        height: 'auto',
        margin: '0',
        padding: '0',
      };
    
      const tableStyle = {
        borderCollapse: 'collapse',
        margin: '20px',
      };
    
      const thStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'left',
      };
    
      const tdStyle = {
        padding: '10px',
        textAlign: 'left',
        fontFamily:'data'
      };
    
      const evenRowStyle = {
        backgroundColor: '#f2f2f2',
      };
    
      const linkStyle = {
        textDecoration: 'none',
        color: '#007BFF',
      };
    
    return (<>
    
    <div className="client" style={{width:'100%',backgroundColor:'#dedede'}}>
    <div style={{margin:'auto'}}><p style={{textAlign:'center',fontSize:props.mobile?'6vw':'3vw',margin:'0rem',fontFamily:'data'}}>Our Clients</p></div>
    <div style={{width:'80%',margin:'auto',textAlign:'center'}}><p style={{textAlign:'center',fontFamily:'data',paddingBottom:'4vw'}}>Discover our prestigious clients, featuring industry giants such as Godrej Agrovet Ltd, ITC Limited, IFFCO, Sneha Foods & Feeds Pvt Ltd, and Sriram Foods Pvt Ltd. Learn how we partner with these industry leaders to deliver cutting-edge packaging solutions while upholding our unwavering dedication to sustainability and environmental stewardship.</p></div>
    <div style={{marginTop:props.mobile?'6vw':'3vw',width:props.mobile?'60%':'40%',display:'flex',flexDirection:'column',height:'auto',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',margin:'auto'}}>
    <div style={{display:'flex',flexDirection:'column',gap:'0rem',paddingBottom:'3vw'}}><img src={client1} style={{width:props.mobile?'50vw':'25vw',height:props.mobile?'12vw':'6vw',alignItems:'center'}}></img><p style={{textAlign:'center',fontFamily:'data',fontSize:props.mobile?'4vw':'2vw'}}>Godrej Agrovet Ltd</p></div>
    <div style={{display:'flex',flexDirection:'column',gap:'0rem',paddingBottom:'3vw'}}><img src={client2} style={{width:props.mobile?'36vw':'18vw',height:props.mobile?'16vw':'8vw'}}></img><p style={{textAlign:'center',fontFamily:'data',fontSize:props.mobile?'4vw':'2vw'}}>ITC Limited</p></div>
    <div style={{display:'flex',flexDirection:'column',gap:'0rem',paddingBottom:'3vw'}}><img src={client3} style={{width:props.mobile?'20vw':'10vw',height:props.mobile?'20vw':'10vw'}}></img><p style={{textAlign:'center',fontFamily:'data',fontSize:props.mobile?'4vw':'2vw'}}>IFFCO</p></div>
    <div style={{display:'flex',flexDirection:'column',gap:'0rem',paddingBottom:'3vw'}}><img src={client4} style={{width:props.mobile?'32vw':'16vw',height:props.mobile?'20vw':'10vw',margin:'auto'}}></img><p style={{textAlign:'center',fontFamily:'data',fontSize:props.mobile?'4vw':'2vw'}}>Sneha Foods & Feeds Pvt Ltd</p></div>
    <div style={{display:'flex',flexDirection:'column',gap:'0rem',paddingBottom:'3vw'}}><img src={client5} style={{width:props.mobile?'50vw':'25vw',height:props.mobile?'20vw':'10vw'}}></img><p style={{textAlign:'center',fontFamily:'data',fontSize:props.mobile?'4vw':'2vw'}}>Sriram Foods Pvt Ltd</p></div>
    <div style={containerStyle}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', maxWidth: '400px', textAlign: 'center' }}>
        <h1>Company Information</h1>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Field</th>
              <th style={thStyle}>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>PAN NO</td>
              <td style={tdStyle}>AAICM4528L</td>
            </tr>
            <tr>
              <td style={tdStyle}>GST NO</td>
              <td style={tdStyle}>27AAICM4528L1Z2</td>
            </tr>
            <tr>
              <td style={{...tdStyle}}>Bank Details</td>
              <td style={tdStyle}>
                CANARA BANK<br />
                BUTIBORI BRANCH, NAGPUR<br />
                CC ACCOUNT NO: 3481 261 000 006<br />
                IFSC: CNRB 000 3481
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>WEBSITE</td>
              <td style={tdStyle}><a href="http://www.microplastwovens.com" style={linkStyle}>www.microplastwovens.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
   
    </div>
    
    </>)
}
export default Client