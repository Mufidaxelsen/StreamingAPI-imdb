function Navbar (props) {
    return (
    <div>
        <h2>{props.panggilan2}</h2>
        <ul>
            <li>
            <a href="#">Home</a>
            </li>
            <li>
            <a href="#">About</a>    
            </li>
            <li>
            <a href="#">Contact</a>   
            </li>
            <li>
            <a href="#">{props.panggilan1}</a>   
            </li>
        </ul>
    </div>
    );
};

export default Navbar;