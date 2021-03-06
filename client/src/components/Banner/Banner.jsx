import { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';

function Banner() {
  const [banner, setBanner] = useState([]);
  
  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data);
  };
  
  const imageBanner = banner[0]?.image.secure_url
  
  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <>
    {imageBanner && (
      <div id="imagemBanner" style={{backgroundImage: `url(${imageBanner})`}} ></div>
    )}
    </>
  );

};

export default Banner;
