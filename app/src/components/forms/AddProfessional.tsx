import { useState } from 'react';
import { useAppDispatch, } from '../../hooks/ReduxHooks';
import { actPostProfessionals } from '../../slices/professionals/ProfessionalsSlice';
import { useNavigate } from 'react-router-dom';


function CreateProfessional() {
    const initialFormData = {
        firstName: '',
        lastName: '',
        cin: '',
        email: '',
        phoneNumber: '',
        city: '',
        address: '',
        specialization: '',
        hourlyRate: '',
        bio: '',
        backgroundCheckCompleted: false,
        availability: {
          days: [],
          timeslots: []
        },
        password: ''
      };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const dispatch = useAppDispatch();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(actPostProfessionals(formData));
      setFormData(initialFormData);
      navigate('/backoffice/professionals');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className='pb-40 pl-40 pr-40 ml-40 mr-40 '>
      <div className="flex flex-col p-4 mt-4 bg-gray-900 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-white">Create Professional</h2>
        {/* First Name */}
        <div className="mt-4">
          <label className="text-white" htmlFor="firstName">First Name</label>
          <input
            placeholder="First name"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="mt-4">
          <label className="text-white" htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last name"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* CIN */}
        <div className="mt-4">
          <label className="text-white" htmlFor="cin">CIN</label>
          <input
            placeholder="CIN"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="cin"
            value={formData.cin}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="mt-4">
          <label className="text-white" htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Phone Number */}
        <div className="mt-4">
          <label className="text-white" htmlFor="phoneNumber">Phone Number</label>
          <input
            placeholder="Phone number"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {/* City */}
        <div className="mt-4">
          <label className="text-white" htmlFor="city">City</label>
          <input
            placeholder="City"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        {/* Address */}
        <div className="mt-4">
          <label className="text-white" htmlFor="address">Address</label>
          <textarea
            placeholder="Address"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            id="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Specialization */}
        <div className="mt-4">
          <label className="text-white" htmlFor="specialization">Specialization</label>
          <input
            placeholder="Specialization"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="text"
            id="specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
        </div>
        {/* Hourly Rate */}
        <div className="mt-4">
          <label className="text-white" htmlFor="hourlyRate">Hourly Rate</label>
          <input
            placeholder="Hourly rate"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="number"
            id="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
          />
        </div>
        {/* Bio */}
        <div className="mt-4">
          <label className="text-white" htmlFor="bio">Bio</label>
          <textarea
            placeholder="Bio"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Background Check Completed */}
        <div className="mt-4">
          <label className="text-white" htmlFor="backgroundCheckCompleted">Background Check Completed</label>
          <input
            className="ml-2"
            type="checkbox"
            id="backgroundCheckCompleted"
            checked={formData.backgroundCheckCompleted}
            onChange={(e) =>
                setFormData({
                ...formData,
                backgroundCheckCompleted: e.target.checked
                })
            }
            />
        </div>
        {/* Password */}
        <div className="mt-4">
          <label className="text-white" htmlFor="password">Password</label>
          <input
            placeholder="Password"
            className="w-full px-2 py-1 text-white bg-gray-800 border-gray-700 rounded-md"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Submit button */}
        <div className="flex justify-end mt-4">
          <button className="px-4 py-1 text-black transition-all duration-200 bg-white rounded-md hover:bg-blue-500 hover:text-white" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default CreateProfessional;
