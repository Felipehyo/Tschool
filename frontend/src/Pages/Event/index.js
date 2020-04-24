import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logoTschool.svg';
import menuImg from '../../assets/menu.png';
import btLogout from '../../assets/btLogout.png';

import api from '../../services/api';

import './style.css';
import '../side-bar.css';

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
        <div className="profile-container">
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
            
            <div className="body">
                <header>
                    <img className="logo" src={logoImg} alt="Tschool"/>
                    <span>Bem vindo Nome Escola</span>

                    <Link className="button" to="/event/new">Cadastrar novo evento</Link>
                    <button onClick={handleLogout} type="button">
                        <img src={btLogout} alt=""/>
                    </button>
                </header>

                <h1>Eventos cadastrados</h1>

                <ul className="events">
                    <li>teste
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>teste
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>teste
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>teste
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                </ul>
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