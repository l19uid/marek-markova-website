import React from 'react';
import {useEffect} from "react";

const CustomCursor = (props) => {
    useEffect(() => {
        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseenter', showCursor);
        document.addEventListener('mouseleave', hideCursor);
    }, []);

    const updateCursorPosition = (e) => {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    // Function to show the cursor when it enters the viewport
    const showCursor = () => {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.opacity = '1';
    };

    // Function to hide the cursor when it leaves the viewport
    const hideCursor = () => {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.opacity = '0';
    };

    React.useEffect(() => {
        const body = document.body;
        body.style.cursor = 'none';

        // Cleanup function to restore the default cursor
        return () => {
            body.style.cursor = 'auto';
        };
    }, []);


    // Render the custom cursor
    return (
        <div
            id="custom-cursor"
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                width: '16px',
                height: '16px',
                backgroundImage: `url(${props.cursor})`,
                backgroundSize: 'cover',
                backgroundColor: 'transparent',
                zIndex: '9999',
                opacity: '0',
                transition: 'opacity 0.2s ease',
            }}
        />
    );
};

export default CustomCursor;