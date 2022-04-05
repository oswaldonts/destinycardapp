import React from 'react';

function WeaponIcon(props) {
  const {item, urlBase} = props;

  return (
    <React.Fragment>
      <img
        className="absolute top-4 left-4 h-6"
        src={urlBase + item.damageType.icon}
        alt="..."
      />
    </React.Fragment>
  )
}

export default WeaponIcon