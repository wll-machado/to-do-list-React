import './listHeader.css'

interface Props {
    tasksCounter: number
    checkedTasks: number
  }
  
  export function ListHeader({ tasksCounter, checkedTasks }: Props) {
    return (
      <header >
        <aside>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </aside>
  
        <aside>
          <p>Concluídas</p>
          <span>
            {tasksCounter === 0
              ? tasksCounter
              : `${checkedTasks} de ${tasksCounter}`}
          </span>
        </aside>
      </header>
    )
  }