import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const Remove = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-e1">
      <Link to="/" className="link-e1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="kt"
          alt="website logo"
        />
      </Link>
      <button type="button" className="rr" onClick={Remove}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
