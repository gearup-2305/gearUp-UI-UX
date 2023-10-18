import { gql } from '@apollo/client';

export const CREATE_DONATION = gql`
  mutation CreateDonation(
    $name: String!
    $email: String!
    $postId: Int!
    $amount: Int!
  ) {
    createDonation(input: {
    name: $name
    email: $email
    postId: $postId
    amount: $amount
    }) {
      donation {
        id
        name
        email
        amount
      }
      errors
    }
  }
`;

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
