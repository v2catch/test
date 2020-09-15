import React from 'react';
import PropTypes from 'prop-types';

import './Hero.scss';

const Hero = ({ children, title, text, img, ...rest }) => {
    return (
        <div className="c-hero" style={{ backgroundImage: `url(${img})` }}>
            <h1 className="c-hero__title">{title}</h1>
            <p className="c-hero__text">{text}</p>
            {children}
        </div>
    );
};

Hero.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
};

export { Hero };
