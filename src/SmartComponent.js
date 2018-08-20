import React from 'react'

class SmartComponent extends React.Component {
   
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