import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './table.css';


function Table() {

  const [ allContacts, setAllContacts ] = useState([])


    useEffect(() => {
        getAllContacts();  
    }, []);
      
    async function getAllContacts() {
      const response = await api.get(`/api/contatos/?_expand=unidade`,);
      setAllContacts(response.data);
    }

  return (
    <div className="Table">
        <table>
            <tbody>
                <tr className='tr_cabecalho'>
                    {/* <th>Profile</th> */}
                    <th>Name</th>
                    <th>Ramal</th>
                    <th>Unidade</th>
                </tr>
                {allContacts.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.ramal}</td>
                        <td>{item.unidade.nome}</td>
                    </tr>    
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Table;
