import {gql} from '@apollo/client';

export const updateProject = gql`
mutation updateProject (
  $id:ID!,
  $title: String!
  $subtitle: String!
  $client: clientInput!
  $projectType: String!
  $start: String!
  $end: String!
  $role: String!
  $summary: String!
  $solution: String!
  $thumbnail: String!
  $url: String!
  $challenge:String!
  $technologies:[String!]!
  $images:[String!]!){
    UI__updateProject(
      id:$id,
      input: {
        title: $title
        subtitle: $subtitle
        client: $client
        projectType: $projectType
        start: $start
        end: $end
        role: $role
        summary: $summary
        solution: $solution
        thumbnail: $thumbnail
        url: $url
        challenge:$challenge
        technologies:$technologies
        images:$images
    }){
      id      
    }
  }

`
