import { fireEvent, getByPlaceholderText, getByText, render, screen } from '@testing-library/react';
import App from '../App';
// https://testing-library.com/docs/react-testing-library/cheatsheet


beforeEach(() => {
	render(<App />)
})

test('should display landing page', () => {
	const linkElement = screen.getByText(/Play now/i)
	expect(linkElement).toBeInTheDocument()
})

test('should switch to login page', async () => {
	fireEvent.click(screen.getByText(/Login/i))
	const loginHeadline = await screen.findByText(/Welcome back/i)
	expect(loginHeadline).toHaveClass("fst-italic")
})

test('should fail login', async () => {
	// Enters data into input field
	fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'speedrun.io' } })
	fireEvent.change(screen.getByPlaceholderText(/Password.../i), { target: { value: '1234' } })

	fireEvent.click(screen.getByText(/Sign in/i))
	const errorMessage = await screen.findByText(/Wrong username or password!/i)
	expect(errorMessage).toHaveClass("invalid-feedback")
})