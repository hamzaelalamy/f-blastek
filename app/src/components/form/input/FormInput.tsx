import React from "react";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type FormInputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    placeholder: string;
    error?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    formText?: string;
    success?: string;
}

function FormInput<TFieldValues extends FieldValues>({ label, type = "text", register, name, error, onBlur, formText, success }: FormInputProps<TFieldValues>) {
    const obBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
            onBlur(e);
            register(name).onBlur(e);
        } else {
            register(name).onBlur(e);
        }
    }
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="block mb-2 text-sm">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={label}
                    {...register(name)}
                    onBlur={obBlurHandler}
                    className="block w-full px-4 py-3 text-sm bg-gray-100 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
                {error && (
                    <div className="absolute right-0 pr-3 mt-1 text-sm text-red-600 top-full">
                        {error}
                    </div>
                )}
                {formText && (
                    <div className="absolute right-0 pr-3 mt-1 text-sm text-red-600 top-full">
                        {formText}
                    </div>
                )}
                {success && (
                    <div className="absolute right-0 pr-3 mt-1 text-sm text-green-600 top-full">
                        {success}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormInput;
