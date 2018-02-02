// Visibility Toggle

let visibility=false;

const visible = ()=>{
       visibility = !visibility;
       render();
};
const render =() =>{
const template=(
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {visible}>{visibility ? "Hide details" : "Show details"}</button>
        {visibility && 
            <div>
                <p>Hey Some details you can see now</p>
            </div>
        }
    </div>
);
ReactDOM.render(template,app);
};
const app = document.getElementById("app");

render();
