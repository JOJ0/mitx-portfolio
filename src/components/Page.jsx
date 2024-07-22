
function Page({title, subheading, content}) {

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <header>
            <h1 className="font-weight-light text-muted py-3">{title}</h1>
            <small>{subheading}</small>
          </header>
        </div>
      </div>
      {content}
    </>
  )
}

export default Page;

