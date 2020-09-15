import React from 'react';
import PropTypes from 'prop-types';

import { Hero } from '@/components/Hero';

import './HomePage.scss';

const HomePage = ({}) => {
    return (
        <div className="c-homePage">
            <Hero
                title="Hellllooooo"
                text="Nice to meet you!"
                img="https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3876&q=80"></Hero>
        </div>
    );
};

export { HomePage };
