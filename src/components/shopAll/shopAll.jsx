import React from 'react';
import styles from './styles/shopAll.module.scss';
import {CtaSitDesktopWLimit} from '../Cta/cta.jsx';

export const ShopAll = props => {

    const { link, content } = props.cta;

    return (
        <div className={styles.container}>
            <CtaSitDesktopWLimit 
                link={link}
                content= {content}
            />
        </div>
    );

}