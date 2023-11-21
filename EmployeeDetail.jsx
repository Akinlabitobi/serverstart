import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeDetail() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/get/'+id)
        .then(res => setEmployee(res.data.Result[0]))
        .catch(err => console.log(err));
    })
    const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
  return (
    <div className=' '>
        <div className='d-flex justify-content-center flex-column align-items-center mt-2 loginPage'>
            <img src={`http://localhost:8081/images/`+employee.image} alt="" className='empImg'/>
            <div className='d-flex align-items-center flex-column mt-5 loginForm'>
                <h3>Name: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>phone: {employee.phone}</h3>
                <h3>Address: {employee.address}</h3>
                <h3>Designation: {employee.designation}</h3> 
                <h3>Team: {employee.team}</h3> 
                <h3>Department: {employee.department}</h3> 
                <h3>Contactofnextofkin: {employee.contactofnextofkin}</h3>
                <h3>Addressofnextofkin: {employee.addressofnextofkin}</h3>   
                
                
            </div>
            <div>
                <button className='btn btn-primary me-2' onClick={e => navigate('/Attendance')}>Attendance</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}
<button className='btn btn-primary me-2'>Edit</button>
    
export default EmployeeDetail