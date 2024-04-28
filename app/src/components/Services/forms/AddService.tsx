import React, { useState } from 'react';

interface Service {
    name: string;
    description: string;
    price: number;
}

const AddService: React.FC = () => {
    const [service, setService] = useState<Service>({
        name: '',
        description: '',
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setService(prevService => ({
            ...prevService,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your logic to handle the form submission here
        console.log(service);
    };

    return (
        <div>
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={service.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={service.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={service.price} onChange={handleChange} />
                </div>
                <button type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;