//import React from "react";
//import {screen, render, fireEvent } from '@testing-library/react';
import AddFive from "./componenets/AddFive";

test('add 5 to the number', ()=>{

    expect(AddFive(1)).toBe(6)
});