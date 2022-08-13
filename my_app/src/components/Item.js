import React from 'react';
import s from './Item.module.scss'
import avatar from '../assets/avatar.png'

const Item = () => {
    return (
        <div className={s.item_wrapper}>
            <div className={s.item}>
                <div className={s.img_wrapper}>
                    <img src={avatar} alt="Image" className={s.img}/>
                </div>
                <div className={s.name}>
                    Телефон бла-бла
                </div>
                <div className={s.price}>
                    40 000
                </div>
            </div>
        </div>
    );
};

export default Item;