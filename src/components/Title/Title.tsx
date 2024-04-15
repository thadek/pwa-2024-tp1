//import './Title.module.css'

import style from "./Title.module.css"

export default function Title({title}: {title: string}){ 
  return (
    <h1 className={'prototype'}>{title}</h1>
  )
}