import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8081/getEmployee')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        const id = res.data.id;
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3 primary me-2 employee'>
      <div className='d-flex justify-content-center mt-2 p-3 rounded w-25 border'>
        <h3>Workers List</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Add Team</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Phone</th>
             <th>Address</th>
             <th>Designation</th>
             <th>Team</th>
             <th>Department</th>
             <th>Name of Next of Kin</th>
             <th>Contact of Next of Kin</th>
             <th>Address of Next of kin</th>
             <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{
                    <img src={`http://localhost:8081/images/`+employee.image} alt="" className='employee_image'/>
                    }</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.team}</td>
                  <td>{employee.department}</td>
                  <td>{employee.nameOfNextOfKin}</td>
                  <td>{employee.contactofnextofkin}</td>
                  <td>{employee.addressofnextofkin}</td>
                   <td>
                    <Link to={`/employeeEdit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee