import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { actPostServices } from '../../../slices/services/ServicesSlice';
import { actGetCategories } from '../../../slices/categories/CategoriesSlice';
import { useNavigate } from 'react-router-dom';

interface Service {
  name: string;
  description: string;
  categoryId: string;
}

const CreateService: React.FC = () => {
  const [service, setService] = useState<Service>({
    name: '',
    description: '',
    categoryId: '',
  });
  const navigate = useNavigate();
  

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setService(prevService => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actPostServices(service));
  };

  const categories = useAppSelector((state) => state.categories.records);

  const categoryOptions = categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ));

  return (
    <form className="mr-10" onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Service Name"
            name="name"
            value={service.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <select
            id="categoryId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="categoryId"
            value={service.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categoryOptions}
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Service Description"
            name="description"
            value={service.description}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-[#20B486] hover:bg-[#198f6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
      <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-1' onClick={()=>navigate("/backoffice/services")} >Cancel</button>
    </form>
  );
};

export default CreateService;
