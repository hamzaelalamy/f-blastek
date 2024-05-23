import { useAppSelector, useAppDispatch } from '../../hooks/ReduxHooks';
import { actGetCategories } from '../../slices/categories/ActCategories';
import { useState, useEffect } from 'react';
import { Button } from '../../../@/components/ui/button';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '../../../@/components/ui/card';

export default function CreateOffer() {
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        skills: '',
        categoryId: '',
        location: '',
        salaryRange: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actGetCategories());
    }, [dispatch]);

    const categories = useAppSelector((state) => state.categories.records);
    const categoryOptions = categories.map((category) => (
        <option key={category._id} value={category._id}>
            {category.name}
        </option>
    ));

    return (
        <div className="container px-4 py-12 mx-auto md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <h1 className="mb-4 text-3xl font-bold">Post a Job Offer</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="job-title">
                                Job Title
                            </label>
                            <input
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                id="job-title"
                                name="title"
                                placeholder="Enter job title"
                                type="text"
                                value={jobData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="job-description">
                                Job Description
                            </label>
                            <textarea
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                id="job-description"
                                name="description"
                                placeholder="Enter job description"
                                rows={3}
                                value={jobData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="required-skills">
                                Required Skills
                            </label>
                            <input
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                id="required-skills"
                                name="skills"
                                placeholder="Enter required skills (separated by commas)"
                                type="text"
                                value={jobData.skills}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="category">
                                Service
                            </label>
                            <select
                                id="category"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                name="categoryId"
                                value={jobData.categoryId}
                                onChange={handleInputChange}
                            >
                                <option value="">Select a category</option>
                                {categoryOptions}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="location">
                                Location
                            </label>
                            <input
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                id="location"
                                name="location"
                                placeholder="Enter job location"
                                type="text"
                                value={jobData.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="salary-range">
                                Offered Hourly Salary Range
                            </label>
                            <input
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                id="salary-range"
                                name="salaryRange"
                                placeholder="Enter proposed hourly salary range (e.g., 50MAD - 70MAD)"
                                type="text"
                                value={jobData.salaryRange}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Button className="w-full" type="submit">
                                Post Job Offer
                            </Button>
                        </div>
                    </form>
                </div>
                <div>
                    <h1 className="mb-4 text-3xl font-bold">Your Job Offer</h1>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <p className="text-xl font-medium text-gray-700 dark:text-gray-300">Job Title</p>
                                <CardTitle>{jobData.title}</CardTitle><br />
                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Description</p>
                                <CardDescription>{jobData.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Required Skills:</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{jobData.skills}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {jobData.categoryId ? categories.find(category => category._id === jobData.categoryId).name : 'No category selected'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Location:</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{jobData.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Offered Salary Range:</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{jobData.salaryRange}</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                {/* <Button variant="primary">Apply Now</Button> */}
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
