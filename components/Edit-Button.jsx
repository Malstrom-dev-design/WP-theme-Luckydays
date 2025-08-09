export default function EditButton({type}) {
    let icon;

    switch (type) {
        case "add":
            icon = (
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" width="10" height="110" rx="5" fill="black"/>
                    <rect y="60" width="10" height="110" rx="5" transform="rotate(-90 0 60)" fill="black"/>
                </svg>

            )
            break;
    
        default:
            icon = (<div>type missing...</div>)
            break;
    }
    return (
        <button>
            <svg className={type}></svg>
        </button>
    )
    
}