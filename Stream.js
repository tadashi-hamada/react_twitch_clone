import React from 'react'
import './Stream.css'
const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">
                                Offline
                            </div>
                            <h2>Check out the below stream</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell" ></i>
                            <p>You will be notified</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                <iframe width="500" height="295" 
                    src="https://www.youtube.com/embed/gLNIVdtaW3A" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
            </div>
            
        </div>
    )
}

export default Stream
