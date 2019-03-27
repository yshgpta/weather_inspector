import React from 'react';

import Inspector from '../../images/inspector.png';
import './title.css';

const Title = () => {
  return(
    <div>
		<h1 className='weather-title'><img src={Inspector} alt=''/> Weather Inspector</h1><hr/>
		<h3 className='weather-subtitle'>Find out temperature, conditions and more...</h3>
	</div>
  )
}

export default Title;
