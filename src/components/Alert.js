import React from 'react'

function alert(props) {
    const capital = (word)=>{
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        return word;
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default alert
