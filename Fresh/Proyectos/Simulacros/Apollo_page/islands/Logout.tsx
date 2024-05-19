export default function Logout() {
    const OnLogOut=()=>{
        document.cookie= "auth=; path=/;";
        window.location.href="/login";
    }
    return <a onClick={OnLogOut} className="logout-button">Log Out</a>
}
