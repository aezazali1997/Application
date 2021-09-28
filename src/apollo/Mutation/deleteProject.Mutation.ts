import { gql } from '@apollo/client';

export const deleteProjectByID = gql`
  mutation deleteByID($id: ID!) {
    deleteProject(id: $id) {
      id
      title
      subtitle
    }
  }
`;
