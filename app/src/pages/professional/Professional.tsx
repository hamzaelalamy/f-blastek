import { Link } from "react-router-dom";
import Professionals from "../../components/tables/Professionals";

function Professional() {
  return (
    <div>
        <h1 className="text-2xl font-semibold text-black">Professionals List</h1>
        <Professionals/>
        
        <button className="bg-[#20B486] p-2 rounded-md text-sm text-white"><Link to={"/backoffice/professionals/create"}>Add Professional</Link></button>
    </div>
  )
}

export default Professional