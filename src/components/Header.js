import PropTypes from 'prop-types'


const Header = ({ selected }) => {
    return (
        <header>
            <h1>{ selected ? 'Log In' : 'Registration' }</h1>
        </header>
    )
}

Header.defaultProps = {
    selected: false,
}

Header.propTypes = {
    selected: PropTypes.bool,
}

export default Header
