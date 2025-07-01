import "../css/Palette.css"

const copy = (e) => {
    navigator.clipboard.writeText(e.target.id)
}

function Palette({ array }) {

    return (
        <div className="palette">
            {(array.map(color =>
                (<button className="color" id={color} onClick={copy} style={{ backgroundColor: color }} key={color}></button>)
            ))

            }

        </div>
    )
}

export default Palette;


