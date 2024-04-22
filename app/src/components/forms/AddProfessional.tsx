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
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
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
        <section className="max-w-4xl p-3 ml-auto mr-auto text-black bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold capitalize">Account settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              id="passwordConfirmation"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.passwordConfirmation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              type="color"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="city">Select City</label>
            <select
              id="city"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="Surabaya">Surabaya</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bandung">Bandung</option>
            </select>
          </div>
          <div>
            <label htmlFor="range">Range</label>
            <input
              id="range"
              type="range"
              className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.range}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="textarea">Text Area</label>
            <textarea
              id="textarea"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            //   value={formData.textarea}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </section>      );
}

export default CreateProfessional;
