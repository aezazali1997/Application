const Project = require('../model/project.model');
const { GraphQLDateTime } = require('graphql-iso-date')
const resolvers = {
  Query: {
    UI__getAllProjects: async () => {
      try {
        return await Project.find({});
      }
      catch (ex) {
        console.log("Could not get all the projects due to some error \n", ex)
      }
    },
    UI__getProject: async (_, { id }) => {
      try {
        return await Project.findById(id)
      }
      catch (ex) {
        console.log("could not get the item by id due to some error \n", ex)
      }
    },
  },
  Mutation: {
    UI__createProject: async (_, { input }) => {
      try {
        const _project = new Project({
          title: input.title,
          subtitle: input.subtitle,
          client: {
            name: input.client.name,
            logo: input.client.logo
          },
          projectType: input.projectType,
          start: input.start,
          end: input.end,
          role: input.role,
          summary: input.summary,
          solution: input.solution,
          challenge: input.challenge,
          thumbnail: input.thumbnail,
          url: input.url,
          technologies: input.technologies,
          images: input.images
        });
        return await _project.save(_project)

      }
      catch (ex) {
        console.log("could not save the entry due to some error \n", ex)
      }
    },
    UI__deleteProject: async (_, { id }) => {
      try {
        return await Project.findByIdAndRemove(id)
      }
      catch (ex) {
        console.log("could not delete item due to some error \n", ex)
      }
    },
    UI__updateProject: async (_, { id, input }) => {
      try {
        return await Project.findOneAndUpdate({ "_id": id }, input, { new: true })
      }
      catch (ex) {
        console.log("could not update project due to some errors \n", ex)
      }
    },
  },
  ISODate: GraphQLDateTime

}
module.exports = resolvers;