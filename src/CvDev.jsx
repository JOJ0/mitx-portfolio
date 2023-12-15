import Page from './components/Page.jsx'

function CvDev() {
  const content = (
    <>
      <p>Use regular bullet points for CV listing?</p>
      <ul className="" id="">
        <li className="">
          Did something, somewhere
        </li>
        <li className=""> Did something else, somewhere else
          <ul className="" id="">
            <li className="">
              Sub sub, something
            </li>
          </ul>
        </li>
      </ul>
    </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
