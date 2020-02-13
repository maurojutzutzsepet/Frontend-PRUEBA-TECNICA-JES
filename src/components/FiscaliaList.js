import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class FiscaliaList extends Component {
    state ={
        fiscalias: []
    }

    componentDidMount(){
        this.getFisc();
    }

    getFisc = async() =>{
        const res = await axios.get('/api/fiscalias')
        this.setState({fiscalias: res.data})        
    }

    deletefn = async(id) =>{
        await axios.delete('/api/fiscalias/' + id)
        this.getFisc();
    }

    render() {
        return (
            
            <div className="row">
                <div className="col-md-12 p-2">
                    <div className="card-header">
                        <h3>Fiscalias de Guatemala</h3>
                    </div>
                    

                    <div className="card-body">
                    <table class="table table-striped  table-sm table-responsive">
                         <thead className="table-dark">
                            <tr>                            
                            <th scope="col">Nombre</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Encargado</th>
                            <th scope="col">Fecha Insercion</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fiscalias.map( fisc =>
                            <tr key={fisc._id}>
                            <td>{fisc.fiscalia}</td>
                             <td>{fisc.municipio}</td>
                             <td>{fisc.direccion}</td>
                             <td>{fisc.telefono}</td>
                             <td>{fisc.content}</td>
                             <td>{fisc.author}</td>
                             <td>{new Date(fisc.date).toLocaleDateString("es-ES")}</td>
                             <td><button 
                             className="btn btn-danger btn-sm"
                             onClick={() => this.deletefn(fisc._id)}
                             >Delete</button></td>
                             <td>
                                 <Link className="btn btn-warning btn-sm" to={"/edit/" + fisc._id}>
                                 Editar
                                 </Link>
                                 </td>
                             </tr>
                             
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
