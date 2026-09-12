function Props(props){
    return(<>
        <div>
           {JSON.stringify(props)} 
           
        </div>
        {props.children}
        </>
    )
}
export default Props

