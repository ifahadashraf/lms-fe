import React from 'react';

interface FormFieldProps {
  label: string,
  id: string,
  register: any,
  errors: any,
  placeholder: string,
  type?: "text" | "textarea",
}

export const FormField = ({
  label,
  id,
  register,
  errors,
  placeholder,
  type = "text"
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {
        type === "text" ? (
          <input
            type="text"
            id={id}
            {...register(id, { required: `${label} is required` })}
            className="mt-1 p-2 w-full border rounded shadow-sm"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            id={id}
            {...register(id, { required: `${label} is required` })}
            className="mt-1 p-2 w-full border rounded shadow-sm"
            placeholder={placeholder}
          />
        )
      }
      {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
    </div>
  )
}