import { gql } from '@apollo/client';

export const getById = gql`
  query getById($id: ID!) {
    UI__getProjectByID(id: $id) {
      id
      title
      subtitle
      client {
        name
        logo
      }
      projectType
      start
      end
      role
      summary
      technologies
      challenge
      solution
      thumbnail
      url
      images
    }
  }
`;
