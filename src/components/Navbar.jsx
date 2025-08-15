import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.jpg"

const Navbar=()=>{
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        
        navigate('/');
        
    };


    return(
        <>
            <nav className="w-full shadow p-5">
                <div className="flex items-center space-x-5 justify-end">
                    <img src={avatar} className="w-[48px] h-[48px] rounded-full" alt="" />
                    <h1 className="text-xl font-bold mr-15">{username}</h1>
                    <button className="border border-red-600 px-4 py-2 rounded-2xl cursor-pointer hover:bg-red-400 " onClick={handleLogout}>
                        <div className="flex space-x-2 ">
                            <p className="font-medium text-red-700 ">Log Out</p>
                            <svg className="text-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                        </div>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar