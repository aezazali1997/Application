import { gql } from '@apollo/client';

export const createProject = gql`
  mutation saveProject(
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
    $challenge: String!
    $technologies: [String!]!
    $images: [String!]!
  ) {
    UI__createProject(
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
        challenge: $challenge
        technologies: $technologies
        images: $images
      }
    ) {
      title
      subtitle
      client {
        name
        logo
      }
      projectType
      start
      end
      solution
      summary
      thumbnail
      url
      challenge
      technologies
      images
    }
  }
`;
