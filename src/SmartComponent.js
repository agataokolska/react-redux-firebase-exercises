import React from 'react'

class SmartComponent extends React.Component {
    state = {
        inputText: '',
        displayedText: ''
    }

    onChangeHandler = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }
    onClickHandler = () => {
        this.setState({
            displayedText:this.state.inputText
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.displayedText}</p>

                <input
                    type={'text'}
                    placeholder={'wpisz tekst'}
                    onChange={this.onChangeHandler}
                    value={this.state.inputText}
                />
                <button
                    onClick={this.onClickHandler}

                >
                    pokaż tekst!
            </button>
            </div>
        )
    }
}

export default SmartComponent