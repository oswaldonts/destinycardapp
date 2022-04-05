import React from 'react';

function CardIcon(props) {
  const {item, showCard, urlBase} = props;

  return (
    <React.Fragment>
      <div
        className="border-2 border-slate-200 border-solid hover:cursor-pointer hover:bg-stone-900" 
        onClick={() => showCard(item)}
      >
        <img className="h-12" src={urlBase + item.icon} alt="" />
      </div>
    </React.Fragment>
  )
}

export default CardIcon;