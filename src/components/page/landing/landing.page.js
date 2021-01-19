import React from 'react';
import InitialContextProvider from '../../../contexts/initial.context';
import LandingPattern from '../../pattern/landing/landing.pattern';

function LandingPage() {
    return (
        <InitialContextProvider>
            <LandingPattern/>
        </InitialContextProvider>
    );
}

export default LandingPage;