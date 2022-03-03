import {ProductProps} from "./Product.props";
import React from "react";
import cn from 'classnames';
import styles from './Product.module.css';

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <div>
            {product.title}
        </div>
    );
};