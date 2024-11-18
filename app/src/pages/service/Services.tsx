import Services from "../../components/Services/tables/Services";
import { Link } from "react-router-dom";

function Service () {
    return(
        <div>
            <h1 className="text-2xl font-semibold text-black">Services List</h1>
            <Services/>
            <button className="bg-[#20B486] p-2 rounded-md text-sm text-white"><Link to={"/backoffice/services/create"}>Add Service</Link></button>
        </div>
    )
}

export default Service;