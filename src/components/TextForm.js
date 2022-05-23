import React, { useState } from 'react'

export default function TextForm(props) {
    const handleonchange = (event) => {
        console.log("Onchange");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let temp = text.toUpperCase();
        setText(temp);
        props.showAlert("converted to UpperCase", "success");
    }
    const handleDownClick = () => {
        let temp = text.toLowerCase();
        setText(temp);
        props.showAlert("converted to LowerCase", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const download = () => {
        let value = text;
        const hiddenelement = document.createElement('a');
        hiddenelement.href = 'data:attachment/text,' + encodeURI(value);
        hiddenelement.target = "_blank";
        hiddenelement.download = 'myfile.txt';
        hiddenelement.click();
        props.showAlert("Downloaded", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='my-3'>
                <div className="container mb-3" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handleonchange} id="myForm" rows="10" value={text} style={{ backgroundColor: props.mode == 'light' ? 'white' : '#122131', color: props.mode == 'light' ? 'black' : 'white' }}></textarea>
                    <button className="btn btn-primary my-3 mx" onClick={handleUpClick} style={{backgroundColor : props.mode==='light' ? 'blue' : '#122131'}}>Convert the Text To UpperCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick} style={{backgroundColor : props.mode==='light' ? 'blue' : '#122131'}}>Convert the Text To LowerCase</button>
                    <button className="btn btn-primary my-3 mx" onClick={download} style={{backgroundColor : props.mode==='light' ? 'blue' : '#122131'}}>Download Text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleCopy} style={{backgroundColor : props.mode==='light' ? 'blue' : '#122131'}}>Copy Text</button>
                    <button className="btn btn-primary my-3" onClick={handleExtraSpaces} style={{backgroundColor : props.mode==='light' ? 'blue' : '#122131'}}>Remove Extra Space</button>
                </div>
            </div>
            <div className='container' style={{ color: props.mode == 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>Contains {Math.min(text.split(" ").length, text.length)} words and {text.length} characters</p>
                <p>Average reading time {0.008 * text.split(" ").length} min</p>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>

    )
}
