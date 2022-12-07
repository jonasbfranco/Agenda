import './table.css';

function Table({ data }) {
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
                <tr>
                    {/* <td>Imagem</td> */}
                    <td>Jonas Baptista Franco</td>
                    <td>263</td>
                    <td>Vista Alegre</td>

                
                {/* {data.map((item) => (
                <tr className='tr_contatos' key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.ramal}</td>
                    <td>{item.unidade.nome}</td> */}

                </tr>
                {/* ))} */}
            </tbody>
        </table>
    </div>
  );
}

export default Table;
