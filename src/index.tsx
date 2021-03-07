import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {DraggableUserList} from './pages/dragDrop'
import {PageWithForm} from './pages/PageWithForm'
const Application: React.FC<{}> = () => (
    <>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/dragDrop">Drag n Drop</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/useFormatted">Custom Hook</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/dragDrop">
                        <DraggableUserList />
                    </Route>
                    <Route path="/form">
                        <PageWithForm/>
                    </Route>
                    <Route path="/useFormatted">
                        {/* <Dashboard /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
);

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
render(<Application />, document.getElementById('root'));