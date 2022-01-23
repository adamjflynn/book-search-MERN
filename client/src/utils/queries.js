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

export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
