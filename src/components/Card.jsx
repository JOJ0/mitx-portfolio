function Card(props) {

  return(
    <div className="card mb-3" >
      {props.header && (<div className="card-header">{props.header}</div>)}
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        <p className="card-text">
          {props.text && (props.text)}
        </p>
        <p className="mt-o mb-0">
          {props.repo && (<a href={props.repo} class="btn btn-outline-secondary">Repo</a>)}
          {props.run && (<a href={props.run} class="btn btn-secondary">Run</a>)}
          {props.docs && (<a href={props.run} class="btn btn-secondary">Docs</a>)}
          {props.website && (<a href={props.website} class="btn btn-dark">Website</a>)}
        </p>
          {props.members && (<div className="card-status"><em>Members: {props.members}</em></div>)}
      </div>

    </div>
  )
}

export default Card;
