import React, { useState } from "react";
import style from '../styles/shop.css'
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Shop = ({sendProductToParent}) => {

    const [data, setData] = useState('')
    const dataFromSidebar = (data) => {
        setData(data)
    }

    function productConstructor(productName, price, img) {
        this.productName = productName;
        this.price = price;
        this.img = img;
        this.amount = 0;
        this.fullPrice = 0;
    }

    function productDisplayer(arr) {
        return <div className="products-container">
                    {arr.map((product) => {
                    return <div className="product">
                            <div style={{backgroundImage: `url(/product-imgs/${product.img})`}}className="image"></div>
                            <div className="description">
                                <div onClick={()=>{
                                    sendProductToParent(product)
                                }}>{<Link to={`/shop/${product.productName}`} className="fullName">{product.productName}</Link>}</div>
                                <div className="price">{`$${product.price}`}</div>
                            </div>
                           </div>})}
               </div>
    }

    let xboxSeriesX = new productConstructor('Xbox Series X', 499, 'xsx.jpg')
    let xboxSeriesS = new productConstructor('Xbox Series S', 299, 'xss.jpg')
    let xboxOneX = new productConstructor('Xbox One X', 259, 'xox.jpg')
    let Xboxes = [xboxSeriesX, xboxSeriesS, xboxOneX]

    let ps5 = new productConstructor('PlayStation 5', 499, 'ps5.jpg')
    let ps5DE = new productConstructor('PlayStation 5 Digital Edition', 399, 'ps5d.jpg')
    let ps4Slim = new productConstructor('PlayStation 4 Slim', 299, 'ps4slim.jpg')
    let ps4Pro = new productConstructor('PlayStation 4 Pro', 339, 'ps4pro.jpg')
    let PlayStations = [ps5, ps5DE, ps4Pro, ps4Slim]

    let NSO = new productConstructor('Nintendo Switch OLED', 349, 'switcholed.jpg')
    let NS = new productConstructor('Nintendo Switch', 299, 'switch.jpg')
    let NSL = new productConstructor('Nintendo Switch Lite', 199, 'switchlite.jpg')
    let Nintendoes = [NSO, NS, NSL]

    let psgames = [new productConstructor('God of War Ragnarök', 69.99, 'gow.jpg'),new productConstructor('Horizon: Forbidden West', 59.99, 'horizon.jpg'),
                   new productConstructor('Gran Turismo 7', 59.99, 'gt7.jpg'), new productConstructor("Ghost of Tsushima Director's Cut", 59.99, 'got.jpg'),
                   new productConstructor('Gran Turismo 7(PS4)', 39.99, 'gt7ps4.jpg'), new productConstructor('Ratchet and Clank: Rift Apart', 49.99, 'rac.jpg')]
    
    let xboxGames = [new productConstructor('FIFA 22', 39.99, 'fifa22.jpg'), new productConstructor('Farming Simulator 22', 49.99, 'fs22.jpg'),
                     new productConstructor('Forza Horizon 5', 49.99, 'fh5.jpg'), new productConstructor('Grand Theft Auto V', 39.99, 'gtav.jpg'),
                     new productConstructor('Red Dead Redemption 2', 39.99, 'rdr2.jpg'), new productConstructor('Assassin’s Creed: Valhalla', 49.99, 'acv.jpg')]

    let nintendoGames = [new productConstructor("Super Mario 3D World + Browser's Fury", 49.99, 'sm3dw.jpg'),
                         new productConstructor('Animal Crossing: New Horizons', 49.99, 'acnh.jpg'),
                         new productConstructor('The Legend of Zelda: Breath of the Wild', 49.99, 'tloz.jpg'),
                         new productConstructor('The Legend Of Zelda: Skyward Sword HD', 49.99, 'zss.jpg'),
                         new productConstructor('Super Mario Odyssey', 49.99, 'smo.jpg'), new productConstructor('Mario Kart 8 Deluxe', 49.99, 'mk8.jpg')]

    let psAccessories = [new productConstructor('SONY Pulse 3D', 89.99, 'puls3d.jpg'), new productConstructor('SONY Pulse 3D (white)', 89.99, 'puls3dw.jpg'),
                         new productConstructor('SONY DualSense (black)', 69.99, 'dsb.jpg'), new productConstructor('SONY DualSense (white)', 69.99, 'dsw.jpg')]

    let xboxAccessories = [new productConstructor('MICROSOFT Headset Stereo', 59.99, 'mhs.jpg'), new productConstructor('MICROSOFT XBOX Series X and S pad (red)', 59.99, 'xpadr.jpg'),
                           new productConstructor('MICROSOFT XBOX Series X and S pad (black)', 59.99, 'xpadb.jpg')]

    let nintendoAccessories = [new productConstructor('NINTENDO Switch Pro Controller', 59.99, 'spc.jpg'), new productConstructor('NINTENDO Switch Joy-Con', 69.99, 'sjc1.jpg'),
                               new productConstructor('NINTENDO Switch Joy-Con', 69.99, 'sjc2.jpg'), new productConstructor('NINTENDO Switch OLED case', 19.99, 'soc.jpg')]

    let bestsellers = [ps5, xboxSeriesX, NSO]

    let render = () => {
        switch(data){
            case 'Xbox consoles':
                return productDisplayer(Xboxes)
                break;
            case 'PlayStation consoles':
                return productDisplayer(PlayStations)
                break;
            case 'Nintendo consoles':
                return productDisplayer(Nintendoes)
                break;
            case 'PlayStation games':
                return productDisplayer(psgames)
                break;
            case 'Xbox games':
                return productDisplayer(xboxGames)
                break;
            case 'Nintendo games':
                return productDisplayer(nintendoGames)
                break;
            case 'PlayStation accessories':
                return productDisplayer(psAccessories)
                break;
            case 'Xbox accessories':
                return productDisplayer(xboxAccessories)
                break;
            case 'Nintendo accessories':
                return productDisplayer(nintendoAccessories)
                break;
            default:
                return productDisplayer(bestsellers)            
        }
    }

    return(
        <div className="shop-main">
            <div className="shop-sidebar">
                <Sidebar dataFromSidebar={dataFromSidebar}/>
            </div>
            <div className="shop-container">
                {render()}
            </div>
        </div>
    );
}

export default Shop;