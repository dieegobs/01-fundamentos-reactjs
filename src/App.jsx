import { Post } from "./Post";

import './styles.css';

import { Header } from "./components/header";

export const App = () => {
  return (
    <>
    <Header/>
    <h1>Hello World</h1>
    <Post/>
    </>
  )
}
