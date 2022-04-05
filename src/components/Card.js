import React from 'react';
import CardBody from '../CardBody.js';
import CardHeader from '../CardHeader.js';

function Card(props) {
  const {item, urlBase} = props;

  return (
    <React.Fragment>
      <div className="w-72">
        <div className="relative shadow-lg rounded-lg break-words text-white">
          <CardHeader item={item} urlBase={urlBase} />

          <CardBody item={item} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card;