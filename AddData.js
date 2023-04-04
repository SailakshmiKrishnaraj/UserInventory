import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { CgClose } from 'react-icons/cg';
import { hidePopup, setTableData } from '../Actions';

function AddData({ show, data, action, rowdata }) {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    if(action === "Add"){
      const newRecord = { postId: id, name, email, body, id: data.length };
      dispatch(setTableData([...data, newRecord]));
      dispatch(hidePopup());
    }
    else{
      let tempData = [...data];
      tempData[data.findIndex(val =>  val.id === rowdata.id)] = { postId: id, name, email, body, id: rowdata.id };
      dispatch(setTableData([...tempData]));
      dispatch(hidePopup());
    }
  }
  useEffect(() => {
    if(action !== "Add"){
      if(Object.keys(rowdata).length > 4){
        setId(rowdata.postId);
        setName(rowdata.name);
        setEmail(rowdata.email);
        setBody(rowdata.body);
      }
    }
  },[])
 
  return (
    <Modal
      show={show}
      centered
      size={"xl"}
    >
      <div></div>
      {action!=="View" && <Modal.Header> {action === "Add"    ? "AddUserData" : "EditUserData" }   <CgClose className='closeBtn' onClick={() => dispatch(hidePopup())} /></Modal.Header>}
      {action === "View"  && <Modal.Header>  View <CgClose className='closeBtn' onClick={() => dispatch(hidePopup())} /></Modal.Header>}
    
      <Modal.Body>
        <form>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">Post ID   </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">Name   </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group required row">
            <label className="col-sm col-form-label col-form-label-sm">  Email </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
          <div className="form-group  row">
            <label className="col-sm col-form-label col-form-label-sm">Body  </label>
            <div className="col-sm-8 paddingRight"> <input type="text" value={body} onChange={(e) => setBody(e.target.value)} className="form-control form-control-sm" /> </div>
          </div>
        </form>
      </Modal.Body>
     { action !== "View" &&  <Modal.Footer>
        <div className="form-group">
          <button className='buttonStyle' onClick={e => handleSubmit()} type="button">
            {action!=='View'&& action ==="Add"?"Save":"Update"}
          </button>
        </div>
      </Modal.Footer>}
      {action==="View" &&
       <Modal.Footer>
       <div className="form-group">
         <button className='buttonStyle' type="button" onClick={()=>dispatch(hidePopup())}>
           Close
         </button>
       </div>
     </Modal.Footer>
      }
    </Modal>
  )
}
function mapStateToProps(state) {
  const { show, data, action,rowdata } = state.userReducer;
  return {
         show, data, action,rowdata
  };
}

export default connect(mapStateToProps, null)(AddData)



