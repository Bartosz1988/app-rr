import React, { Component, createFactory } from 'react'
import "../styles/Contact.css"
//komponent służący do zabezieczenia formularza. Działa wtedy kiedy następuje zmiana ścieżki
import { Prompt } from "react-router-dom"

class ContactPage extends Component {
    //w state będzie wartość formularza
    state = {
        valueForm: "",
        isEmpty: true,
    }

    handleSend = (e) => {
        e.preventDefault();
        this.setState({
            valueForm: "",
            isEmpty: true,
        })
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                valueForm: e.target.value,
                isEmpty: false
            })
        }
        else {
            this.setState({
                valueForm: e.target.value,
                isEmpty: true
            })
        }

    }


    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSend}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.valueForm} onChange={this.handleChange} placeholder={"Wpisz wiadomość"}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    //piszemy w when value ze state, bo jesli cos w nim będzie to warunek będzie spelniony
                    when={!this.state.isEmpty}
                    message="nie wysłałeś formularza"
                />
            </div>
        );
    }
}

export default ContactPage;