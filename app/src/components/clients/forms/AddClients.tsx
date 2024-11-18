import React, {useState} from "react";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { actPostClients } from "../../../slices/clients/ClientsSlice";
import { useNavigate } from "react-router-dom";

function CreateClient() {
    const initialFormData = {
        firstName: "",
        lastName: "",
        cin: "",
        email: "",
        phoneNumber: "",
        city: "",
        address: "",
        password: "",
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

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await dispatch(actPostClients(formData));
            setFormData(initialFormData);
            navigate("/backoffice/clients");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form className='mr-10' onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
          <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rabat" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
          <input type="tel" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
          <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Address" required onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="hourlyRate" className="block mb-2 text-sm font-medium text-gray-900">Hourly Rate</label>
          <input type="number" id="hourlyRate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required onChange={handleChange} />
        </div> */}
        {/* <div>
          <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900">Specialization</label>
          <input type="text" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Babysitter" required onChange={handleChange} />
        </div> */}
        <div>
          <label htmlFor="cin" className="block mb-2 text-sm font-medium text-gray-900">CIN</label>
          <input type="text" id="cin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="AB12345" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required onChange={handleChange} />
        </div>
        {/* <div className="flex items-start mb-6">
          <label htmlFor="backgroundCheckCompleted" className="mr-2 text-sm font-medium text-gray-900 ms-2">Background Check completed</label>
          <div className="flex items-center h-5">
            <input id="backgroundCheckCompleted" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" onChange={(e) =>
                                                                                                                                                                                              setFormData({
                                                                                                                                                                                              ...formData,
                                                                                                                                                                                              backgroundCheckCompleted: e.target.checked
                                                                                                                                                                                              })} />
          </div>
        </div> */}
      </div>
      <button type="submit" className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  );
}

export default CreateClient;