import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { actPutInterventions } from '../../../slices/intervention/ActIntervention';
import { useNavigate, useParams } from 'react-router-dom';

function EditIntervention() {

    const { id } = useParams();
    const initialFormData = {
        name: '',
        clientId: null ,
        professionalID:null,
        status: '',
    };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const intervention = useAppSelector((state) => {
      const interventions = state.interventions;
      const intervetion = interventions.records.find((intervetion) => intervetion._id === id);
      return intervetion ? intervetion : initialFormData; 
    });
    
    const [formData, setFormData] = useState(intervention || {});
  
  
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
          await dispatch(actPutInterventions(formData));
          navigate('/backoffice/interventions');
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

  return (
    <form className='mr-10' onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" value={formData.name || ''} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="clientId" className="block mb-2 text-sm font-medium text-gray-900">Client ID</label>
        <input type="text" id="clientId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" value={formData.clientId || ''} onChange={handleChange} />
      </div>
      
      <div>
        <label htmlFor="professionalID" className="block mb-2 text-sm font-medium text-gray-900">Professional ID</label>
        <input type="text" id="professionalID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" value={formData.professionalID || ''} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
        <input type="text" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" value={formData.status || ''} onChange={handleChange} />
      </div>
    </div>
    <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
  </form>
  )
}

export default EditIntervention