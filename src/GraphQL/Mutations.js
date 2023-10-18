import { gql } from '@apollo/client';

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