export default function HelloWorld(props) {
    if (props.name === undefined) {
        return <h1>Hello, stranger.</h1>
    } else {
        return <h1>Hello, {props.name}.</h1>
    }

    // return (
    //     <div>Hello, {props.name !== undefined ? props.name : "stranger"}</div>
    // )
}
