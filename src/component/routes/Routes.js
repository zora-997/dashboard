import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";


import Kanban from '../kanban/Kanban';
import Users from '../users/Users';
import Onbox from '../inbox/Onbox';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashboard';






const MainRoutes = () => {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Navigate replace to="dashboard" />} />
                <Route exact path="dashboard" element={<Dashboard />} />
                <Route exact path="kanban" element={<Kanban />} />
                <Route exact path="inbox" element={<Onbox />} />
                <Route exact path="users" element={<Users />} />


            </Routes>
        </div>
    )
}

export default MainRoutes