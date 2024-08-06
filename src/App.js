/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './estilo.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'Sigam-me os bons',
            'Foi sem querer querendo',
            'São 48 centavos de leite derramados na minha mesa',
            'Eu conheço o Maicão',
            'Cara ela tá tão na sua',
            'Carinha que mora logo ali, passa um dolar',
            'Eu não preciso disso, meu marido tem dois empregos',
            'Ela é branca?',
            'Trágico',
            'Não fui eu',
            'Grande homem'
        ]
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/biscoito.png')} />
                <Button nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return (
            <div>
                <button className='btnAbrir' onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;
 