const Project = require("../model/project.model");
const { GraphQLDateTime } = require("graphql-iso-date");
const resolvers = {
	Query: {
		UI__getAllProjects: async () => {
			try {
				return await Project.find({});
			} catch (ex) {
				throw new Error("Error! : Can't find Projects.\n", ex);
			}
		},
		UI__getProject: async (_, { id }) => {
			try {
				return await Project.findById(id);
			} catch (ex) {
				throw new Error(`Error! : Can't find Project by the id. :${id} \n`, ex);
			}
		},
		UI__getAllProjectNames: async () => {
			try {
				return await Project.find({});
			} catch (ex) {
				throw new Error("Error! : Can't find Projects.\n", ex);
			}
		},
	},
	Mutation: {
		createProject: async (_, { input }, { request }) => {
			if (!request.isAuth) {
				throw new Error("Unauthenticated");
			}
			const values = JSON.parse(JSON.stringify(input));
			try {
				const _project = new Project(values);
				return await _project.save(_project);
			} catch (ex) {
				console.log("Error! : Can't Create.  \n", ex);
				throw new Error("Error! : Can't Create", ex);
			}
		},
		deleteProject: async (_, { id }, { request }) => {
			if (!request.isAuth) {
				throw new Error("Unauthenticated");
			}
			try {
				return await Project.findByIdAndRemove(id);
			} catch (ex) {
				console.log("Error! : Can't delete. \n", ex);
				throw new Error("Error! : Can't delete. \n", ex);
			}
		},
		updateProject: async (_, { id, input }, { request }) => {
			if (!request.isAuth) {
				throw new Error("Unauthenticated");
			}
			try {
				return await Project.findOneAndUpdate({ _id: id }, input, {
					new: true,
				});
			} catch (ex) {
				console.log("Error! : Can't Update \n", ex);
				throw new Error("Error! : Can't Update \n", ex);
			}
		},
	},
	ISODate: GraphQLDateTime,
};
module.exports = resolvers;
