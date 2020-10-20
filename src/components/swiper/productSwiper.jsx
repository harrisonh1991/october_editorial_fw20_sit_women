import React from 'react';
import styles from './styles/productSwiper.module.scss';
import Image from '../Image/image.jsx';

const ProductSwiper = props => {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                {
                    getSlider(props.products)
                }
            </div>      
        </div> 
    );
};

const getSlider = props => {

    const { shopUrl, imageUrl, imageUrl_end, lists } = props;
    const _lists = [];
    lists.map((item, index) => _lists.push(
            <div key={item + index} className={styles.flex__item}>
                <div>
                    <a className={styles.link} href={shopUrl + item.sku}>
                        <Image image={{src: imageUrl + item.sku + '/' + item.sku +imageUrl_end}} />
                        <div className={styles.desc}>
                            <p className={styles.string}>{item.brand}</p>
                            <p className={styles.string}>{item.name}</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    );
        

    return _lists;
}

export default ProductSwiper;