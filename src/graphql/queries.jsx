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
}`;

const GET_AUTHORS_INFO = gql `
  query {
    authors {
      avatar {
        url
      }
      name
      slug
      id
    }
}`;

const GET_AUTHOR_INFO = gql `
  query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
}`;

const GET_BLOG_INFO = gql `
  query getBlogInfo($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
}`;

const GET_COMMENT = gql `
query getComments($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO, GET_COMMENT };