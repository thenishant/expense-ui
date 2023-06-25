import "./DropDown.css"

const DropDown = (props) => {
    return (
        <select
            className={`select--${props.size || 'default'}`}>
            label={props.label}
            {props.children}
        </select>
    );
}

export function Option(props) {
    return (
        <option selected={props.selected}>
            {props.value}
        </option>
    );
}

export default DropDown