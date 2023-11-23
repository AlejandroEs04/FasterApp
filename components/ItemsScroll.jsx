'use client'
import { LeftArrow, RightArrow } from './Arrows'
import ProductoContainer from './ProductoContainer'
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ItemsScroll = ({items}) => {
  return (
    <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
    >
        {items?.slice(0, 10).map(item => (
            <ProductoContainer 
                key={item.id}
                producto={item}
                wth={true}
            />
        ))}
    </ScrollMenu>
  )
}

export default ItemsScroll

