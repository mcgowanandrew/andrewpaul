const projects = require('./projectData.json');

const getAllProjects = (req,res) => {
  !projects
    ? res.status(404).json({
        status: 404,
        message: 'No projects found',
      })
    : res.status(200).json({ status: 200, data: projects });
};

const getProjectByTitle = (req, res) => {
  const { title } = req.params;
  const filterTitle = projects.find(
    (project) => project.title === String(title)
  );
  !filterTitle.length <= 0
    ? res.status(404).json({ status: 404, message: 'Project not found' })
    : res.status(200).json({ status: 200, data: filterTitle });
};

module.exports = { getAllProjects, getProjectByTitle };
