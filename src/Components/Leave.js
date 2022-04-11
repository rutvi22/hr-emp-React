import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AddLeave = () => {                          /*Leave before then Add leave*/
  const [leaveReason, setleaveReason] = useState('')
  const [leaveFrom, setleaveFrom] = useState('')
  const [leaveTo, setleaveTo] = useState('')
  const [user, setuser] = useState('')
  const [acceptReject, setacceptReject] = useState('')
 


  const submit =(e)=>{
    e.preventDefault()
    console.log("ii",e.target.value)
  
    var data = {
      leaveReason:leaveReason,
      leaveFrom:leaveFrom,
      leaveTo:leaveTo,
      user:user,
      acceptReject:acceptReject,        
    }
    axios.post('http://localhost:2000/leaves',data).then(res=>{
        console.log(res.data)
    })
}
return (
  <div className='content-wrapper'>
  <div className='row'>
  <div class="col-lg-12 stretch-card">
  <div className="col-md-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Leaves</h4>
      <p className="card-description">
        
      </p>
      <form className="forms-sample" onSubmit={submit}>
        <div className="form-group row">
          <label htmlFor="exampleInputUsername2" name="title" className="col-sm-2 col-form-label">Leave Reason</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="leaveReason" onChange={(e)=>setleaveReason(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" name="date" className="col-sm-2 col-form-label">Leave from</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="leaveFrom" onChange={(e)=>setleaveFrom(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" name="date" className="col-sm-2 col-form-label">Leave to</label>
          <div className="col-sm-9">
            <input type="date" className="form-control" name="leaveTo" onChange={(e)=>setleaveTo(e.target.value)} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputPassword2" name="time" className="col-sm-2 col-form-label">User</label>
          <div className="col-sm-9">
            <input type="time" className="form-control" name="user" onChange={(e)=>setuser(e.target.value)} placeholder="12:12:pm" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" name="venue" className="col-sm-2 col-form-label">Accept/Reject</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" name="acceptReject" onChange={(e)=>setacceptReject(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="button2">Submit</button>
         </form>
    </div>
  </div>
  </div>
  </div>
  </div>
</div>

)
}
