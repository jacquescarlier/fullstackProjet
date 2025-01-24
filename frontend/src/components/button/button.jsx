
export default function button({ title, classButton, type, onClick, styleButton }) {
    return (
        <>
            <button
                className={classButton}
                type={type}
                onClick={onClick}
                style={styleButton}
            >
                {title}
            </button>
        </>
    );
};

