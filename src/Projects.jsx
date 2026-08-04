import Page from './components/Page.jsx'
import { PAGE_TITLES } from './constants/titles.js'

function Projects() {
  const content = (
    <div className="row">
      <p>
      You should never see this page.
      </p>
    </div>
  );

  return (
    <Page title={PAGE_TITLES.PROJECTS} content={content} />
  )
}


export default Projects;
