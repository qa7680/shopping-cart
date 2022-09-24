import React from 'react';
import { render,screen } from '@testing-library/react';
import RouteSwitch from '../RouteSwitch';

//describe / it pattern

describe("RouteSwitch component", () => {
    it("renders component correctly", () => {
        render(<RouteSwitch />);
    })
});