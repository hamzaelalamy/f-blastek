import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { actPutServices, actGetService } from "../../../slices/services/ServicesSlice";
import { actGetCategories } from "../../../slices/categories/CategoriesSlice";

function EditService() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const initialFormData = {
        _id:"",
        name: "",
        description: "",
        categoryId: "",
    };
    const [formData, setFormData] = useState<Service>(initialFormData);
    interface Service{
        _id: string;
        name: string;
        description: string;
        categoryId: string;
    }
    const service = useAppSelector((state) => {
        const services = state.services;
        const service = services.records.find((service) => service._id === id);
        return service ? service : initialFormData;
    });

  return (
    <div>

    </div>
  )
}

export default EditService