import "./App.css";
import SideBarComponent from "./components/SideBarComponent/SideBarComponent";
import MenuRoute from "./routes/MenuRoute";

function App() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SideBarComponent />
            <MenuRoute />
        </div>
    );
}

export default App;
