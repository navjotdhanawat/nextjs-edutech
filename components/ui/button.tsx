import React from "react";

interface Props {
    color: 'primary' | 'secondary';
    type?: string;
    children?: React.ReactNode;
    [rest: string]: any;
};

const Button: React.FC<Props> = ({ color = 'primary', type, ...rest }) => {

    const colors = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
        success: "bg-green-500 hover:bg-green-600",
        danger: "bg-red-500 hover:bg-red-600",
        warning: "bg-yellow-500 hover:bg-yellow-600",
        info: "bg-purple-500 hover:bg-purple-600",
        dark: "bg-gray-700 hover:bg-gray-900"
    }

    return (
        <button {...rest} type="button" className={`focus:outline-none text-white text-sm py-2.5 px-5 rounded-md hover:shadow-lg disabled:opacity-50 ${colors[color]}`}>
            {rest.children}
        </button>
    )
}

export default Button