import Palette from "./Palette"
import "../css/MainPalettes.css"

function MainPalettes() {
    const colors = [
        {
            id: 0,
            hex: ["#432529", "#593438", "#6F494C", "#F7BFC1", "#FDD7D8", "#FFEAE9"],
            groups: ["flesh", "autumn", "6"]
        },
        {
            id: 1,
            hex: ["#713987", "#9A6099", "#C28CAE", "#EEAEC5", "#F4F3F7", "#C1BAD3", "#9286B0"],
            groups: ["purple", "spring", "7"]
        },
        {
            id: 2,
            hex: ["#D9FBFF", "#A9E9FF", "#90C2F7", "#85A0EF", "#7D76DF"],
            groups: ["blue", "winter", "5"]
        },
        {
            id: 3,
            hex: ["#A5C1C8", "#CED7DA", "#F6ECEE", "#FCE4E7", "#EFBBCA"],
            groups: [""]
        },
        {
            id: 4,
            hex: ["#BEF9D0", "#7DE8C2", "#73BCCC", "#A96A9B", "#863250", "#411616"],
            groups: [""]
        },
        {
            id: 5,
            hex: ["#FCECBC", "#A3E3F3", "#2CB4EC", "#6C64E4", "#2C3C9C", "#142474"],
            groups: [""]
        },
        {
            id: 6,
            hex: ["#CED3D7", "#9493BF", "#D97D8A", "#E7AF9E", "#F8DE91"],
            groups: [""]
        },
        {
            id: 7,
            hex: ["#4E241E", "#59261F", "#6A2D25", "#60593A", "#57552F", "#4D4628", "#3C3634"],
            groups: [""]
        },
        {
            id: 8,
            hex: ["#09090D", "#202537", "#2342D9", "#74EAF0", "#E1FCE9"],
            groups: [""]
        },
        {
            id: 9,
            hex: ["#CBBCD1", "#C1BBCE", "#BFABBA", "#A892AA", "#8A789B"],
            groups: [""]
        },
        {
            id: 10,
            hex: ["#06051A", "#151A3A", "#152C71", "#6D80A7", "#BBCFED", "#DCEAF6", "#C1B7CE"],
            groups: [""]
        },
        {
            id: 11,
            hex: ["#FFD381", "#FF9028", "#E6380C", "#52140B", "#1D0404", "#040303"],
            groups: [""]
        },
        {
            id: 12,
            hex: ["#323339", "#434855", "#6C7887", "#ADC0CD", "#D5D9E0"],
            groups: [""]
        },
        {
            id: 13,
            hex: ["#36243C", "#914156", "#533041", "#5D4F59", "#232438"],
            groups: [""]
        },
        {
            id: 14,
            hex: ["#0A090B", "#12121C", "#1C1733", "#43245F", "#662A7E"],
            groups: [""]
        },
        {
            id: 15,
            hex: ["#E2EBF4", "#B0C8FF", "#8791ED", "#7D5CDF", "#4C3C9D"],
            groups: [""]
        },
        {
            id: 16,
            hex: ["#201B30", "#2C275C", "#5066A3", "#7BD4CC", "#A3FFD3", "#D6FFE1"],
            groups: [""]
        },
        {
            id: 17,
            hex: ["#2D0F3A", "#542A52", "#2E7A5C", "#32BB92", "#6CF7E9"],
            groups: [""]
        },
        {
            id: 18,
            hex: ["#32E6C5", "#30BFB8", "#3A7A8C", "#34364D", "#25212B", "#1B181F"],
            groups: [""]
        },
        {
            id: 19,
            hex: ["#B6D5E6", "#7F9BB5", "#52537E", "#2C2937", "#1E181F"],
            groups: [""]
        },
        {
            id: 20,
            hex: ["#010104", "#0F0E2A", "#E1E3FD", "#0E0019", "#1F0F23"],
            groups: [""]
        },
        {
            id: 21,
            hex: ["#021B1A", "#032221", "#03624C", "#2CC295", "#01E083", "#F1F7F6"],
            groups: [""]
        },
        {
            id: 22,
            hex: ["#06302B", "#0B453A", "#095544", "#17876D", "#2FA98C", "#AACBC4", "#707D7D"],
            groups: [""]
        },
        {
            id: 23,
            hex: ["#88BAC8", "#4D869B", "#336063", "#333A57", "#422C47"],
            groups: [""]
        },
        {
            id: 24,
            hex: ["#390F10", "#542C43", "#73619A", "#88AED6", "#98DDDED"],
            groups: [""]
        },
        {
            id: 25,
            hex: ["#CA9688", "#AC8A83", "#8D7F7E", "#6F737A", "#516775", "#325C70", "#14506B"],
            groups: [""]
        },
        {
            id: 26,
            hex: ["#2E3531", "#4E6257", "#A0AD9C", "#D8DCCC", "#F6F7ED"],
            groups: [""]
        }
    ]

    //To Copy
    // const reference = {
    //         id: 0,
    //         hex: ["#333","#333","#333","#333","#333","#333","#333"],
    //         groups: [""]
    //     }


    return (
        <div className="container">
            <div className="search-bar">
                {/* Search bar */}
            </div>
            <div className="color-palettes-div">
                {colors.map(colorObj =>
                (
                    <Palette key={colorObj.id} array={colorObj.hex} />
                )
                )}
            </div>
        </div>
    )
}

export default MainPalettes