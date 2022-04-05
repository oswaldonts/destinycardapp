import React from 'react';

function Modal() {

  function showAndHide(element, classesToAdd, classesToRemove) {
    element.classList.add(...classesToAdd);
    element.classList.remove(...classesToRemove);
  }

  function openModal() {
    showAndHide(document.querySelector("#modal-component-container"), ["block"], ["hidden"]);
  }

  function closeModal() {
    showAndHide(document.querySelector("#modal-component-container"), ["hidden"], ["block"]);
  }

  return (
    <React.Fragment>
      {/* <button className="bg-cyan-300 p-2 hover:bg-cyan-400" onClick={() => openModal()}>Abrir</button> */}
      <div id="modal-component-container" className="fixed inset-0">
        <div id="modal-flex-container" className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> 
          <div id="modal-bg-container" className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>

          <div id="modal-space-container" className="hidden sm:inline-block sm:align-middle sm:h-screen"></div>

          <div id="modal-container" className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
            <div id="modal-wrapper" className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div id="modal-wrapper-flex" className="sm:flex sm:items-start">
                <div id="modal-icon" className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                
                <div id="modal-content" className="text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 id="modal-title" className="text-lg font-medium text-gray-900">title</h3>
                  <div id="modal-text mt-2">
                    <p className="text-gray-500 text-sm">text</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="modal-actions" className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-700 font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => closeModal()}>Cancelar</button>
              <button className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 mt-3 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal;