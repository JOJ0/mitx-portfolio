import Page from './components/Page.jsx'

function ProjectsFoss() {
  const content = (
    <div className="row">
      <p>
      Open Source projects I'm involved with.
      </p>
    </div>
  );

  return (
    <Page title="Projects.OpenSource" content={content} />
  )
}


export default ProjectsFoss;
