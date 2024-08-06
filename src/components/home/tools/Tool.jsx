import React from 'react'
import { tools } from '../../../data/tools'

const Tool = () => {

  const prodTools = tools.filter((prodTools => prodTools.type === 'prod'))
  const devTools = tools.filter((devTools => devTools.type === 'dev'))

  const listProTools = prodTools.map((prodTool) =>
      <img key={prodTool.id} src={prodTool.img} alt={prodTool.nameTool}/>
  ) 

  const listDevTools = devTools.map((devTool) =>
    <img key={devTool.id} src={devTool.img} alt={devTool.nameTool} />
  ) 

  return (
    <div className='tool'>
      <h3>Herramientas de desarrollo</h3>
      <div className='list-tools'>
        { listDevTools }
      </div>
      <h3>Herramientas de producción</h3>
      <div className='list-tools'>
        { listProTools } 
      </div>
    </div>
  )
}

export default Tool