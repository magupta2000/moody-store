import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loader from '../components/Loader/Loader';
import { RoutesConstants } from './RouteConsts';
import Home from '../container/Home/Home';

const RootRouting = () => {
    return(
        <Suspense fallback={<Loader />} >
            <Routes>
                <Route element={<Layout />}>
                    <Route path={RoutesConstants.home} element={<Home />}/>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default RootRouting;