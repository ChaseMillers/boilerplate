import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Form from "../form/Form"
import useForm from "../form/useForm";
import validate from '../form/AddValidation';

const Home = () => {
    // Our State
    const [asins, setAsins] = useState();
    const [nextAsin, setAsin] = useState(0);
    const [newAsinLabel, setNewAsinLabel] = useState("");

    // useEffect is are "componentDidMount()"
    useEffect(() => {
        axios
            .get(
                "https://gist.githubusercontent.com/ChaseMillers/9e41658acde66446a341df66bb99e88b/raw/3dd3932f0f165d168a530c4d106f0daa9e5a16b5/json%2520object"
            )
            .then(({ data }) => {
                setAsins(data);
                setAsin(data.length);
            });
    }, []);
     
    
    const markTodoAsDone = (id, done) =>
        setAsins(asins.map(todo => (todo.id === id ? { ...todo, done } : todo)));
    
    const removeTodo = id => setAsins(asins.filter(todo => todo.id !== id));
    
    function addNewAsin (){
        console.log("Home call back was called")
    // json file key: null = pending, "" = None found, True = passed, false = rejected 
        setAsins([
            ...asins,
            {
            id: nextAsin,
            label: newAsinLabel,
            done: null,
            }
        ]);
        setAsin(nextAsin + 1);
        setNewAsinLabel("");
    };
    
// is todaos true? render, if not.. Loading


    return asins ? (    
    <div className="home-page">
        <div className="home-page">
            <nav className="nav-bar">
                <h1>Amazon Asin Tracker</h1>
            </nav>
            <header className="header">
                <h2>Enter asin number here:</h2>
                <form>
                <input
                type="text" name="text"
                value={newAsinLabel}
                onChange={({ target }) => setNewAsinLabel(target.value)}
                />
                <input type="button" value="Add" onClick={addNewAsin}/>
                </form>
                <h4>Asin List:</h4>
                
                <Form/>

            </header>
        </div>

      <ul className="asin-list">
        {asins.map(todo => (
                <li key={todo.id}>
                <button className="close" onClick={() => removeTodo(todo.id)}>X</button>
                <span className="asin-number">{todo.label}</span>
                <span 
                className={
                todo.done ? "passed" : 
                todo.done === false ? "rejected" :
                todo.done === null ? "no-asin" :
                "pending"
                }>
                {todo.done ? "PASSED" : 
                todo.done === false ? "REJECTED" :
                todo.done === null ? "NO ASIN FOUND" :
                "PENDING"}
                </span>
            </li>
        ))}
      </ul>

      <div className="new-asin">
        
        </div>
    </div>
    
    ) : (
    <div className="loading">Loading...</div>
  );
};
export default Home;