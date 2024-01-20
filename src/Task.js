export const Task = (props) => {
    return (
        <>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.removeTask(props.id)}>done</button>
        </>
    )
}