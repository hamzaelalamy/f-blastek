import { Avatar, AvatarImage, AvatarFallback } from "../../../../../@/components/ui/avatar"
import { Label } from "../../../../../@/components/ui/label"
import { Input } from "../../../../../@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "../../../../../@/components/ui/popover"
import { Button } from "../../../../../@/components/ui/button"
import { Calendar } from "../../../../../@/components/ui/calendar"
import { Textarea } from "../../../../../@/components/ui/textarea"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../../../@/components/ui/table"
// import { Checkbox } from "../../../../../@/components/ui/checkbox"
import UploadWidget from "../../../common/cloudinaryUpload";
import { useAppDispatch, useAppSelector } from '../../../../hooks/ReduxHooks';
import { actPutProfessionals, actGetProfessionalById } from '../../../../slices/professionals/ProfessionalsSlice';
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


export default function ProfileManagement() {
    const saved = localStorage.getItem("professional");
    const initialValue = JSON.parse(saved);
    // console.log("token is :", initialValue.token);
    const decoded = jwtDecode(initialValue.token);
    // console.log(decoded.id);

    const dispatch = useAppDispatch();
    const { loading, error, records, record } = useAppSelector(
        (state) => state.professionals
    );

    type FormData = {
        firstName: string;
        lastName: string;
        cin: string;
        gender: string;
        birthDay: string;
        email: string;
        phoneNumber: string;
        city: string;
        address: string;
        geolocation: string;
        cinDocument: string;
        photo: string;
        specialization: string;
        hourlyRate: number;
        bio: string;
        experiences: string;
        education: string;
        availability: string;
    }

    const [formData, setFormData] = useState<FormData>({});
    useEffect(() => {
        dispatch(actGetProfessionalById(decoded.id));
    }, []);

    useEffect(() => {
        if (record) {
            setFormData(record);
        }
    }, [record]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(formData)
            await dispatch(actPutProfessionals(formData));
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="w-full max-w-4xl py-8 mx-auto md:py-12">
            <header className="flex items-center gap-4 mb-8">
                <Avatar className="w-12 h-12">
                    <img src="/placeholder.svg" alt="@shadcn" />
                    <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                    <div className="text-lg font-semibold">Jared Palmer</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</div>
                </div>
            </header>
            <form className="grid gap-8" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>


                    <div className="grid gap-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select id="gender" value={formData.gender} onChange={handleChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="birthDate">Birth Date</Label>
                        <Input id="birthDate" type="date" value={formData.birthDay ? formData.birthDay.split("T")[0] : ''} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="cin">CIN (National ID)</Label>
                        <Input id="cin" value={formData.cin} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="geolocation">Geolocation</Label>
                        <Input id="geolocation" value={formData.geolocation} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="cinDocument">CIN Document</Label>
                        <UploadWidget />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="photo">Photo</Label>
                        <UploadWidget />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="specialization">Specialization</Label>
                        <Input id="specialization" value={formData.specialization} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="hourlyRate">Hourly Rate</Label>
                        <Input id="hourlyRate" type="number" value={formData.hourlyRate} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" value={formData.bio} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="experiences">Experiences</Label>
                        <Textarea id="experiences" value={formData.experiences} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="education">Education</Label>
                        <Textarea id="education" value={formData.education} onChange={handleChange} />
                    </div>
                    <div className="grid gap-4">
                        {/* <Label htmlFor="availability">Availability</Label> */}
                        {/* <div className="overflow-hidden border rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Day</TableHead>
                                        <TableHead className="w-[150px]">Start Time</TableHead>
                                        <TableHead className="w-[150px]">End Time</TableHead>
                                        <TableHead className="w-[50px]">Available</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Monday</TableCell>
                                        <TableCell>
                                            <Input id="monday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="monday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="monday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tuesday</TableCell>
                                        <TableCell>
                                            <Input id="tuesday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="tuesday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="tuesday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Wednesday</TableCell>
                                        <TableCell>
                                            <Input id="wednesday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="wednesday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="wednesday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Thursday</TableCell>
                                        <TableCell>
                                            <Input id="thursday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="thursday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="thursday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Friday</TableCell>
                                        <TableCell>
                                            <Input id="friday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="friday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="friday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Saturday</TableCell>
                                        <TableCell>
                                            <Input id="saturday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="saturday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="saturday-available" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Sunday</TableCell>
                                        <TableCell>
                                            <Input id="sunday-start" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input id="sunday-end" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox id="sunday-available" />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div> */}
                    </div>
                    {/* <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div> */}
                </div>
                <div className="flex justify-end">
                    <Button type="submit" className="ml-auto">
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    )
}

function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}
