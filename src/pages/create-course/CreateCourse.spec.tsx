import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateCourse from './CreateCourse';
describe('CreateCourse component', () => {
  const mockUseForm = jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: { errors: {} },
    setError: jest.fn(),
  }));

  jest.mock('react-hook-form', () => ({
    useForm: mockUseForm,
  }))

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      state: {},
    }),
    useNavigate: jest.fn(),
  }))

  it('renders the form with initial values', async () => {
    const screen = render(
      <BrowserRouter>
        <CreateCourse />
      </BrowserRouter>
    );

    expect(screen.getByText('Create New Course')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter course name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('i.e. Every wednesday at 8:30 AM')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter course description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter comma separated emails')).toBeInTheDocument();
  });
});