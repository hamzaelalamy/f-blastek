import React from 'react'
import { Link } from "react-router-dom";
import Clients from '../../components/clients/tables/Clients'
import { link } from 'fs'

function ClientsList() {
  return (
    <div>
        <h1 className="text-2xl font-semibold text-black">Professionals List</h1>
        <Clients />
        
        <button className="bg-[#20B486] p-2 rounded-md text-sm text-white"><Link to={"/backoffice/clients/create"}>Add Clients</Link></button>
     </div>
    
)
}

export default ClientsList