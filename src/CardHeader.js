import React from 'react';
import ArmorIcon from './components/ArmorIcon';
import WeaponIcon from './components/WeaponIcon';

import titanScreenshot from './assets/classes/titan-trinity-shader-2.jpg'
import hunterScreenshot from './assets/classes/hunter-trinity-shader-2.jpg'
import warlockScreenshot from './assets/classes/warlock-trinity-shader-2.jpg'

function CardHeader(props) {
  const {item, urlBase} = props;

  const guardianScreenshot = {
    'Titan': titanScreenshot,
    'Hunter': hunterScreenshot,
    'Warlock': warlockScreenshot,
  }

  const icon = {
    Armor: <ArmorIcon item={item} />,
    Guardian: null,
    Weapon: <WeaponIcon item={item} urlBase={urlBase} />,
  }

  return (
    <React.Fragment>
      <img
        className="h-44 rounded-t-lg"
        src={item.type === 'Guardian' ? 
          guardianScreenshot[item.name] : urlBase + item.screenshot}
        alt="..."
      />
      
      {icon[item.type]}
    </React.Fragment>
  )
}

export default CardHeader;