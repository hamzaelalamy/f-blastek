import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { actPutAdmins } from '../../../slices/admin/ActAdmin';
import { useNavigate, useParams } from 'react-router-dom';

function EditAdmin() {

    const { id } = useParams();
    const initialFormData = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const admin = useAppSelector((state) => {
      const admins = state.admins;
      const admin = admins.records.find((admin) => admin._id === id);
      return admin ? admin : initialFormData; 
    });
    
    const [formData, setFormData] = useState(admin || {});
  
  
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
        await dispatch(actPutAdmins(formData));
        navigate('/backoffice/admins');
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
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" value={formData.email || ''} onChange={handleChange} />
      </div>
    </div>
    <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
  </form>
  )
}

export default EditAdmin