import { useLocation } from 'react-router-dom'
import { ROUTE_SUBHEADINGS } from '../constants/titles.js'

function Page({title, content}) {

  const { pathname } = useLocation()
  const subheading = ROUTE_SUBHEADINGS[pathname.replace(/\/+$/, '') || '/'] || ''

  return (
			<>
				<div className="row d-md-none">
					<div className="col">
						<header>
							<h1 className="font-weight-light text-muted pt-3 pb-0 mb-0 lh-1">
								{title}
							</h1>
							<div className="page-subheading text-muted fst-italic mt-1 mb-3">
								{subheading}
							</div>
						</header>
					</div>
				</div>
				<div className="page-spacer d-none d-md-block" />
				{content}
			</>
		);
}

export default Page;

