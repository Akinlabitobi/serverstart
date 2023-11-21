import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
		address: '',
		designation: '',
		team: '',
		department: '',
		nameOfNextOfKin: '',
		contactofnextofkin: '',
		addressofnextofkin: '',
		image: ''
	})
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("name", data.name);
		formdata.append("email", data.email);
		formdata.append("password", data.password);
		formdata.append("phone", data.phone);
		formdata.append("designation", data.designation);	
		formdata.append("team", data.team);
		formdata.append("department", data.department);
		formdata.append("address", data.address);
		formdata.append("nameOfNextOfKin", data.nameOfNextOfKin);
		formdata.append("contactofnextofkin", data.contactofnextofkin);
		formdata.append("addressofnextofkin", data.addressofnextofkin);
		formdata.append("image", data.image);
		axios.post('http://localhost:8081/create', formdata)
		.then(res => {
			navigate('/employee')
		})
		.catch(err => console.log(err));
	}
	return (
		<div className='d-flex flex-column align-items-center pt-4 loginForm loginPage'>
			<h2>Add Team Members</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
			<div class="col-12 addEmployeeId">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data, name: e.target.value})}/>
				</div>
				<div class="col-12 addEmployeeId">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => setData({...data, email: e.target.value})}/>
				</div>
				<div class="col-12 addEmployeeId">
					<label for="inputPassword4" class="form-label">Password</label>
					<input type="password" class="form-control" id="inputPassword4" placeholder='Enter Password'
					 onChange={e => setData({...data, password: e.target.value})}/>
			</div>
			<div class="col-12 addEmployeeId">
					<label for="inputPhone" class="form-label">Phone</label>
					<input type="phone" class="form-control" id="inputPhone" placeholder='+234'
					 onChange={e => setData({...data, phone: e.target.value})}/>
			</div>

			<div class="col-12 addEmployeeId">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
					onChange={e => setData({...data, address: e.target.value})}/>
				</div>

				<div class="col-12 addEmployeeId">
					<label for="inputDesignation" class="form-label">Designation</label>
					<select defaultValue onChange={e => setData({...data, designation: e.target.value})}>
						<option value="0">Select your Designation</option>
						<option value="Campus Pastor">Campus Pastor</option>
						<option value="Assistance Campus Pastor">Assistance Campus Pastor</option>
						<option value="Campus Leader">Campus Leader</option>
						<option value="Team Heads">Team Heads</option>
						<option value="Sub Team Heads"> Sub Team Heads</option>
						<option value="HOD">HOD</option>
						<option value="District Pastors">District Pastors</option>
						<option value="Community Leaders">Community Leaders</option>
						<option value="Zonal Leaders">Zonal Leaders</option>
						<option value="Cell Leader">Cell Leader</option>
						<option value="Assistant HOD">Assistant HOD</option>
					</select>
				</div>

				<div class="col-12 addEmployeeId">
					<label for="inputTeam" class="form-label">Team</label>
					<select defaultValue onChange={e => setData({...data, team: e.target.value})}>
						<option value="0">Select your team</option>
						<option value="Pastoral">Pastoral</option>
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

				<div class="col-12 addEmployeeId">
					<label for="inputDepartment" class="form-label">Department</label>
					<select defaultValue onChange={e => setData({...data, department: e.target.value})}>
						<option value="0">Kindly Pick Your Department</option>
						<option value="Pastoral">Pastoral</option>
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

				<div class="col-12 addEmployeeId">
					<label for="inputNameOfNextOfKin" class="form-label">Name Of Next Of Kin</label>
					<input type="text" class="form-control" id="inputNameOfNextOfKin" placeholder='nameOfNextOfKin' autoComplete='off'
					onChange={e => setData({...data, nameOfNextOfKin: e.target.value})}/>
				</div>

				<div class="col-12 addEmployeeId">
					<label for="inputContactofnextofkin" class="form-label">contact of next of kin</label>
					<input type="text" class="form-control" id="inputContactofnextofkin" placeholder='contactofnextofkin' autoComplete='off'
					onChange={e => setData({...data, contactofnextofkin: e.target.value})}/>
				</div>

				<div class="col-12 addEmployeeId">
					<label for="inputAddressofnextofkin" class="form-label">Address of next of kin</label>
					<input type="text" class="form-control" id="inputAddressofnextofkin" placeholder='addressofnextofkin' autoComplete='off'
					onChange={e => setData({...data, addressofnextofkin: e.target.value})}/>
				</div>	
			
				<div class="col-12 mb-3 addEmployeeId">
					<label class="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" class="form-control" id="inputGroupFile01"
					onChange={e => setData({...data, image: e.target.files[0]})}/>
				</div>
				<div class="col-12 addEmployeeId">
					<button type="submit" class="btn btn-primary">Create</button>
				</div>
			</form>
		</div>

	)
}

export default AddEmployee