import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice'
import { Excel } from 'components/Excel';
import { ExcelJson } from 'components/ExcelJson';
import { Chart } from 'components/Chart';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome<br/>{email}</h1>
            <Excel/><br/>
            
            <Chart/><br/>
            <p>
                <Link to="/test">Пройти тест (для молодого специалиста) </Link>
            </p>
            <button
                onClick={()=> dispatch(removeUser())}
            >Log out 
            </button>
        </div>
    ) : (
        <Redirect to="/login" />
    )
}

export default HomePage
