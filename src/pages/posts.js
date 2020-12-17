import React from "react"
import { graphql } from "gatsby"

export default function posts({ data }) {
  return <div>{JSON.stringify(data)}</div>
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
