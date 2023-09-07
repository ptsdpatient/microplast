import './assets/style/App.css'
import client1 from './assets/icon/client/godrejagrovet.webp'
import client2 from './assets/icon/client/iffco.webp'
import client3 from './assets/icon/client/ITC.webp'
import client4 from './assets/icon/client/shriramfood.webp'
import client5 from './assets/icon/client/snehapoultry.webp'
const Client = () => {
    return (<>
    
    <div className="client" style={{width:'100%'}}>
    <div style={{width:'80%',display:'flex',height:'auto',flexWrap:'wrap'}}>
    <div style={{display:'flex',flexDirection:'column'}}><img src={client1} style={{width:'25vw',height:'6vw'}}></img><p></p></div>
    <div style={{display:'flex',flexDirection:'column'}}><img src={client2} style={{width:'18vw',height:'8vw'}}></img><p></p></div>
    <div style={{display:'flex',flexDirection:'column'}}><img src={client3} style={{width:'10vw',height:'10vw'}}></img><p></p></div>
    <div style={{display:'flex',flexDirection:'column'}}><img src={client4} style={{width:'16vw',height:'8vw'}}></img><p></p></div>
    <div style={{display:'flex',flexDirection:'column'}}><img src={client5} style={{width:'25vw',height:'8vw'}}></img><p></p></div>
    
    </div>
    </div>
    
    </>)
}
export default Client