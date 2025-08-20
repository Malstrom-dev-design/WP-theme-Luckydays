export default function EditButton({ 
    type = "add", 
    color = "black", 
    size = "medium", 
    onClick, 
    className = "", 
    disabled = false,
    transform = ""
}) {
    // Define icon configurations
    const icons = {
        add: (
        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="1" width="6" height="48" rx="3" fill={color}/>
            <rect x="1" y="28" width="6" height="48" rx="3" transform="rotate(-90 1 28)" fill={color}/>
        </svg>
        ),
        delete: (
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill={color}/>
            </svg>
        ),
        close: (
        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="45" y1="3.24264" x2="3.24264" y2="45" stroke={color} stroke-width="6" stroke-linecap="round"/>
            <line x1="3.24264" y1="3" x2="45" y2="44.7574" stroke={color} stroke-width="6" stroke-linecap="round"/>
        </svg>

        ),
        arrow: (
        <svg width="100%" height="100%" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.585786 16.4142C-0.195262 15.6332 -0.195262 14.3668 0.585786 13.5858L13.3137 0.857864C14.0948 0.0768147 15.3611 0.0768146 16.1421 0.857863C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585786 16.4142ZM4 15L4 17L2 17L2 15L2 13L4 13L4 15Z" fill={color}/>
        </svg>
        )
    };

    // Define size configurations
    const sizes = {
        small: "w-6 h-6",
        medium: "w-8 h-8", 
        large: "w-12 h-12",
        xlarge: "w-16 h-16"
    };

    // Get the icon and size classes
    const icon = icons[type] || icons.add;
    const sizeClass = sizes[size] || sizes.medium;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${sizeClass}
                flex items-center justify-center
                rounded-lg transition-all duration-200
                hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
                ${className}
            `}
            style={{transform: transform}}
            type="button"
        >
            {icon}
        </button>
    );
}