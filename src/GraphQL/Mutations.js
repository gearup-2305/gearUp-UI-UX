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
