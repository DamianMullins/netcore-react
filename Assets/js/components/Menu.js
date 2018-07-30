import React from 'react';
import MenuItemContainer from '../containers/MenuItemContainer';

const Menu = ({ menu }) => (
    <div className="c-listing">
        <h1>{menu.restaurantName}</h1>

        {menu.items.map(item => <MenuItemContainer item={item} key={item.id} />)}
    </div>
);

export default Menu;
