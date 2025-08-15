import { Link } from 'react-router-dom'

const Return = () => {
    return (
        <>
            <div className="w-full flex py-3 px-5 shadow items-center justify-end">
                <button className=" text-sm shadow px-3 py-1 rounded bg-blue-100">
                    <Link to="/home" className="flex space-x-4 items-center">
                        <h1>Retour</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-undo2-icon lucide-undo-2"
                        >
                            <path d="M9 14 4 9l5-5" />
                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                        </svg>
                    </Link>
                </button>
            </div>
        </>
    )
}

export default Return
