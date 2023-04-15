const React = require('react');

function Display(props) {

    console.log(props.signs);

    return (
        <>
            <h1>Info</h1>
            <h2>{ props.name }</h2>
            {/* <h3>{ signs.symbol }</h3>
            <h4>{ signs.date }</h4> */}
           
        </>
    )
}

module.exports = Display; 