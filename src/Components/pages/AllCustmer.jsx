import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from './Header';


const AllCustmer = () => {
    return (
        <>
        <div className="acA">
            <Header />
            <div className="accA">
                <Dashboard />
                <div className="acCA">
                    All Custmers
                </div>
            </div>
        </div>
        </>
    );
}

export default AllCustmer;