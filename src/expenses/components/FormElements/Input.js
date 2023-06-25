import "./Input.css"

const Input = (props) => {
    return (
        <input className={`input input--${props.className}`}
               type={props.type}
               placeholder={props.placeholder}
               disabled={props.disabled}
               value={props.value}>
        </input>

    )
}

export default Input