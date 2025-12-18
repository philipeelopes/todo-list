import Styles from "./BotaoAdicionar.module.css"
import { Plus, FilePlus } from "lucide-react"

export default function BotaoAdicionar({
    texto,
    onClick,
    type = "button",
    variante = "default" }) {



    return (

        <button
            type={type}
            onClick={onClick}
            className={`${Styles.btnAdicionar} ${Styles[variante]}`}
        >
            <span className={Styles.iconBox}>

                <Plus className={Styles.iconNormal} size={18} />
                <FilePlus className={Styles.iconHover} size={18} />
            </span>

            <span> {texto} </span>
        </button>
    )



}