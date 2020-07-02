import React from 'react'

const Article = (props) => {

    const styles = {
        marginTop: 40,
    }

    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase"
            }}>{props.title}</h3>
            <span style={{
                marginBottom: 10,
                display: "block",
                fontSize: 12,
            }}>{props.autor}</span>
            <p>{props.txt}</p>
        </article >
    );
}

export default Article;