import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me($username: String!) {
        me(username: $username) {
            _id
            savedBooks {
                bookId
                title
                description
                authors
                image
                link
            }
        }
    }
`;
