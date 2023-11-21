import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
	const [data, setData] = useState({
		name: '',
		email: '',
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
	
	const {id} = useParams();

	useEffect(()=> {
		axios.get('http://localhost:8081/get/'+id)
		.then(res => {
			setData({...data, name: res.data.Result[0].name,
				email:res.data.Result[0].email,
				phone: res.data.Result[0].phone,
				address: res.data.Result[0].address,
				designation:  res.data.Result[0].designation,
				team: res.data.Result[0].team,
				department: res.data.Result[0].department,
				nameOfNextOfKin: res.data.Result[0].nameOfNextOfKin,
				contactofnextofkin: res.data.Result[0].contactofnextofkin,
				addressofnextofkin: res.data.Result[0].addressofnextofkin,
				
			})
		})
		.catch(err =>console.log(err));
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put('http://localhost:8081/update/', +id, data)
		.then(res => {
			if(res.data.Status === "Success") {
				navigate('/employee')
			}
		})
		.catch(err => console.log(err));
	}
  return (
    <div className='d-flex flex-column align-items-center pt-4 addEmployee'>
			<h2>Update Employee</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
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
					<label for="inputNameOfNextOfKin" class="form-label">Name Of Next Of Kin</label>
					<input type="text" class="form-control" id="inputNameOfNextOfKin" placeholder='nameOfNextOfKin' autoComplete='off'
					onChange={e => setData({...data, nameOfNextOfKin: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputContactofnextofkin" class="form-label">contact of next of kin</label>
					<input type="text" class="form-control" id="inputContactofnextofkin" placeholder='contactofnextofkin' autoComplete='off'
					onChange={e => setData({...data, contactofnextofkin: e.target.value})}/>
				</div>

				<div class="col-12">
					<label for="inputAddressofnextofkin" class="form-label">Address of next of kin</label>
					<input type="text" class="form-control" id="inputAddressofnextofkin" placeholder='addressofnextofkin' autoComplete='off'
					onChange={e => setData({...data, addressofnextofkin: e.target.value})}/>
				</div>	
			
				
				<div>
				<button type="submit" class="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
  )
}

export default EditEmployee
					
			