import React from 'react'

const SmartComponent = (props)=> (

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

export default SmartComponent