import { Link } from 'react-router-dom'
import Page from './components/Page.jsx'
import { PAGE_TITLES } from './constants/titles.js'

function Contact() {
  const content = (
    <div className="row">
      <div className="col">
        <div>
          <a href="https://www.linkedin.com/in/johannes-tiefenbacher">
            linkedin.com/in/johannes-tiefenbacher
          </a>
        </div>
      </div>
    </div>

  )

  return (
    <Page title={PAGE_TITLES.CONTACT} subheading="" content={content} />
  )
}

export default Contact;
