import {gql} from '@apollo/client'
export const deleteMutation = gql`
mutation deleteByID($id:ID!){
  UI__deleteProject(id:$id){
    id
    title
    subtitle
  }
}
`;
