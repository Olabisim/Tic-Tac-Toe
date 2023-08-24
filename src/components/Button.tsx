'use client'


interface InterfaceButton {
    onClick?: () => void,
    text: string
}

export const Button = ({onClick, text}: InterfaceButton ) => {
    return (
            <button className="px-12 py-4 text-white text-center rounded bg-[#000080]" onClick={onClick}>
                {text}
            </button>
    )
}