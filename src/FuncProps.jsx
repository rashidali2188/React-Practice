function  FuncProps(props) {
    return(
        <h1>hello {props.name}</h1>
    )
}

function ProChild() {
    return(
        <>
        < FuncProps name = "rashid ali" />
        
        </>
        
        
    )
}

export default ProChild;