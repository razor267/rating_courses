import React, {useContext} from "react";
import cn from 'classnames';
import styles from './Menu.module.css';
import {AppContext} from "../../context/app.context";

export const Menu = (): JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <div>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    );
};