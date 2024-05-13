import axios from 'axios';
import { Course } from '../dto';

const BASE_URL = 'http://localhost:8080';

export const API_PATH = {
  COURSES: `${BASE_URL}/courses`
}

export const getAllCourses = async () => {
  return axios.get(`${API_PATH.COURSES}`).then(response => response.data)
}

export const addCourse = async (course: Course) => {
  return axios.post(`${API_PATH.COURSES}`, {...course}).then(response => response.data)
}

export const updateCourse = async (course: Course) => {
  return axios.put(`${API_PATH.COURSES}`, {...course}).then(response => response.data)
}