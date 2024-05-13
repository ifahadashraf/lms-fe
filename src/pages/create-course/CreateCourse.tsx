import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormField } from './FormField';
import { addCourse, updateCourse } from '../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateEmails } from '../../utils';

type FormValues = {
  name: string;
  description: string;
  schedule: string;
  enrolledStudents: string
};

const CreateCourse: React.FC = () => {
  const {state} = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormValues>({
    defaultValues: {
      ...state,
    }
  });

  const insertCourse = async (course: FormValues) => {
    if(validateEmails(course.enrolledStudents)) {
      const apiAction = !!state?._id ? updateCourse : addCourse;

      // console.log('apiAction', apiAction)

      addCourse({...course, enrolledStudents: []});
      await apiAction({
        ...course,
        enrolledStudents: course.enrolledStudents.split(','),
      })
      navigate('/');
    } else {
      setError('enrolledStudents', { message: 'Invalid emails'});
    }
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    insertCourse(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create New Course</h2>
        <form title="courseForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <FormField
              errors={errors}
              id="name"
              label="Course Name"
              placeholder="Enter course name"
              register={register}
            />
          </div>
          <div className="mb-4">
            <FormField
              errors={errors}
              id="schedule"
              label="Course Schedule"
              placeholder="i.e. Every wednesday at 8:30 AM"
              register={register}
            />
          </div>
          <div className="mb-4">
            <FormField
              errors={errors}
              id="description"
              label="Course Description"
              placeholder="Enter course description"
              register={register}
              type="textarea"
            />
          </div>
          <div className="mb-4">
            <FormField
              errors={errors}
              id="enrolledStudents"
              label="Enrolled Students"
              placeholder="Enter comma separated emails"
              register={register}
              type="textarea"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
