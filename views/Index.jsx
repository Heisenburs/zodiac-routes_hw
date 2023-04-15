const React = require('react')


function Index(props) {
    const { signs } = props;
    console.log(signs);
    return (
        <>
            <h1>Zodiac Signs</h1>
            <ul>
                {signs.map((sign, i) => {
                    return (
                        <li><h3><a href={`/signs/${sign.name}`}>{sign.name}</a> </h3>
                            
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

module.exports = Index