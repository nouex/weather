import React from 'react';

const Footer = () => (
  <div style={{
    backgroundColor: "black"
  }}>
    <a href="https://darksky.net/poweredby/" target="_blank">
      <img src="./dark-sky-attribution.png"
           style={{
             height: "45px"
           }}
           className="mx-auto d-block"/>
    </a>
  </div>
)

export default Footer
