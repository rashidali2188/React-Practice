function Func(params) {
   
  function Myfunc(param) {
        alert(param);
    }
   
    return (
        <>
        
            <button onClick={() => Myfunc("Hello coder")}>Coder</button>
            <button onClick={() => Myfunc("hello world")}>World</button>
            <button onClick={() => Myfunc("hello Ali")}>Ali</button>
        </>
        

    )


}

export default Func;
