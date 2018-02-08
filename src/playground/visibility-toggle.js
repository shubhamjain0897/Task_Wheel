class Visibility_Toggle extends React.Component{
    constructor(props){
        super(props);
        this.visible=this.visible.bind(this);
        this.state = {
            visibility : false
        }
    }
    visible(){
        this.setState((prevState) =>{
            return{
            visibility : !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick = {this.visible}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && 
                                <div>
                                    <p>Hey Some details you can see now</p>
                                </div>
                       }
            </div>
        );
    }
}


ReactDOM.render(<Visibility_Toggle />,document.getElementById("app"));




// Visibility Toggle
// let visibility=false;
// const visible = ()=>{
//        visibility = !visibility;
//        render();
// };
// const render =() =>{
// const template=(
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick = {visible}>{visibility ? "Hide details" : "Show details"}</button>
//         {visibility && 
//             <div>
//                 <p>Hey Some details you can see now</p>
//             </div>
//         }
//     </div>
// );
// ReactDOM.render(template,app);
// };
// const app = document.getElementById("app");
// render();
