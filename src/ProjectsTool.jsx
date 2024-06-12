import Page from './components/Page.jsx'
import Card from './components/Card.jsx'

function ProjectsTool() {
  const title = "Projects.tool"
  const content = (
    <>
    <div className="row">
      <p>
      Smaller tools and utilities. Mostly unmaintained, opinionated and unsophisticated code. I still use some of them on a regular basis though. Might be usable as a starting point for others. Fork it and HTH!
      </p>
    </div>

    <div className="row">
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Jekyll Helpers"
          text="Helpers to generate picture galleries for Jekyll based websites/blogs"
          repo="https://github.com/JOJ0/jekyll-helpers"
          run=""
          language="Bash/Zsh/Python"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Transaction Cutter"
          text="Cuts out the relevant pieces of transaction CSV files of a certain bank or PayPal - my first Python project ever :-O"
          repo="https://github.com/JOJ0/transaction-cutter"
          run=""
          language="Python"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Audio Utils"
          text="Shell scripts to mass-manipulate audio and video files"
          repo="https://github.com/JOJ0/audio-utils"
          run=""
          language="Bash/Zsh"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Mailchimp Members"
          text="Unpacks a mailchimp members list zip file, filters columns and writes new csv file"
          repo="https://github.com/JOJ0/mailchimp-members"
          run=""
          language="Python"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="GitHub Projects Util"
          text='Uses PyGithub to retrieve "GitHub Project" (aka kanban) cards'
          repo="https://github.com/JOJ0/github-util"
          run=""
          language="Python"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="MPC 1000 Sequence Util"
          text="CLI utility to manipulate sequence files of an AKAI MPC 1000 sampler device"
          repo="https://github.com/JOJ0/mpc1k-seq"
          run=""
          language="Python"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title='APC mini Controller Script'
          text='Ableton Live 9.x controller script for the "Akai MPC mini"'
          repo="https://github.com/JOJ0/ableton-live9-remote-scripts"
          language="Python"
        />
      </div>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsTool;
