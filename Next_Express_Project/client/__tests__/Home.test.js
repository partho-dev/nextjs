// __tests__/Home.test.js
import axios from 'axios'; // Add this import
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page'; // Adjust the path if necessary

jest.mock('axios'); // Mock axios globally

describe('Home Page', () => {
  it('renders the heading and form', () => {
    render(<Home />);

    // Check if the heading is rendered correctly
    const heading = screen.getByRole('heading', {
      name: /I am from NextJs - Coming from \/api\/v1/i,
    });
    expect(heading).toBeInTheDocument();

    // Check if the message from the backend is rendered
    expect(screen.getByText('...Loading')).toBeInTheDocument();

    // Check for the presence of user form elements
    expect(screen.getByPlaceholderText('John')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('$300')).toBeInTheDocument();
    expect(screen.getByText('Create User')).toBeInTheDocument();

    // Check for the presence of product form elements
    expect(screen.getByPlaceholderText('Product Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Product price, eg:1000')).toBeInTheDocument();
    expect(screen.getByText('Create Products')).toBeInTheDocument();
  });

  it('handles form submissions correctly', async () => {
    // Mock the API responses
    axios.post.mockResolvedValue({ data: { Name: 'John Doe', Profit: '300' } });

    render(<Home />);

    // Fill and submit the user form
    fireEvent.change(screen.getByPlaceholderText('John'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('$300'), { target: { value: '300' } });
    fireEvent.click(screen.getByText('Create User'));

    // Check for success message or state update
    expect(await screen.findByText('User created: John Doe with a profit of 300')).toBeInTheDocument();

    // Mock product response and repeat for product form
    axios.post.mockResolvedValue({ data: {} });

    fireEvent.change(screen.getByPlaceholderText('Product Name'), { target: { value: 'iPhone' } });
    fireEvent.change(screen.getByPlaceholderText('Product price, eg:1000'), { target: { value: '1000' } });
    fireEvent.click(screen.getByText('Create Products'));
  });
});
