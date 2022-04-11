import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const LeaveDetail = () => {
  const [leaveList, setleaveList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:5000/leaves").then(res => {
          console.log(res.data.data)
          setleaveList(res.data.data)
      })

  }
  useEffect(() => {
      getData()
  }, [])
  
  


  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div className="col-lg-14 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"> Leave Details</h4>
      <p className="card-description">
        {/* Add class <code>.table-striped</code> */}
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
            <th>
                #
              </th>
              <th>
                Leave Reason
              </th>
              <th>
                Leave From
              </th>
              <th>
                Leave To
              </th>
              <th>
                user
              </th>
              <th>
               Accept Reject
              </th>
            </tr>
          </thead>
          <tbody>
          {leaveList.map((leave,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                            {leave.leaveReason}
                          </td>
                          <td>
                          {leave.leaveFrom}  
                          </td>
                          <td>
                          {leave.leaveTo}
                          </td>
                          <td>
                          {leave.user}
                          </td>
                          <td>
                          {leave.acceptReject}
                          </td>
                          <td>
                                        <Link  to={`/delete/${leave._id}`} className = "btn btn-danger">DELETE</Link>
                                        <Link  to={`/update/${leave._id}`} className  = "btn btn-primary">UPDATE</Link>
                                    </td>
                        </tr>

                        )
                      })}
       
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}
