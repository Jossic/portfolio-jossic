/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import About from '@pages/about';

describe('About page', () => {
	it('Have a presentation', () => {
		render(<About />);
		expect(
			screen.getByRole('heading', { name: 'A propos de moi' })
		).toBeInTheDocument();
	});
});
