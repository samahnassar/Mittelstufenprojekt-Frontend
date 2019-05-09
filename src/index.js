import "./styles.css";

var myRequest = new Request("https://81wwzq2q2l.sse.codesandbox.io/");

fetch(myRequest)
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.text();
  })
  .then(function(text) {
    document.getElementById("app").innerHTML = text;
  })
  .catch(function(error) {
    document.getElementById("app").innerHTML = "Error: " + error.message;
  });

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
