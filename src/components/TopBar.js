import "../css/TopBar.css"
import ColorInputs from "./ColorInputs";

function TopBar() {
    return (
        <div className="full-top">
            <h1>Color Palettes</h1>
            <p className="subscript">Click on the color to copy their hex codes!</p>
            <ColorInputs />
            <div className="rainbow-seperator"></div>
        </div>
    )
}

export default TopBar;