import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logoTschool.svg';
import menuImg from '../../assets/menu.png';
import btLogout from '../../assets/btLogout.png';

//import api from '../../services/api';

import './style.css';
import '../standard.css';
import '../modal-delete.css';

export default function Event(){
    const [open, setOpen] = useState([0]);

    const schoolId = localStorage.getItem('schoolId');
    const schoolName = localStorage.getItem('schoolName');

    //const id = localStorage.getItem('ongId');

    const history = useHistory();

    /*async function testSession() {
        try {
            await api.post('sessions', { id } );
        } catch {
            history.push('/');
        }
    }*/

    /*useEffect( () => {
        //testSession();
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);*/ //2 parametros - 1)Qual função a ser executada. 2)Quando que a função será executada.

    /*async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    };*/

    function handleDelete(){

    }

    function startDelete(modalId) {
        const modal = document.getElementById(modalId);
        
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            
            if(event.target.id == modalId || event.target.className == 'close-login') {
                modal.classList.remove('show');
            }
        });
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/home');
    }

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

    return(
        <div className="event-container">
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
            
            <div className="body-container">
                <div className="nav-bar-container">
                    <header>
                        <img className="logo" src={logoImg} alt="Tschool"/>
                        <span>Bem vindo Nome Escola</span>

                        <Link className="button" to="events/new">Cadastrar Novo</Link>
                        <button onClick={handleLogout} type="button">
                            <img src={btLogout} alt=""/>
                        </button>
                    </header>
                </div>

                <h1>Eventos cadastrados</h1>

                <div className="dropdown-container">
                    <select id="drop-events">
                        <option value="volvo">Todos os Eventos</option>
                        <option value="Evento 1">Evento 1</option>
                        <option value="Evento 2">Evento 2</option>
                        <option value="Evento 3">Evento 3</option>
                    </select>
                    <select id="drop-classes">
                        <option value="volvo">Todas as Classes</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                    </select>
                </div>

                <ul className="container-list">
                    <li>
                        <strong>Nome</strong>
                        <p>Nome do Evento</p>

                        <strong>Endereço</strong>
                        <p>Endereço do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Data</strong>
                                <p>01/01/2020</p>
                            </div>
                            <div>
                                <strong>Horario Inicial</strong>
                                <p>00:00</p>
                            </div>
                            <div>
                                <strong>Horario Final</strong>
                                <p>00:00</p>
                            </div>
                        </div>

                        <strong>Descrição</strong>
                        <p>Descrição do evento do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Observações</strong>
                                <p>Nome do Evento</p>
                            </div>
                            <div>
                                <strong>Valor</strong>
                                <p>R$80,00</p>
                            </div>
                        </div>

                        <button className="bt-edit">
                            <FiEdit2 size={16} color="#fff" />
                        </button>
                        
                        <button className="bt-lixeira" onClick={ () => startDelete('modal-delete')}>
                            <FiTrash2 size={16} color="#fff" />
                        </button>
                    </li>
                    <li>
                        <strong>Nome</strong>
                        <p>Nome do Evento</p>

                        <strong>Endereço</strong>
                        <p>Endereço do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Data</strong>
                                <p>01/01/2020</p>
                            </div>
                            <div>
                                <strong>Horario Inicial</strong>
                                <p>00:00</p>
                            </div>
                            <div>
                                <strong>Horario Final</strong>
                                <p>00:00</p>
                            </div>
                        </div>

                        <strong>Descrição</strong>
                        <p>Descrição do evento do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Observações</strong>
                                <p>Nome do Evento</p>
                            </div>
                            <div>
                                <strong>Valor</strong>
                                <p>R$80,00</p>
                            </div>
                        </div>

                        <button className="bt-edit">
                            <FiEdit2 size={16} color="#fff" />
                        </button>
                        
                        <button className="bt-lixeira" onClick={ () => startDelete('modal-delete')}>
                            <FiTrash2 size={16} color="#fff" />
                        </button>
                    </li>
                    <li>
                        <strong>Nome</strong>
                        <p>Nome do Evento</p>

                        <strong>Endereço</strong>
                        <p>Endereço do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Data</strong>
                                <p>01/01/2020</p>
                            </div>
                            <div>
                                <strong>Horario Inicial</strong>
                                <p>00:00</p>
                            </div>
                            <div>
                                <strong>Horario Final</strong>
                                <p>00:00</p>
                            </div>
                        </div>

                        <strong>Descrição</strong>
                        <p>Descrição do evento do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Observações</strong>
                                <p>Nome do Evento</p>
                            </div>
                            <div>
                                <strong>Valor</strong>
                                <p>R$80,00</p>
                            </div>
                        </div>

                        <button className="bt-edit">
                            <FiEdit2 size={16} color="#fff" />
                        </button>
                        
                        <button className="bt-lixeira" onClick={ () => startDelete('modal-delete')}>
                            <FiTrash2 size={16} color="#fff" />
                        </button>
                    </li>
                    <li>
                        <strong>Nome</strong>
                        <p>Nome do Evento</p>

                        <strong>Endereço</strong>
                        <p>Endereço do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Data</strong>
                                <p>01/01/2020</p>
                            </div>
                            <div>
                                <strong>Horario Inicial</strong>
                                <p>00:00</p>
                            </div>
                            <div>
                                <strong>Horario Final</strong>
                                <p>00:00</p>
                            </div>
                        </div>

                        <strong>Descrição</strong>
                        <p>Descrição do evento do Evento</p>

                        <div className="group">
                            <div>
                                <strong>Observações</strong>
                                <p>Nome do Evento</p>
                            </div>
                            <div>
                                <strong>Valor</strong>
                                <p>R$80,00</p>
                            </div>
                        </div>

                        <button className="bt-edit">
                            <FiEdit2 size={16} color="#fff" />
                        </button>
                        
                        <button className="bt-lixeira" onClick={ () => startDelete('modal-delete')}>
                            <FiTrash2 size={16} color="#fff" />
                        </button>
                    </li>
                </ul>

                <div id="modal-delete" className="modal-container-login">
                    <div className="delete-container">
                        <section className="form">
                            <h1>Deletar Evento</h1>
                            <p>Tem certeza que deseja deletar este evento?</p>
                            <div className="btn-confirm">
                                <button id="modal-delete" className="button">Cancelar</button>
                                <button className="bt-lixeira">Deletar Evento</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*<Link className="button" to="/incidents/new">Cadastrar novo evento</Link>*/

/*<ul className="events">
                    {incidents.map(incident => (
                        <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={ () =>  handleDeleteIncident(incident.id) } type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    ))}
                </ul>*/

/*

*/