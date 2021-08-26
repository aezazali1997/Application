import { gql } from '@apollo/client';

export const deleteProjectByID = gql`
  mutation deleteByID($id: ID!) {
    UI__deleteProject(id: $id) {
      id
      title
      subtitle
    }
  }
`;
