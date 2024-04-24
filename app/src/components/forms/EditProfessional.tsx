import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { actPutProfessionals, actGetProfessionalById } from '../../slices/professionals/ProfessionalsSlice';
import { useNavigate, useParams } from 'react-router-dom';

function EditProfessional() {
  const { id } = useParams();
  const initialFormData = {
    firstName: '',
    lastName: '',
    cin: null,
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
  const dispatch = useAppDispatch();
  const professional = useAppSelector((state) => {
    const professionals = state.professionals;
    const professional = professionals.records.find((prof) => prof._id === id);
    return professional ? professional : initialFormData; // Return initialFormData if professional is not found
  });
  // const professional = professionals.records.find((professional)=>{professional._id === id}); // Assuming you only fetch one professional by ID
  // console.log(professional);
  const [formData, setFormData] = useState(professional || {});


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData)
      await dispatch(actPutProfessionals(formData));
      navigate('/backoffice/professionals');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className='mr-10' onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" value={formData.firstName || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" value={formData.lastName || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cin" className="block mb-2 text-sm font-medium text-gray-900">CIN</label>
          <input type="text" id="cin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="AB12345" value={formData.cin || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" value={formData.email || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
          <input type="tel" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" value={formData.phoneNumber || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
          <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rabat" value={formData.city || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Address" value={formData.address || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900">Specialization</label>
          <input type="text" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Babysitter" value={formData.specialization || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="hourlyRate" className="block mb-2 text-sm font-medium text-gray-900">Hourly Rate</label>
          <input type="number" id="hourlyRate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" value={formData.hourlyRate || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900">Bio</label>
          <textarea id="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter bio" value={formData.bio || ''} onChange={handleChange}></textarea>
        </div>
        <div className="flex items-start mb-6">
          <label htmlFor="backgroundCheckCompleted" className="mr-2 text-sm font-medium text-gray-900 ms-2">Background Check completed</label>
          <div className="flex items-center h-5">
            <input id="backgroundCheckCompleted" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" checked={formData.backgroundCheckCompleted} onChange={(e) => setFormData({ ...formData, backgroundCheckCompleted: e.target.checked })} />
          </div>
        </div>
      </div>
      <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  );
}

export default EditProfessional;
