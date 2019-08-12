import React, { Component } from "react";

class LifeCycleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: ""
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.setState({
            globalTitle: `Mon formulaire - ${this.state.title}`,
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="title">Titre</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    required
                />
                <input type="submit" value="Valider" />
            </form>
        );
    }

    componentDidMount() {
        console.log("Formulaire rendu");
    }

    componentDidUpdate() {
        console.log("Titre changé");
    }
}

export default LifeCycleForm;
