export const PAGE_TITLES = {
  HOME: 'Bio',
  PROJECTS: 'Projects',
  PROJECTS_FOSS: 'P.FOSS',
  PROJECTS_TOOL: 'P.Tool',
  PROJECTS_EXERCISE: 'P.Fun',
  CV_DEV: 'CV.Dev',
  CV_OPS: 'CV.Ops',
  CV_ART: 'CV.Art',
  ABOUT: 'Why',
  CONTACT: 'Contact',
}

export const ROUTE_TITLES = {
  '/': PAGE_TITLES.HOME,
  '/projects/foss': PAGE_TITLES.PROJECTS_FOSS,
  '/projects/exercise': PAGE_TITLES.PROJECTS_EXERCISE,
  '/projects/tool': PAGE_TITLES.PROJECTS_TOOL,
  '/cvdev': PAGE_TITLES.CV_DEV,
  '/cvops': PAGE_TITLES.CV_OPS,
  '/cvart': PAGE_TITLES.CV_ART,
  '/about': PAGE_TITLES.ABOUT,
  '/contact': PAGE_TITLES.CONTACT,
}

export const ROUTE_SUBHEADINGS = {
  '/projects/foss': "Open Source projects I'm involved with.",
  '/projects/exercise': 'Fun, Experiments, Playground',
  '/projects/tool': 'Utils, helpers, unsophisticated projects',
  '/cvdev': 'a different take on a CV',
  '/cvops': 'a different take on a CV',
  '/cvart': 'a different take on a CV',
  '/about': 'is this website here?',
}
