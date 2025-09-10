import logo from "/src/assets/react.svg"
export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={logo}/>
                <p id="title">ReactFacts</p>
            </nav>
        </header>
    )
}