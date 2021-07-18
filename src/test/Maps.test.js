import { fireEvent, getByPlaceholderText, getByText, render, screen } from '@testing-library/react';
import App from '../App';
// https://testing-library.com/docs/react-testing-library/cheatsheet

beforeEach(() => {
    // Renders application
	render(<App />)
})

test('should display landing page', () => {
	const linkElement = screen.getByText(/Play now/i)
	expect(linkElement).toBeInTheDocument()
})

test('should switch to maps page', async () => {
	fireEvent.click(screen.getAllByText(/Maps/i)[0])
	const mapsHeadline = await screen.findByText(/All Maps/i)
	expect(mapsHeadline).toBeInTheDocument()
})

test('should display search bar', async () => {
	const searchBar = await screen.getByPlaceholderText(/Search mapname, tags.../i)
	expect(searchBar).toBeInTheDocument()
})

test('should display filter', async () => {
	const filterSidebar = await screen.getByLabelText(/Page navigation/i)
	expect(filterSidebar).toBeInTheDocument()
})
