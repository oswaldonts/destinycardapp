import React from 'react';

function CardModal(props) {
  const {isVisibleModal, hideCard} = props;

  return (
    <React.Fragment>
      <div className={`${isVisibleModal ? '' : 'hidden' } fixed inset-0`} onClick={() => hideCard()}>
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>

          {props.children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardModal;