import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../api/api';
import { Course } from '../dto';
import { useNavigate } from 'react-router-dom';

const Courses: React.FC = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState<Course[]>();

  const fetchCourses = async () => {
    const data = await getAllCourses();
    setCourses(data);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-2/3">
        <div className="flex">
          <h2 className="text-2xl font-semibold mb-4 mr-4 flex-1">Courses</h2>
          <div className="flex-4 justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => navigate('/create')}
            >
              Add Course
            </button>
          </div>
        </div>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">#</th>
            <th scope="col" className="px-6 py-4">Name</th>
            <th scope="col" className="px-6 py-4">Desc</th>
            <th scope="col" className="px-6 py-4">Enrollments</th>
            <th scope="col" className="px-6 py-4">Actions</th>
          </tr>
          </thead>
          {
            courses?.map((course, index) => (
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                <td className="whitespace-nowrap px-6 py-4">{course.name}</td>
                <td className="whitespace-nowrap px-6 py-4">{course.description}</td>
                <td className="whitespace-nowrap px-6 py-4">{course.enrolledStudents.length}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={() => navigate('/create', {state: {...course}})}
                  >
                    Enroll Students
                  </button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Courses;
