import { gql } from '@apollo/client';

export const getQuery = gql`
  query getAll {
    UI__getAllProjects {
      id
      title
      start
      end
      client {
        name
      }
      role
      url
    }
  }
`;
