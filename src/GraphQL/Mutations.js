import { gql } from '@apollo/client';

// not working
export const SUBMIT_DONATION_OFFER = gql`
mutation CreateDonation(
    $name: String!
    $email: String!
    $postId: Int!
    $amount: Float!
  ) {
    createDonation(input: {
    name: $name,
    email: $email,
    postId: $postId,
    amount: $amount,
    }) {
      donation {
        id
        name
        email
        amount
        postId
      }
      errors
    }
  }
`

export const SUBMIT_DONATION_REQUEST = gql`
mutation CreateDonationRequest(
  $title: String!
  $details: String!
  $imageUrl: String!
  $requestedAmount: Float!
  $currentAmount: Float!
  $artistID: Int!
) {
  createPost(input: {
    title: $title
    details: $details
    imageUrl: $imageUrl
    requestedAmount: $requestedAmount
    currentAmount: $currentAmount
    artistId: $artistID
  }) {
    post {
      id
      title
      details
      imageUrl
      requestedAmount
      currentAmount
    }
    errors
  }
}
`