const project = require('../model/project.model');
module.exports = {
  createDB: async (req, res) => {
    try {
      let projectObj = new project({
        title: 'example',
        subtitle: 'example',
        client: {
          name: 'example',
          logo: 'example'
        },
        projectType: 'example',
        start: Date.now(),
        end: Date.now(),
        role: 'example',
        summary: 'example',
        challange: 'example',
        solution: 'example',
        technologies: 'example',
        url: 'string',
        images: ['example1', 'example2', 'example3', 'example4', 'example5']
      });
      await projectObj.save(projectObj);
      res.send("data saved")
    } catch (ex) {
      console.log(ex)
    }
  }
}
/*
  images: [String]
})
*/