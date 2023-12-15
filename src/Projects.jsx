import Page from './components/Page.jsx'

function Projects() {
  const content = (
    <div className="row">
      <p>
      You should never see this page.
      </p>
    </div>
  );

  return (
    <Page title="Projects" content={content} />
  )
}


export default Projects;
