import React from "react";
import { Link, useLocation } from "react-router-dom"

const BreadcrumbsPage = () => {
  const location = useLocation();

  let crumbLink = '';
  const crumbPath = location.pathname.split('/')
    .filter((path) => path !== '')
    .map((crumb, index, array) => {
    
      return (
        <React.Fragment key={crumb}>
          <Link to={crumbLink}>
            {crumb}
          </Link>
          {index < array.length - 1 && <span> / </span>}
        </React.Fragment>
      )
    })
  
  return (
    <div className="nav-link">
      {crumbPath}
    </div>
  )
}

export default BreadcrumbsPage;