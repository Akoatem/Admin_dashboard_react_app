import { DataGrid } from "@mui/x-data-grid";
import "./userList.css"
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User', width: 200, renderCell:(params)=>{
            return(
                <div className="userList">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    <div style={{margin:"10px", fontWeight:"bold"}}>{params.row.username} </div>  
                </div>
            )
          }
        
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                      <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                      </Link>
                      <DeleteOutline 
                        style={{color:"red", cursor:"pointer"}}
                        onClick={()=>handleDelete(params.row.id)}
                        />
                    </>
                )
            }
          },
      
      
      ];
      
    
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
