import './Error.css';

function Error({ message }) {
    return(
        <h3 className="error-message">{message}</h3>
    )
}

export default Error;