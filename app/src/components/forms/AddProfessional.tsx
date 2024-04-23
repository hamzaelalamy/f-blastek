import { useState } from 'react';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { actPostProfessionals } from '../../slices/professionals/ProfessionalsSlice';
import { useNavigate } from 'react-router-dom';

function CreateProfessional() {
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
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState(initialFormData);

  // const handleChange = (e:React.) => {
  //   const { id, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [id]: value
  //   });
  // };

  // const dispatch = useAppDispatch();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await dispatch(actPostProfessionals(formData));
  //     setFormData(initialFormData);
  //     navigate('/backoffice/professionals');
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <form className='mr-10'>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
          <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rabat" required />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
          <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="address" required />
        </div>
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Hourly Rate</label>
          <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900">Specialization</label>
        <input type="specialization" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Babysitting" required />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
      </div>
      <div className="flex items-start mb-6">
        <label htmlFor="remember" className="mr-2 text-sm font-medium text-gray-900 ms-2">Background Check completed </label>
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
        </div>
      </div>
      <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  );
}

export default CreateProfessional;
