import React from 'react';
import './Article.css'
const Article = () => {
    return (
        <div className='article-style'>
            <div>
                <h2>1) How react works?</h2>
                <p>React is a javascript library for building user interfaces. Basically under the hood react creat a virtual dom. when we modify or change our code, react compare actual dom with its virtual dom. By doing this it can easily identify what change is made in the actuall dom with the help of diff algorithm. Then its only modify the changing portion but the rest data will remain unchange. By doing this type of work and with the help of React Fiver Architecture it help us to maintain a really good perfomance.</p>
            </div>
            <div>
                <h2>2) Props vs state?</h2>
                <p>State is something that can be chinage. Props can never be changed. Props are read only. The state is where we declare our data. If you want to send from there, you have to send as props.
                Where the state is being changed or modified is called stateful components. And the components in which props are only declared but have no state is called stateless components.
                Another difference is props can be accessed by the child component. But State cannot be accessed by child components.</p>
            </div>
        </div>
    );
};

export default Article;