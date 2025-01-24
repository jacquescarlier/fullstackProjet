export default function InputForm({ name, type, inputId, autocomplete, onChange, value, disabled }) {

    return (
        <>
            <input
                name={name}
                type={type}
                id={inputId}
                autoComplete={autocomplete}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
        </>
    );
}
