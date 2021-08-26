import {gql} from '@apollo/client';
export const getTitles = gql`
query getTitle {
  UI__getAllProjectNames {
    thumbnail
    title
    end
  }
}
`