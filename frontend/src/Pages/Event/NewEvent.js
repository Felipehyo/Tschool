import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logoTschool.svg';
import menuImg from '../../assets/menu.png';
import btLogout from '../../assets/btLogout.png';

//import api from '../../services/api';

import './style.css';
import '../standard.css';
import '../modal-delete.css';

export default function NewEvent() {
    //Função cadastrar
    const [ name, setName ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ date, setDate ] = useState('');
    const [ hrini, setHrini ] = useState('');
    const [ hrfin, setHrfin ] = useState('');
    const [ descripton, setDescription ] = useState('');
    const [ observation, setObservation ] = useState('');
    const [ value, setValue ] = useState('');

    const [open, setOpen] = useState([0]);
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = ({name, endereco, date, hrini, hrfin, descripton, observation, value});

        try {
            //await api.post('schools', data);
            history.push('/home');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
        }
    };

    //Função deletar
    function handleDelete(){

    }

    //Chamar modal deletar
    function startDelete(modalId) {
        const modal = document.getElementById(modalId);
        
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            
            if(event.target.id == modalId || event.target.className == 'close-login') {
                modal.classList.remove('show');
            }
        });
    }

    //Fazer logout
    function handleLogout() {
        localStorage.clear();
        history.push('/home');
    }

    //Chamar modal SideBar
    function startModal(menuId) {
        const menu = document.getElementById(menuId);
        const text = document.querySelector('.menu-btn');
        if (open==0) {
            menu.classList.add('show');
            text.classList.add('show');
            document.querySelector('.menu-btn h3').classList.add('show');
            setOpen(1);
        } else {
            menu.classList.remove('show');
            text.classList.remove('show');
            document.querySelector('.menu-btn h3').classList.remove('show');
            setOpen(0);
        }
    }

    return (
        <div className="new-event-container">
            <div className="side-bar-container">
                <div className="menu-btn">
                    <img id="imgFix" onClick={ () => startModal("sidebar")} src={menuImg} alt="" height="22px"/>       
                    <h3>Menu</h3>
                </div>
                <div id="sidebar" className="menu">
                    <ul>
                        <li>Eventos</li>
                        <li>Classes</li>
                        <li>Alunos</li>
                        <li>Responsáveis</li>
                        <li>Eventos por Classe</li>
                    </ul>
                </div>
            </div>

            <div className="nav-bar-container">
                <header>
                    <img className="logo" src={logoImg} alt="Tschool"/>
                    <span>Escola Tal</span>

                    <button onClick={handleLogout} type="button">
                        <img src={btLogout} alt=""/>
                    </button>
                </header>
            </div>

            <div className="body-container">
                <div id="modal-register" className="container-register">
                    <div className="content">
                        <section>
                            <img src={logoImg} alt="Tschool"/>
                            <h1>Cadastro</h1>
                            <p>Descreva todas as informações necessárias para o evento, data, local e observações, valor.</p>
                            <Link id="modal-register" className="button" to="/events" >Voltar para Eventos</Link>
                        </section>
                        <form onSubmit={handleRegister}>
                            <input placeholder="Nome do Evento" value={name} onChange={ e => setName(e.target.value) }/>
                            <input placeholder="Endereço" value={endereco} onChange={ e => setEndereco(e.target.value) }/>
                            <div className="input-group">
                                <input placeholder="" value={date} onChange={ e => setDate(e.target.value) } type="date"/>
                                <p>das</p>
                                <input placeholder="" value={hrini} onChange={ e => setHrini(e.target.value) } type="time"/>
                                <p>às</p>
                                <input placeholder="" value={hrfin} onChange={ e => setHrfin(e.target.value) } type="time"/>
                            </div>
                            <textarea placeholder="Descrições" value={descripton} onChange={ e => setDescription(e.target.value) }/>
                            <textarea placeholder="Observações" value={observation} onChange={ e => setObservation(e.target.value) }/>
                            <input placeholder="Valor" type="text" value={value} onChange={ e => setValue(e.target.value) } />

                            <button className="button">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}