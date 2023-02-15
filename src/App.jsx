import { Post } from "./Post";

import './global.css';
import styles from './App.module.css';

import { Header } from "./components/header";

import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          <Post
            author="Diego Bittencourt"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Post
            author="Diego Bittencourt"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>


      </div>

    </>
  )
}
