import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='cards'>
            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>What is the purpose of React Router?</h1></Card.Title>
                    <Card.Text>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                    </Card.Text>
                    <button variant="primary"><a  href='https://reactrouter.com/en/v6.3.0/getting-started/concepts'>Know More</a></button>
                </Card.Body>
            </Card>

            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>How does Context API works?</h1></Card.Title>
                    <Card.Text>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </Card.Text>
                    <button variant="primary"><a  href='https://reactjs.org/docs/context.html'>Know More</a></button>
                </Card.Body>
            </Card>

            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>What is useRef hook in React?</h1></Card.Title>
                    <Card.Text>
                    Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.

                    However, useRef() is useful for more than the ref attribute. Its handy for keeping any mutable value around similar to how youd use instance fields in classes.

                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.

                    Keep in mind that useRef doesnt notify you when its content changes. Mutating the .current property doesnt cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


                    </Card.Text>
                    <button variant="primary"><a  href='https://reactjs.org/docs/hooks-reference.html#:~:text=Essentially%2C%20useRef%20is%20like%20a,node%20whenever%20that%20node%20changes.'>Know More</a></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;