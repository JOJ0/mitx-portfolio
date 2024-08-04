import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1998; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }
  const reverseRows = rows.slice().reverse();

  const content = (
    <>
    <div className="row">
      <p>System management platforms, operating systems, services and tools I've
      been managing/using over the years. "Infrastructure as Code"
      tools (eg Ansible) are located here too, for agile tools, documentation
      systems, actual programming languages & shells, have a look at <Link
      to="/cvdev">CV.dev</Link></p>
    </div>
    {reverseRows}
    </>
  );

  return (
    <Page title="CV.ops" subheading="an alternative approach to a CV - sysadmin & operating" content={content} />
  )
}

export default CvOps;

