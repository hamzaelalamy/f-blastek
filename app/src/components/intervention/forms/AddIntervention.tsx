import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/ReduxHooks';
import { actPostInterventions } from '../../../slices/intervention/ActIntervention';
import { useNavigate } from 'react-router-dom';

function AddIntervention() {

    const initialFormData = {
        name: '',
        clientId: null ,
        professionalID:null,
        status: '',
      };
      const navigate = useNavigate();
      const [formData, setFormData] = useState(initialFormData);
    
      const handleChange = (e ) => {
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
          await dispatch(actPostInterventions(formData));
          setFormData(initialFormData);
          navigate('/backoffice/interventions');
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

  return (
    <form className='mr-10' onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Client Id</label>
        <input type="number" id="clientId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required onChange={handleChange} />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Professional ID</label>
        <input type='number' id="professionalID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
        <input type="text" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required onChange={handleChange} />
      </div>
     
    </div>
    <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
  </form>
  )
}

export default AddIntervention