import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CardImg = ({ children }) => {
    return (
        <div class="block p-4 bg-grey-200 rounded-md border border-grey-300 shadow-lg shadow-aqua-400/10">
            <main className= "flex items-center gap-2">
                {children}
            </main>
        </div>
    )
}
export default CardImg