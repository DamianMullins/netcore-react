import React from 'react';
import { FormattedMessage } from 'react-intl';
import { decode } from 'he';

const MenuItem = ({ item, onAddItemClick }) => (
    <section className="g c-listing-item">
        <div className="g-col g-span9">
            <p className="c-listing-item-text">{decode(item.name)}</p>
            <p className="c-listing-item-text">{item.price}</p>
        </div>

        <div className="g-col g-span3 text-right">
            <button className="o-btn o-btn--primary o-btn--small" onClick={onAddItemClick}>+
                <span className="is-visuallyHidden">
                    <FormattedMessage id="menu.addItem" values={{ item: decode(item.name) }} />
                </span>
            </button>

        </div>
    </section>
);

export default MenuItem;
