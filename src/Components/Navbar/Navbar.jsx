import './navbar.css'
const Navbar = () => {
    return (
        <div className="">
            <div className='flex w-full items-center justify-between'>
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
                <nav>
                    <ul id="nav_style" className="flex font-light  text-[1.2rem] justify-center   gap-[1vw] items-center">
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Studio</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;