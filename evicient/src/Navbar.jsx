export default function Navbar() {
    return (
    <nav className= "nav">
        <a id = "main-anchor" href = "/" className="site-title"> evicient</a>
        <ul>
            <li>
                <a id = "anchor" href="/login">login</a>
            </li>
        </ul>
    </nav>
    );
}