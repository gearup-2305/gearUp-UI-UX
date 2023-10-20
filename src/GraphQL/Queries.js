import {gql} from '@apollo/client'

export const LOAD_ARTISTS = gql`
query artists {
    artists {
        city
        id
        medium
        name
        profileImage
        state
        zipcode
      posts {
        id
        title
        details
        imageUrl
        requestedAmount
        currentAmount
        artistId
        donations {
          id
          name
          email
          amount
          postId
        }
      }
    }
}
`

export const LOAD_SINGLE_USER = gql`
  query artist ($id: ID!) {
    artist (id: $id) {
      city
      createdAt
      email
      id
      medium
      name
      passwordDigest
      profileImage
      state
      updatedAt
      zipcode
      posts {
        id
        title
        details
        requestedAmount
        currentAmount
      }
  }
}
`

export const LOAD_PREVIEW_CONTENT = gql`
  query posts(orderBy: DESC) {
    id
    title
    details
    requestedAmount
    currentAmount
    donationPercentage
  }
`
