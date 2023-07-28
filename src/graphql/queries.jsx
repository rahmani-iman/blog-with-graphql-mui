import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql `
    query {
  posts {
    author {
      avatar {
        url
      }
      name
    }
    coverPhoto {
      url
    }
    title
    slug
    id
  }
}
`;

export {GET_BLOGS_INFO};