import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import styles from "./App.module.scss";
import Hero from './components/Hero/Hero.jsx';
import ProductShow from "./components/productShow/productShow.jsx";
import Image from './components/Image/image.jsx';
import RedirectBannerCta from './components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from './components/shopAll/shopAll.jsx';

import './App.scss';

const App = () => (
    <article className="App">
        <header>
            <Hero 
                banner={<Image image={{ mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673760218541.jpg", desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673751749940.jpg'}}/>}
                title={<div>灵感集结<br/>解锁 2020 秋冬潮流趋势</div>}
                content="在经历了漫长的沉寂与等待后，潮流灵感在秋冬季节被唤醒。复古、脑洞、理性、文艺，一系列关键词引发幻想，新的惊喜与生活之美等待被发现，快跟上 ITeSHOP 的脚步，做好准备，为你的衣橱提前布局！"
            />
        </header>
        <main className={['"landPg"', styles.container].join(' ')}>
            <ProductShow 
                banner1={(<Image image={{src: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673759855838.jpg"}}/>)}
                title="复古格纹大势回潮" 
                content="格纹是秋冬戒不掉的“瘾”，本季它也依旧是无法忽视的重头戏。颇具年代感的面料或以复古剪裁致敬传统，或以个性配色中和怀旧气息，将乡村感与都市感巧妙结合，既摩登又新潮。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673760407203.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/1603267375205687.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'BCXLJ0F1101SFNYZ',
                            name: '饰链条腰带花呢外套',
                            brand: 'b+ab',
                        },
                        {
                            sku: 'RLHKN03KT008FGRX',
                            name: '拼色格纹针织衫',
                            brand: 'ROCKET X LUNCH',
                        },
                        {
                            sku: 'NORTPN03TP02FNYX',
                            name: '饰拉链格纹上衣',
                            brand: 'NOIR',
                        },
                        {
                            sku: 'LPFDSKO860BEFBGX',
                            name: '饰口袋格纹针织连衣裙',
                            brand: 'LOS ANGELES PROJECT',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673762086801.jpg"}}/>)}
                title="拼接狂想释放脑洞" 
                content="拼接作为这一季的关键词，再次带来了不小的惊喜。设计师们将不同材质随心剪裁、自由组合，让高饱和度、高明度的色彩相互碰撞，用新颖的重叠和搭配打破常规，展现了一个又一个有趣的灵魂。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673762581900.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673754379403.jpg"}} />)}
                banner2Index={2}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OPNJK0JK1307FKHX',
                            name: '饰口袋拼接西装外套',
                            brand: 'OPEN PLAN',
                        },
                        {
                            sku: 'MURSK4080070FBWX',
                            name: '不对称褶裥拼接半身裙',
                            brand: 'MURUA',
                        },
                        {
                            sku: 'CABSK1127F0MFBLX',
                            name: '格纹拼接不对称半身裙',
                            brand: 'CCAABB',
                        },
                        {
                            sku: 'GLAJK0320052FBLX',
                            name: '多缝饰拼接设计夹克',
                            brand: 'GLAD NEWS',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/1603267376342688.jpg"}}/>)}
                title="维多利亚风格复辟古典" 
                content="2020 年秋冬季大举复古旗帜，荷叶边、褶饰、蕾丝、羊腿袖等维多利亚时期的元素重返视野，续写潮流。在保留传统审美的基础上，服饰设计以更为轻便现代的方式呈现，融入利落剪裁和率性酷感，满足着装需求之余也流露女性反叛意识。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/160326737630511.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/1603267375573813.jpg"}} />)}
                banner2Index={2}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'AMOTP03TS002FIVX',
                            name: '饰荷叶边镂空上衣',
                            brand: 'AMONG',
                        },
                        {
                            sku: 'SSJDSDR1259BFBLX',
                            name: '饰荷叶边格纹连衣裙',
                            brand: 'Sister Jane',
                        },
                        {
                            sku: 'LPFTPWB861LBFBGX',
                            name: '荷叶边饰双排扣上衣',
                            brand: 'LOS ANGELES PROJECT',
                        },
                        {
                            sku: 'GSPTPTOG236YFYEX',
                            name: '泡泡袖褶饰上衣',
                            brand: 'GHOSPELL',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673755803783.jpg"}}/>)}
                title="学院风尚悄然兴起" 
                content="以菱格纹为代表的系列单品，宣告学院风的跨时空回归，也再次强调了复古在这个秋冬的灵感觉醒。海洋气息浓郁的针织背心，蓝白为主调的色彩搭配，温文尔雅的条纹设计等，无一不表达着对上世纪八十年代的怀念与致敬。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673755985692.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673747997580.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'B1XKNL4595XFFNYL',
                            name: '拼色边饰针织背心',
                            brand: ':CHOCOOLATE',
                        },
                        {
                            sku: 'AMOSK03SK003FGYX',
                            name: '饰马衔扣格纹半身裙',
                            brand: 'AMONG',
                        },
                        {
                            sku: 'RLHCD03KT026FBGD',
                            name: '菱格嵌花针织开衫',
                            brand: 'ROCKET X LUNCH',
                        },
                        {
                            sku: 'RLHKN03KT003FGRX',
                            name: '菱格嵌花针织衫',
                            brand: 'ROCKET X LUNCH',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673757566600.jpg"}}/>)}
                title="利落风衣重磅来袭" 
                content="自带气场的风衣诞生于 20 世纪初，任凭时代的车轮滚滚向前，它的魅力也依然不减。这一季，时尚上演着轮回，风衣再度翻红，既有大方的传统造型，也不乏个性的现代设计，剪裁利落且线条顺畅，一切皆为气质服务。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673758119594.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673749408287.jpg"}} />)}
                banner2Index={2}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'MURJK0000101EKHX',
                            name: '格纹褶裥拼接风衣',
                            brand: 'MURUA',
                        },
                        {
                            sku: 'LPFJKLEWC261EBGX',
                            name: '饰系带连帽风衣',
                            brand: 'LOS ANGELES PROJECT',
                        },
                        {
                            sku: 'LPFLJLEWC268EGYX',
                            name: '饰腰带短款风衣',
                            brand: 'LOS ANGELES PROJECT',
                        },
                        {
                            sku: 'MURLJ0100003EKHX',
                            name: '配腰带短款风衣',
                            brand: 'MURUA',
                        }
                    ]
                }}
            />
            
            <ShopAll 
                cta={{
                    link: "https://cn.iteshop.com/s_it/OCT-EDITORIAL-SIT-F",
                    content: '选购全部'
                }}
            />  
        </main>
        <footer className={['"landPg"', styles.container].join(' ')}>
            <RedirectBannerCta 
                media={(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032673758369714.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/1603267375094389.jpg'}}/> )} 
                cta={{
                    link: 'https://cn.iteshop.com/s_it/landingPage/october-fw20-m',
                    content: '探索男装潮流趋势'
                }}
                />
        </footer>
    </article>
);

export default App;
