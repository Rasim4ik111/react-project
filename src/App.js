import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


const App = () => {
    const [posts, setPosts] = useState([{id: 1, title: "Javascript", body: "Javascript is a programming language"},])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (<div className="App">
        <PostForm create={createPost} remove={removePost}/>
        <hr/>
        <div style={{margin: "15px 0"}}>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: "По описанию"}
                ]}
            />
        </div>
        {posts.length
            ? <PostList remove={removePost} posts={posts} title={"Posts List"}/>
            : <h1 style={{textAlign: "center"}}> Посты не найдены! </h1>
        }
    </div>);
};

export default App;




