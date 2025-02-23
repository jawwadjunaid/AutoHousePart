import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/images/BrakesA.png";
import "./BrakesAutoHouseComponent.css"; // CSS file import



const BrakesAutoHouseComponent = () => {
    return (
      <>
         <div className="BrakesContent-containerss">
         {/* Text Section */}
         <div className="BrakesContent-textss">
           
           <h1 style={{}}>Book Your Expert Auto Care Today</h1>
           <p>
           Vehicles break down. That’s a fact of life. But with the right team, yours won’t stay that way for long. Automobile of Switzerland is your go-to solution when looking for brake repair near me in Houston, TX. Visit us today and let’s get your car back in top shape.
   
           </p>
           <Link to="/contact" className="BrakesContentbtnssd">Let's Get Started</Link>
         </div>
   
         {/* Image Section */}
         <div className="BrakesContent-imagess">
           <img src={TrustImage} alt="Trust and Quality" className="BrakesContentmainssd-img" />
           {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
         </div>
       </div>
     );


      <div className="BrakesAutocontainer">
        <div className="BrakesAutocontent">
          {/* Text Section */}
          <div className="BrakesAutotext-section">
            <h2 style={{ fontSize: '2.81rem', color: '#0A0A0A' }}>
              Why choose Autohouse of Switzerland Inc
            </h2>
            <p className="BrakesAutosubtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
              For All Your Service and Maintenance Needs?
            </p>
            <p className="BrakesAutodescription" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
            Need service today? We offer same-day brake repair on most cars, so you don’t have to wait. Our team works efficiently to get you back on the road safely. Plus, our pricing is clear—no hidden surprises. Your brakes won’t fix themselves. Waiting too long can lead to bigger (and more expensive) problems. Call us or stop by for a thorough inspection. While you're here, ask us about our engine and transmission services to keep your vehicle running at its best.
            </p>
  
            {/* Accordion Section */}
            <div className="BrakesAutoaccordion">
              {[
                { title: "✔ Same-Day Service on Most Cars", content: "No long waits—our efficient process ensures quick turnaround without cutting corners." },
                { title: "✔ Latest Diagnostic Equipment", content: "We use top-tier technology to identify issues accurately and provide precise solutions." },
                { title: "✔ Expert Technicians", content: "Our highly trained mechanics have the expertise to handle even the trickiest brake problems." }
              ].map((item, index) => (
                <div className="BrakesAutoaccordion-item" key={index} onClick={() => toggleAccordion(index)}>
                  <div className="BrakesAutoaccordion-title">
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0A0A0A' }}>
                      {item.title}
                    </span>
                    {activeIndex === index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                  </div>
                  {activeIndex === index && (
                    <div className="BrakesAutoaccordion-content">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* Image Section */}
          <div className="BrakesAutoimage-section">
            <img src={BrakesAutoHouse1} alt="AutoHouse" />
          </div>
        </div>
      </div>
      </>
    )
    
 
_
}

export default BrakesAutoHouseComponent