import React, { useEffect ,useState} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { TiPlus } from 'react-icons/ti';
import { AgGridReact } from 'ag-grid-react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { setData } from '../request/userrequest';
import { FiEdit } from 'react-icons/fi';
import AddData from './AddData';
import Header from '../Header/Header';
import Footer from '../TableFooter/Footer';
import { EditDataService } from '../request/userrequest';
import { showAddData } from '../request/popup';
import { Button,ButtonToolbar } from 'react-bootstrap';
import { AiTwotoneDelete } from "react-icons/ai";
import { setTableData } from '../Actions';
import { ImEye } from "react-icons/im";
import { ViewData } from '../request/userrequest';
function InventoryTable({show,data,setData,EditDataService,showAddData, setTableData,ViewData}) {
    useEffect(async () => {
        await setData();
    },[]);

   const AgGridColumn = [{ title: 'S No', field: 'id',width:"120px",sortable: true,
   resizable: true,headerTooltip:"ID",floatingFilter: true, filter: 'agNumberColumnFilter'},
    { headerName: 'Post ID', field: 'postId',width:"150px",sortable: true,
    resizable: true ,headerTooltip:"UserName",floatingFilter: true, filter: 'agNumberColumnFilter'},
    { headerName: 'Name', field: 'name' ,width:"300px",sortable: true,
    resizable: true,headerTooltip:"Name",floatingFilter: true, filter: 'agTextColumnFilter'},
    { headerName: 'Email', field: 'email',width:"250px",sortable: true,
    resizable: true,headerTooltip:"Email",floatingFilter: true, filter: 'agTextColumnFilter'},
  
    { headerName: 'Body', field: 'body',width:"300px",sortable: true,
    resizable: true,headerTooltip:"Body",floatingFilter: true, filter: 'agTextColumnFilter' },
   {
        headerName: "Edit",
        field: "",
        filter: false,
        sortable: false,
        resizable: false,
        headerTooltip: "Edit",
        maxWidth: 50,
        headerClass: "action-col",
        cellRenderer: params => {
        const onClick = (params) => {
          
                    EditDataService(params);
                
            };
            return <FiEdit  className= "CursorPointer" size={12} onClick={() => onClick(params.data)} />
        }
   },
   {
        headerName: "Delete",
        field: "",
        filter: false,
        sortable: false,
        resizable: false,
        maxWidth: 80,
        headerClass:"Delete",
        headerTooltip: "Delete",
        cellRenderer: params => {
            
                const onClick = (params) => {
                    let tempData = [...data];
                    tempData.splice(tempData.findIndex(val => val.id === params.data.id),1);
                     //console.log("test",filteredData,tempData);
                    setTableData(tempData)
                }
               
              return <AiTwotoneDelete className="CursorPointer" size={12} onClick={()=>onClick(params)}/>
         
  }}, 
  {
        headerName: "View",
        field: "",
        filter: false,
        sortable: false,
        resizable: false,
        maxWidth: 80,
        headerClass:"View",
        headerTooltip: "View",
        cellRenderer: params => {
           const  onViewClick= (params) => {
                ViewData({...params})
               
            }
            return <ImEye color='#414a59' size={12} className="CursorPointer" onClick={()=>onViewClick(params.data)}  />
         
  }}  
    ];
      const Tabledata = data ? data : [];
   
  
    return (
        <>
        <Spinner animation="border" size="sm" />
        <Header />
       <span className='inventoryMenuHeight' ><ButtonToolbar><Button className='btnStyle' variant ="primary" onClick={()=>showAddData()}><TiPlus size={22} />Add Data</Button></ButtonToolbar></span>
       
        <div className="ag-theme-alpine setScrollbar" style={{ width: "100%", height:"78vh" }} >
        <AgGridReact
        rowData={Tabledata}
        columnDefs={AgGridColumn} readOnlyEdit={true}/></div>
        <Footer />
        {show && <AddData />}
        </>
    )
  
}



function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setData,EditDataService,showAddData, setTableData,ViewData
        },
        dispatch
    );
}

function mapStateToProps(state) {
   const { show,data,rowdata } = state.userReducer;
    return {
      data,show,rowdata
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(InventoryTable)