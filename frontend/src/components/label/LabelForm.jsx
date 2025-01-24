export default function LabelForm({ htmlFor, labelTitle, labelClass }) {

    return (
        <>
            <label htmlFor={htmlFor} className={labelClass}>{labelTitle}
            </label>
        </>
    );
}