import Page from './components/Page.jsx'
import Card from './components/Card.jsx'

function ProjectsFoss() {
  const title = "Projects.FOSS"
  const content = (
    <>
    <div className="row">
      <p>
      (Free and) open-source software projects I'm involved with.
      </p>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="synadm"
          text="The Admin CLI for Synapse (a communication server based on the Matrix specification)"
          repo="https://github.com/JOJ0/synadm"
          run=""
          docs="https://synadm.readthedocs.io"
          website=""
          members="3"
        />
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="python3-discogs-client"
          text="The Python library for accessing the Discogs API (the worlds [probably] largest free online database and marketplace of music releases"
          repo="https://github.com/joalla/discogs_client"
          run=""
          docs="https://python3-discogs-client.readthedocs.io"
          website=""
          language="Python"
          members="4"
        />
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="beets"
          text="A sophsticated media file tagger and music library manager written in Python"
          repo="https://github.com/beetbox/beets"
          run=""
          docs="https://beets.readthedocs.io/en/latest"
          website="https://beets.io"
          language="Python"
          members="30+"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="DiscoDOS"
          text="A CLI tool for DJ's and record collectors based on the discogs.com collection feature"
          repo="https://github.com/JOJ0/discodos"
          run=""
          docs="https://discodos.readthedocs.io"
          website="https://discodos.jojotodos.net"
          language="Python"
          members="1"
        />
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="beets-xtractor"
          text="A beets plugin based on the Essentia project of Barcelona's <em>Universitat Pompeu Fabra</em>"
          repo="https://github.com/adamjakab/BeetsPluginXtractor"
          run=""
          docs="https://github.com/adamjakab/BeetsPluginXtractor/blob/master/README.md"
          website=""
          language="Python"
          members="2"
        />
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6">
        <Card
          title="beets-dirfields"
          text="A beets plugin that remembers where files where files originally where stored on disk"
          repo="https://github.com/JOJ0/beets-dirfields"
          run=""
          docs="https://github.com/JOJ0/beets-dirfields/blob/master/README.md"
          website=""
          language="Python"
          members="1"
        />
      </div>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsFoss;
