import React from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Routes, Route} from "react-router-dom";

const ApplicationRouter = () => {

    let isAuth = true

    return (
        <div>
            <Routes>
                {
                    isAuth && authRoutes.map(
                        ({path, Component}) =>  <Route key={path} path={path} element={<Component/>}/>
                    )
                }
                {
                    publicRoutes.map(
                        ({path, Component}) =>  <Route key={path} path={path} element={<Component/>}/>
                    )
                }
            </Routes>
        </div>
    );
};

export default ApplicationRouter;