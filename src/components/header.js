import * as React from 'react'

import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {
    const data = useStaticQuert(graphql`
    query{
        site{
            siteMetadata{
                tilte
            }
        }
        siteBuildMetadata{
            buildTime
        }
    }
    `)

    return (
        <header>
            <h1>{data.site.siteMetadata.tilte}</h1>
        </header>
    )
}


export default Header