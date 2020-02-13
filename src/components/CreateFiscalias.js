import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateFiscalias extends Component {

    state ={
        users: [],
        userSelected: '',
        fiscalia: '',
        municipio: '',
        direccion: '',
        telefono: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount(){        
        this.getUsers();
        if(this.props.match.params.id){
            const res = await axios.get('/api/fiscalias/' + this.props.match.params.id);
        
            this.setState({
                userSelected: res.data.author,
                fiscalia: res.data.fiscalia,
                municipio: res.data.municipio,
                direccion: res.data.direccion,
                telefono: res.data.telefono,
                content: res.data.content,
                date: new Date(res.data.date),
                editing: true,
                _id: this.props.match.params.id

            })
        }
    }
    getUsers = async() =>{
        const res = await axios.get('/api/users/');
         this.setState({
             users: res.data.map(user => user.username),
             userSelected: res.data[0].username
         })
         
    }
    onSubmit = async(e) =>{
        e.preventDefault();
        const newFiscalia ={
            fiscalia: this.state.fiscalia,
            municipio: this.state.municipio,
            direccion: this.state.direccion,
            telefono: this.state.telefono,
            date: this.state.date,
            content: this.state.content,
            author: this.state.userSelected
        };
        if(this.state.editing){
               await axios.put('/api/fiscalias/' + this.state._id, newFiscalia);
        }else{
            await axios.post('/api/fiscalias/', newFiscalia);
        }
        
         
        window.location.href = '/';
    }
    onInputOnChange = e =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    onChangeDate = date =>{
        this.setState({ date })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Fiscalía</h4>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                            value={this.state.userSelected}
                            onChange={this.onInputOnChange}   
                        >
                            {
                                this.state.users.map( user => 
                                <option key={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Fiscalia"
                        name="fiscalia"
                        required
                        value={this.state.fiscalia}
                        onChange={this.onInputOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Municipio"
                        name="municipio"
                        value={this.state.municipio}
                        required
                        onChange={this.onInputOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Dirección"
                        name="direccion"
                        value={this.state.direccion}
                        required
                        onChange={this.onInputOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Telefono"
                        name="telefono"
                        required
                        value={this.state.telefono}
                        onChange={this.onInputOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea name="content" 
                         className="form-control"
                         placeholder="Descripcion"
                         required
                         value={this.state.content}
                         onChange={this.onInputOnChange}
                        >                            
                        </textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Guardar    
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
