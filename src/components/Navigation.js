const Navigation = ({ message, onClick }) => {
    return (
        <div>
            <br/>
            <label>
                {message}
            </label>
            <label className="clickabletext" onClick={onClick}>Click here! </label>
        </div>
    )
}

export default Navigation
