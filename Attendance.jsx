import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Attendance() {

    const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		designation: '',
		team: '',
		department: '',
		served: '',
		reason: '',
		serviceattended: '',
		image: ''
	})
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("name", data.name);
		formdata.append("email", data.email);
		formdata.append("phone", data.phone);
		formdata.append("address", data.address);
		formdata.append("designation", data.designation);	
		formdata.append("team", data.team);
		formdata.append("department", data.department);
		formdata.append("served", data.served);
		formdata.append("reason", data.reason);
		formdata.append("serviceattended", data.serviceattended);
		formdata.append("image", data.image);
		axios.post('http://localhost:8081/attendance', formdata)
		.then(res => {
			navigate('/employeeLogin')
		})
		.catch(err => console.log(err));
	}

  return (
    <div>
        <div className='d-flex flex-column align-items-center pt-4 loginForm loginPage'>
			<h2>Clock In </h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit} >
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data, name: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => setData({...data, email: e.target.value})}/>
				</div>
				
			<div class="col-12">
					<label for="inputPhone" class="form-label">Phone</label>
					<input type="phone" class="form-control" id="inputPhone" placeholder='+234'
					 onChange={e => setData({...data, phone: e.target.value})}/>
			</div>

			<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
					onChange={e => setData({...data, address: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputDesignation" class="form-label">Designation</label>
					<input type="text" class="form-control" id="inputDesignation" placeholder="Team Head, HOD" autoComplete='off'
					onChange={e => setData({...data, designation: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputTeam" class="form-label">Team</label>
					<select defaultValue onChange={e => setData({...data, team: e.target.value})}>
						<option value="0">Select your team</option>
						<option value="Finance">Finance</option>
						<option value="General Service">General Service</option>
						<option value="Maturity">Maturity</option>
						<option value="Membership">Membership</option>
						<option value="Missions">Missions</option>
						<option value="Ministry">Ministry</option>
						<option value="NextGen">NextGen</option>
						<option value="Programs">Programms</option>
						<option value="Small Group">Small Group</option>
					</select>
				</div>

				<div class="col-12">
					<label for="inputDepartment" class="form-label">Department</label>
					<select defaultValue onChange={e => setData({...data, department: e.target.value})}>
						<option value="0">Kindly Pick Your Department</option>
						<option value="Finance">Finance</option>
						<option value="Prayer and Bible study">Prayer and Bible study</option>
						<option value="Spiritual Transformation">Spiritual Transformation</option>
						<option value="Membership">Membership</option>
						<option value="Missions">Missions</option>
						<option value="Ministry">Ministry</option>
						<option value="NextGen">NextGen</option>
						<option value="Programs">Programms</option>
						<option value="Small Group">Small Group</option>
					</select>
				</div>

				<div class="col-12">
					<label for="inputServed" class="form-label">Did you serve today</label>
					<input type="text" class="form-control" id="inputServed" placeholder='Yes/No' autoComplete='off'
					onChange={e => setData({...data, served: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputReason" class="form-label">Reason</label>
					<input type="text" class="form-control" id="inputReason" placeholder='If No Give reason' autoComplete='off'
					onChange={e => setData({...data, reason: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputServiceattended" class="form-label">Service Attended</label>
					<input type="text" class="form-control" id="inputServiceattended" placeholder='First/Second/Magneto' autoComplete='off'
					onChange={e => setData({...data, serviceattended: e.target.value})}/>
				</div>

			
			
				<div class="col-12 mb-3">
					<label class="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" class="form-control" id="inputGroupFile01"
					onChange={e => setData({...data, image: e.target.files[0]})}/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Attendance</button>
				</div>
			</form>
		</div>
    </div>
  )
}

export default Attendance