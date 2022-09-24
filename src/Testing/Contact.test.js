import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Contact from '..//Components/Contact/Contact';
import { MemoryRouter } from "react-router-dom";

describe("Contact component", () => {
    it('renders Contact correctly', () => {
        render(<MemoryRouter>
            <Contact />
        </MemoryRouter>)
    });

    it('checks for logos', () => {
        render(<MemoryRouter>
            <Contact />
        </MemoryRouter>)

        const logos = screen.getAllByRole('img');
        expect(logos.length).toBe(5);
        
        const github = screen.getByAltText('github');
        expect(github).toBeInTheDocument();
        
        const fb = screen.getByAltText('facebook');
        expect(fb).toBeInTheDocument();

        const instagram = screen.getByAltText('instagram');
        expect(instagram).toBeInTheDocument();

        const twitter = screen.getByAltText('twitter');
        expect(twitter).toBeInTheDocument();

        const pinterest = screen.getByAltText('pinterest');
        expect(pinterest).toBeInTheDocument();
    });

    it('checkes for text', () => {
        render(<MemoryRouter>
            <Contact />
        </MemoryRouter>)

        const storeName = screen.getByText(/shoe store/i)
        expect(storeName).toBeInTheDocument();

        const contactText = screen.getByText(/real street/i)
        expect(contactText).toBeInTheDocument();
    })
    
});