import React from 'react'
import { connect } from 'react-redux'
import{ displayTextAction, inputAction} from './state/smartComponent'

const SmartComponent = (props) => (

    <div>
        <p>{props.displayedText}</p>

        <input
            type={'text'}
            placeholder={'wpisz tekst'}
            onChange={props.onChangeHandler}
            value={props.inputText}
        />
        <button
            onClick={props.onClickHandler}

        >
            pokaż tekst!
            </button>
    </div>

)
const mapStateToProps = state => ({
    displayedText: state.smartComponent.displayedText,
    inputText: state.smartComponent.inputText
})

const mapDispatchToProps = dispatch => ({
    onChangeHandler: event => dispatch(inputAction(event.target.value)),
    onClickHandler: () => dispatch(displayTextAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent)