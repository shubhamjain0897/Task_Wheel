"use strict";

// JSX Javascript XML 
var app = {
  Title: "Indecision App",
  Subtitle: "Put your life in the hands of a computer.",
  Options: []
};

var onMakedecision = function onMakedecision() {
  var Randomnum = Math.floor(Math.random() * app.Options.length);
  var option = app.Options[Randomnum];
  alert(option);
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.options.value;

  if (option) {
    app.Options.push(option);
    e.target.elements.options.value = '';
    renderthis();
  }
};
var onclickf = function onclickf(e) {
  e.preventDefault();
  app.Options.length = 0;
  renderthis();
};
var appRoot = document.getElementById("app");
var renderthis = function renderthis() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.Title
    ),
    app.Subtitle && React.createElement(
      "p",
      null,
      app.Subtitle
    ),
    React.createElement(
      "p",
      null,
      app.Options.length > 0 ? "Here are you options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.Options.length == 0, onClick: onMakedecision },
      "What should I do?"
    ),
    React.createElement(
      "ol",
      null,
      app.Options.map(function (opt) {
        return React.createElement(
          "li",
          { key: opt },
          opt
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "options" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { onClick: onclickf },
        " Remove All "
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderthis();
