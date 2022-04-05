import React from 'react';
import { ammoColors, classesColors, energyColors, rarityColors } from './assets/styles';

function CardBody(props) {
  const {item} = props;

  return (
    <React.Fragment>
      <div
        className="px-6"
        style={item.type === 'Guardian' ?
          classesColors[item.name] : rarityColors[item.tier]}
      >
        <div className="flex flex-col h-16 justify-center pb-1">
          <p className=" text-xl font-semibold">
            {item.name}
          </p>
          <div className="flex justify-between">
            <p className="text-sm font-semibold">
              {item.class} {item.type}
            </p>
            <p className="text-sm font-semibold">
              {item.tier}
            </p>
          </div>
        </div>
      </div>

      <div
        className="h-52 px-6 rounded-b-lg"
        style={{backgroundColor: "#20262d"}}
      >
        <div className="flex justify-between py-3">
          <p
            className="text-md font-semibold"
            style={energyColors[item.damageType.name]}
          >
            {item.damageType.name}
          </p>
          <p
            className="text-md font-semibold"
            style={ammoColors[item.ammoType.name]}
          >
            {item.ammoType.name}
          </p>
        </div>
        <div className="">
          <p className="text-xs font-light">
            {item.text}
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardBody;