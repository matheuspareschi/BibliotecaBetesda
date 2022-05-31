import { WarningOctagon } from "phosphor-react";
import './err.css'

const Err = () => {
    return (
        <div className="warning">
            <WarningOctagon className="imgWarning" size={150} color="#440808" weight="duotone" />        
            <p> Está pagina não existe.</p>
        </div>
    )
}

export default Err;