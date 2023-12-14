
function Page({title, content}) {

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="mt-3">{title}</h1>
        </div>
      </div>
      {content}
    </>
  )
}

export default Page;