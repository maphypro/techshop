import React from 'react';
import {useSelector} from "react-redux";
import s from './Shop.module.scss'
import ItemsList from "../components/ItemsList";
import Filters from "../components/Filters";

const Shop = () => {

    return (
        <div className={s.shop}>
            <Filters/>
            <ItemsList/>
        </div>
    );
};

export default Shop;