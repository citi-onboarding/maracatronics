import { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';

function Banner() {
  const [banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <div className="banner">
      {banner?.map(({_id, image, key}) => (
      <img key={_id} src={image?.secure_url}/>
      ))}
    </div>
  );

}

export default Banner;
