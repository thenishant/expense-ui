import "./DropDown.css"

const DropDown = (props) => {
    return (
        <select
            className={`select--${props.size || 'default'}`}
            onChange={props.onChange}>
            label={props.label}
            disabled={props.disabled}
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