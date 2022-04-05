import React from 'react';

import helmetArmor from '../assets/armor/helmet.svg';
import gauntletsArmor from '../assets/armor/gauntlets.svg';
import chestArmor from '../assets/armor/chest.svg';
import legArmor from '../assets/armor/leg.svg';
import classArmor from '../assets/armor/class.svg';

function ArmorIcon(props) {
  const {item} = props;

  const armor = {
    'Helmet Armor': helmetArmor,
    'Gauntlets Armor': gauntletsArmor,
    'Chest Armor': chestArmor,
    'Leg Armor': legArmor,
    'Class Armor': classArmor,
  }

  return (
    <React.Fragment>
      <img 
        className="absolute top-3 left-3 w-8"
        src={armor[item.subType]}
        alt="..."
      />
    </React.Fragment>
  )
}

export default ArmorIcon