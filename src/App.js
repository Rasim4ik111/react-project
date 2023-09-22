import React, {useState} from 'react';
import PostItem from "./components/PostItem";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";


const App = () => {
    const [posts, setPosts ] =useState([
        {id: 1, title:"Javascript", body:"Description"},
        {id: 2, title:"Python", body:"Description"},
        {id: 3, title:"C#", body:"Description"}
    ])
    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Post Name"/>
                <input type="text" placeholder="Post Description"/>
                <MyButton>Create</MyButton>
            </form>
            <PostList posts={posts} title={"Posts List"}/>
        </div>
    );
};

export default App;