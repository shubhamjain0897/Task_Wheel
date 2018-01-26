// JSX Javascript XML 
const app={
    Title: "Indecision App",
    Subtitle: "Put your life in the hands of a computer.",
    Options: [ ]
};

const onMakedecision = () =>{
    const Randomnum=Math.floor(Math.random()*app.Options.length);
    const option = app.Options[Randomnum];
    alert(option);
};

const onFormSubmit =(e) =>{
  e.preventDefault();

  const option = e.target.elements.options.value;

  if(option){
    app.Options.push(option);
    e.target.elements.options.value='';
    renderthis();
  }
};
const onclickf = (e) => {
      e.preventDefault();
      app.Options.length=0;
      renderthis();
};
const appRoot=document.getElementById("app");
const renderthis = () =>{ const template= (
  <div>
      <h1>{app.Title}</h1>
      {app.Subtitle && <p>{app.Subtitle}</p>}
      <p>{app.Options.length>0 ? "Here are you options" : "No options"}</p>
      <button disabled={app.Options.length == 0} onClick={onMakedecision}>What should I do?</button>
      <ol>
        {  app.Options.map((opt) => <li key={opt}>{opt}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options"/>
        <button>Add Option</button>
        <button onClick={onclickf}> Remove All </button>
      </form>
  </div>
  );
  ReactDOM.render(template,appRoot);
};
renderthis();

 
 