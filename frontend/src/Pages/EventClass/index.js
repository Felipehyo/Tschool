import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logoTschool.svg';
import menuImg from '../../assets/menu.png';
import btLogout from '../../assets/btLogout.png';
import icClose from '../../assets/close.png';

import api from '../../services/api';

import './style.css';
import '../standard.css';
import '../modal-delete.css';

export default function EventClass(){
    const schoolId = localStorage.getItem('schoolId');
    const schoolName = localStorage.getItem('schoolName');

    //const id = localStorage.getItem('ongId');

    //Função cadastrar
    const [ eventClass, setEventClass ] = useState([]);

    const [ classList, setClassList ] = useState([]);
    const [ eventList, setEventList ] = useState([]);

    const [ id_class, setClasse ] = useState('');
    const [ id_event, setEvents ] = useState('');

    const [open, setOpen] = useState(0);
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = ({id_event, id_class});

        try {
            await api.post('eventclass', data, {
                headers: {
                    Authorization: schoolId,
                }
            });
            window.location.reload();
        } catch(err) {
            alert('Associação já existe.');
        }
    };

    //Carregar lista do banco
    useEffect( () => {
        api.get('eventclass', {
            headers: {
                Authorization: schoolId,
            }
        }).then(response => {
            setEventClass(response.data);
        });
        api.get('class', {
            headers: {
                Authorization: schoolId,
            }
        }).then(response => {
            setClassList(response.data);
        });
        api.get('event', {
            headers: {
                Authorization: schoolId,
            }
        }).then(response => {
            setEventList(response.data);
        });
    }, [schoolId]); //2 parametros - 1)Qual função a ser executada. 2)Quando que a função será executada.

   function startModalDelete(id) {
        const modal = document.getElementById('modal-delete');
        const event = document.querySelector('div.btn-confirm button.bt-lixeira');
        const cancel = document.querySelector('div.btn-confirm button#modal-delete');

        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            if(event.target.id === 'modal-delete' || event.target.id === 'bt-lixeira-event') {
                modal.classList.remove('show');
            }
        });

        const addDelete = async () => {
            try {
                await api.delete(`eventclass/${id}`, {
                    headers: {
                        Authorization: schoolId,
                    }
                });
                setEventClass(eventClass.filter(evclass => evclass.id !== id))
            } catch (err) {
                alert('Erro ao deletar Associação, tente novamente.');
            }
        }

        //Evento para remover evento do botão e não deletar todos os eventos que foram clicados ao mesmo tempo
        cancel.addEventListener('click', () => { event.removeEventListener('click', addDelete) });
        
        event.addEventListener('click', addDelete);
        event.addEventListener('click', () => { event.removeEventListener('click', addDelete) });
    }

    function startModal(modalId) {
        const modal = document.getElementById(modalId);
        
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            
            if(event.target.id === modalId || event.target.className === 'close-login') {
                modal.classList.remove('show');
            }
        });
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    function startSideBar(menuId) {
        const menu = document.getElementById(menuId);
        const text = document.querySelector('.menu-btn');
        if (open === 0) {
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
        <div className="event-class-container">
            <div className="side-bar-container">
                <div className="menu-btn">
                    <img id="imgFix" onClick={ () => startSideBar("sidebar")} src={menuImg} alt="" height="22px"/>       
                    <h3>Menu</h3>
                </div>
                <div id="sidebar" className="menu">
                    <ul>
                        <Link to="/events"><li>Eventos</li></Link>
                        <Link to="/classes"><li>Classes</li></Link>
                        <Link to="/students"><li>Alunos</li></Link>
                        <Link to="/responsibles"><li>Responsáveis</li></Link>
                        <Link to="/eventsbyclass"><li>Eventos por Classe</li></Link>
                        <Link to="/participants"><li>Alunos Autorizados</li></Link>
                    </ul>
                </div>
            </div>
            
            <div className="body-container">
                <div className="nav-bar-container">
                    <header>
                        <img className="logo" src={logoImg} alt="Tschool"/>
                        <span>{schoolName}</span>

                        <button className="bt-register" onClick={ () => startModal('modal-event-class') }>Add Evento para Classe</button>
                        <button onClick={handleLogout} type="button">
                            <img src={btLogout} alt=""/>
                        </button>
                    </header>
                </div>

                <h1>Eventos por Classe</h1>

                <ul className="container-list">
                    {eventClass.map( (evclass) => (
                        <li key={evclass.id}>
                            <div className="group">
                                <div>
                                    <strong>Evento</strong>
                                    <p>{evclass.title}</p>
                                </div>
                                <div>
                                    <strong>Classe</strong>
                                    <p>{evclass.nameclass}</p>
                                </div>
                            </div>

                            <button className="bt-lixeira" onClick={ () => startModalDelete(evclass.id) }>
                                <FiTrash2 size={16} color="#fff" />
                            </button>
                        </li>
                    ))}
                </ul>

                <div id="modal-event-class" className="modal-register-container">
                    <div className="content">
                        <section>
                            <img src={logoImg} alt="Tschool"/>
                            <h1>Add Evento para Classe</h1>
                            <p>Informe o nome do evento e o nome da classe conforme cadastrados no banco.</p>
                        </section>
                        <form onSubmit={handleRegister}>
                            <select id="drop-classes" onChange={ e => setEvents(e.target.value) }>
                                <option value="" >Selecione um Evento</option>
                                {eventList.map( (event) => (
                                    <option key={event.id_event} value={event.id_event} onChange={ e => setEvents(event.id_event) }>
                                        {event.title}
                                    </option>
                                ))}
                            </select>

                            <select id="drop-classes" onChange={ e => setClasse(e.target.value) }>
                                <option value="" >Selecione uma Classe</option>
                                {classList.map( (classe) => (
                                    <option key={classe.id_class} value={classe.id_class} onChange={ e => setClasse(classe.id_class) }>
                                        {classe.nameclass}
                                    </option>
                                ))}
                            </select>

                            <button className="button">Adicionar evento para classe</button>
                            <span className="close-register" id="modal-event-class">
                                <img id="modal-event-class" src={icClose} alt="" height="18px"/>
                            </span>
                        </form>
                    </div>
                </div>

                <div id="modal-delete" className="modal-container-delete">
                    <div className="delete-container">
                        <section className="form">
                            <h1>Deletar Relação</h1>
                            <p>Tem certeza que deseja deletar esta relação?</p>
                            <div className="btn-confirm">
                                <button id="modal-delete" className="button">Cancelar</button>
                                <button id="bt-lixeira-event" className="bt-lixeira">Deletar Relação</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}