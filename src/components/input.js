// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
class TodoInput extends React.Component {

    // Set initial state
    constructor(props) {
        super(props);

        this.state = {
            value: '+',
            active: false
        };
    }

    // Render
    render() {
        const selected = this.props.selected;
        
        // If todo is selected, change the selected todo
        if (selected) {
            return (
                <form onSubmit={this.onChangeSelected.bind(this)}>
                    <input
                        ref={this.focusInput}
                        className={!this.state.active ? 'add_button' : null}
                        value={this.state.value}
                        onFocus={() => {this.setState({value: selected.value, active: true})}}                    
                        onBlur={() => {this.onBlurCancel()}}
                        onChange={(event) => {this.setState({value: event.target.value})}}/>   
                </form>  
            );
        }
        // Return a new todo
        return (
                <form onSubmit={this.onAddTodo.bind(this)}>
                    <input
                        className={!this.state.active ? 'add_button' : null}
                        value={this.state.value}
                        onFocus={() => {this.setState({value: '', active: true})}}
                        onBlur={() => {this.setState({value: '+', active: false})}}
                        onChange={ (event) => {
                            this.setState({value: event.target.value})
                        }}/>
                </form>
            ); 
    }

    // Focus on component
    focusInput(component) {
        if (component) {
            ReactDOM.findDOMNode(component).focus(); 
        }
    }

    // Blur from input
    blurInput() {
        const component = document.querySelector('input');
        if (component) {
            ReactDOM.findDOMNode(component).blur(); 
        }
    }

    // Add new todo, reset initial state
    onAddTodo(event) {
        event.preventDefault();

        if (this.state.value !== '') {
            this.props.addTodo({value: this.state.value, check: false});
            this.setState({
                value: '',
                active: true
            });
        } else {
            this.shakeInput();
        }
    }

    // Change todo, reset the initial state
    onChangeSelected(event) {
        event.preventDefault();
        if (this.state.value !== '') {
            this.props.onChangeTodo(this.state.value);
            this.setState({
                value: '',
                active: true
            });
            this.blurInput();
        } else {
            this.shakeInput();
        }
    }

    // Cancel change todo, reset initial state
    onBlurCancel() {
        this.props.onCancelChange();
        this.setState({
            value: '+', 
            active: false
        });
    }

    // Add a shake effect to the input
    shakeInput() {
        const input = document.querySelector('input');

        input.classList.add('shake');
            setTimeout(() => {
                input.classList.remove('shake');
            },200)
    }
    
};

// Export component
export default TodoInput;