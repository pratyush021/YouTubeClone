import SearchBar from "./SearchBar";



const AppBar=()=>{
    return <div className="flex justify-between pt-1 p-3">
        <div className=" cursor-pointer text-md inline-flex justify-between items-center p-2">
            YouTube
        </div>
        <div>
            <SearchBar/>                   
        </div>
        <div className="cursor-pointer text-md inline-flex justify-between items-center p-2">
            Login
        </div>
    </div>
}

export default AppBar;