import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const CardList = ({ children }) => {
    return (
        <div class="block p-4 bg-grey-200 rounded-md border border-grey-300 shadow-lg shadow-aqua-600/20">
            <main className="col-span-1">
                {children}
            </main>
        </div>
    )
}
export default CardList

