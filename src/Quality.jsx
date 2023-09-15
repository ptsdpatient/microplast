const Quality = (props) => {
    const styles = {
        container: {
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f7f7f7',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        heading: {
          fontSize: props.mobile?'4.5vw':'3vw',
          color: 'black',
          marginBottom: '10px',
        },
        paragraph: {
          fontSize: props.mobile?'3.5vw':'2vw',
          color: 'black',
          lineHeight: '1.4',
          marginBottom: '15px',
        },
      };

    return (<>
        <div style={{backgroundColor:'#dedede',paddingBottom:'1rem',position:'relative'}}>
        <div>
        <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}><p className="underline-paragraph" style={{fontFamily:'data',textAlign:'center',fontSize:props.mobile?'1.8rem':'2.5rem',margin:'0.5rem',padding:'0.5rem'}}>Quality Assurance</p></div>
        <div style={{width:'90%',margin:'auto'}}>
        <div style={styles.container}>
      <h2 style={{...styles.heading,margin:'0rem'}}>Our Commitment to Quality</h2>
      <p style={styles.paragraph}>
        At Microplast, we are dedicated to providing our customers with the best products and services. Our quality control procedures ensure that our products exceed expectations with a defect rate of less than 1%.
      </p>
      <p style={styles.paragraph}>
        Our hydrophobic polypropylene fabric keeps you dry by repelling moisture and wicking away perspiration from your skin. We use state-of-the-art machinery and a customer-centric approach to craft fabrics that meet your demands.
      </p>
      <p style={styles.paragraph}>
        Quality at Microplast is a result of dedication, guidance, and expert execution throughout our production journey. We meticulously manage quality from raw materials to dispatch, fortified with UV stabilizers to protect against UV rays.
      </p>
      <p style={styles.paragraph}>
        Our production unit, equipped with cutting-edge machinery, ensures safety, durability, impeccable printing quality, and unmatched clarity. Every product batch undergoes rigorous testing and inspection.
      </p>
      <p style={styles.paragraph}>
        Our commitment to quality extends to our services. We provide prompt worldwide delivery services, ensuring excellence in every aspect. At Microplast, quality is our unwavering journey towards excellence.
      </p>
    </div>
        </div>
        </div>
        </div>
        </>)
}
export default Quality