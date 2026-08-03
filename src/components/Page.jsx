
function Page({title, subheading, content}) {

  return (
    <>
      <div className="row d-md-none">
        <div className="col">
          <header>
            <h1 className="font-weight-light text-muted py-3">
              {title}
            </h1>
          </header>
        </div>
      </div>
      {subheading && (
        <div className="row">
          <div className="col">
            <p className="text-muted fst-italic mb-3">{subheading}</p>
          </div>
        </div>
      )}
      {content}
    </>
  )
}

export default Page;

