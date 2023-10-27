import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Timeline.css'


export function Timeline() {
  const [tweets, setTweets] = useState(['Meu primeiro Tweet!'])
  const [newTweet, setNewTweet] = useState('')
  function createNewTweet(e: FormEvent) {
    e.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/gustavotonolli.png"
            alt="Gustavo Tonolli"
          />
          <textarea 
          name="tweet" 
          id="tweet" 
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => {
            setNewTweet(e.target.value)
          }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet, index) => {
        return <Tweet key={index} content={tweet} />;
      })}
    </main>
  );
}
