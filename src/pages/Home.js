import React, { Component } from 'react'
import Article from "../components/Article"

const articles = [
    {
        id: 1,
        title: "czym jest teoria strun?",
        autor: "Jan Nowak",
        txt: "111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut similique perspiciatis, cupiditate molestias iure nostrum distinctio magni assumenda? Quisquam nostrum animi consequatur laboriosam fuga ipsam sapiente repellat, dicta suscipit enim?"
    },
    {
        id: 2,
        title: "czym jest paradoks fermiego?",
        autor: "Jan Kowalski",
        txt: "222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut similique perspiciatis, cupiditate molestias iure nostrum distinctio magni assumenda? Quisquam nostrum animi consequatur laboriosam fuga ipsam sapiente repellat, dicta suscipit enim?"
    },
    {
        id: 3,
        title: "ciemna materia i ciemna energia",
        autor: "Krystyna Zgazowni",
        txt: "333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut similique perspiciatis, cupiditate molestias iure nostrum distinctio magni assumenda? Quisquam nostrum animi consequatur laboriosam fuga ipsam sapiente repellat, dicta suscipit enim?"
    },
]


// ...article - w ten sposób przekazujemy wszystkie właściwości poszczególych elementów tablicy
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;