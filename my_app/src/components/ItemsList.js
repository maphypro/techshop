import React, {useState} from 'react';
import s from './ItemsList.module.scss'
import Item from "./Item";


function ItemsList(props) {

    //const [items, setItems] = useState([]);

    const itemsOnScreen = 16
    //загружаем с сервера itemsOnScreen*2 товаров при первой загрузке

    const rowsCount = itemsOnScreen / 4;

    let items = []
    for (let i = 0; i < rowsCount; i++) {
        items.push(
            <div className={s.row}>
                <Item/><Item/><Item/><Item/>
            </div>
        )
    }

    return (
        <div className={s.list_wrapper}>
            {
                items.map((elem) => elem)
            }
        </div>
    );
}


export default ItemsList;