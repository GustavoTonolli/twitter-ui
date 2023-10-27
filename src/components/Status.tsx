import { Header } from "./Header";
import { Separator } from "./Separator";
import { Tweet } from "./Tweet";
import './Status.css'
import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneTilt } from "phosphor-react";



export function Status () {
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha, faz sentido...',
    'Parabéns pelo progresso!'
  ])
  const [newAnswer, setNewAnswer] = useState('')
  function createNewAnswer(e: FormEvent) {
    e.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content='Um tweet qualquer...'/>
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/gustavotonolli.png"
            alt="Gustavo Tonolli"
          />
          <textarea 
          onChange={(e) => {
            setNewAnswer(e.target.value)
          }} 
          name="tweet" 
          id="tweet" 
          placeholder="Tweet your answer" 
          value={newAnswer}
          onKeyDown={handleHotkeySubmit}
          />
        </label>
        <button type="submit">
          <PaperPlaneTilt />
          <span>Answer</span>
        </button>
      </form>
      
      {answers.map((answer, index) => {
        return <Tweet key={index} content={answer} />;
      })}
    </main>
  )
}