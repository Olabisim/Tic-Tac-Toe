'use client'


interface InterfaceButton {
    onClick: () => void,
    text: string
}

export const Button = ({onClick, text}: InterfaceButton ) => {
    return (
            <div className="px-12 py-6 text-white rounded" onClick={onClick}>
                {text}
            </div>
    )
}