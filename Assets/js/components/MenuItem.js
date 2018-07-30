import React from 'react';

const MenuItem = ({ item, onAddItemClick }) => (
    <section className="g c-listing-item">
        <div className="g-col g-span9">
            <p className="c-listing-item-text" v-html="item.name" dangerouslySetInnerHTML={{ __html: item.name }}></p>
            <p className="c-listing-item-text">{item.price}</p>
        </div>

        <div className="g-col g-span3 text-right">
            <button className="o-btn o-btn--primary o-btn--small" onClick={onAddItemClick}>+
                <span
                    className="is-visuallyHidden"
                    dangerouslySetInnerHTML={{ __html: `Add ${item.name} to basket` }}></span>
            </button>
        </div>
    </section>
);

export default MenuItem;
