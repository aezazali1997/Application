let { buildSchema } = require('graphql');
const Schema = buildSchema(`
type Query{
  UI__getProjects:[Project]
  UI__getProject(id:ID!):Project
}
input clientInput {
  name:String!
  logo:String!
}
type Client {
  id:ID!
  name:String!
  logo:String!
}
input projectUpdate {
  title:String!
  subtitle:String
  client:clientInput
  projectType:String
  start:String
  end:String
  role:String
  summary:String
  challange:String
  solution:String
  technologies:[String]
  url:String
  images:[String]
}
input projectInput {
  title:String!
  subtitle:String!
  client:clientInput!
  projectType:String!
  start:String!
  end:String!
  role:String!
  summary:String!
  challange:String!
  solution:String!
  technologies:[String!]!
  url:String!
  images:[String!]!
}
type Project {
  id:ID!
  title:String!
  subtitle:String!
  client:Client!
  projectType:String!
  start:String!
  end:String!
  role:String!
  summary:String!
  challange:String!
  solution:String!
  technologies:[String!]!
  url:String!
  images:[String!]!
}
type Mutation{
  UI__createProject(input:projectInput):Project
  UI__deleteProject(id:ID!):Project
  UI__updateProject(id:ID!,input:projectUpdate):Project
}
`);
module.exports = Schema;

/*
} */