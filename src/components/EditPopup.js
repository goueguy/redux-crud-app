import React from 'react'

export const EditPopup = ({user}) => {
    console.log(user);
  return (
    <div className="modal fade" id="staticBackdrop"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Edition</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-group mb-3">
                    <input type="text" className='form-control' placeholder='Nom...' onChange={(e)=>e.target.value}/>
                </div>
                <div className="form-group">
                    <input type="text" className='form-control' name='country'  placeholder='Pays...' onChange={(e)=>e.target.value}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="button" className="btn btn-primary">Modifier</button>
            </div>
            </div>
        </div>
    </div>

  )
}
