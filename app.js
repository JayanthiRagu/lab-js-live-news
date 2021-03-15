function everything(){
    document.getElementById("everything").classList.add("active");
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a55203f5c2d844ab9ed75c6b806c4b47')
  .then(response => response.json())
  .then(data => {
      console.log(data)
    var count = data.totalResults;
    const myNode = document.getElementById("base");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for(var i=0;i<10;i++)
    {
        var panel = document.createElement('div');
        panel.classList.add("parallax__carousel__cell");
        panel.classList.add("sprite");
        panel.classList.add("panel");

        var img = document.createElement('img');
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("width", "500");
        img.setAttribute("height", "400");

        var title1 = document.createElement('div');
        var content1 = document.createTextNode(data.articles[i].title);
        title1.classList.add("title");
        title1.appendChild(content1);

        var description = document.createElement('div');
        var content2 = document.createTextNode(data.articles[i].description);
        description.classList.add("description");
        description.appendChild(content2);

        panel.appendChild(img);
        panel.appendChild(title1);
        panel.appendChild(description);
        document.getElementById("base").appendChild(panel);
    }
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
}

function top1(){
  document.getElementById("top").classList.add("active");
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a55203f5c2d844ab9ed75c6b806c4b47')
  .then(response => response.json())
  .then(data => {
      console.log(data)
    var count = data.totalResults;

    const myNode = document.getElementById("base");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for(var i=0;i<10;i++)
    {
        var panel = document.createElement('div');
        panel.classList.add("parallax__carousel__cell");
        panel.classList.add("sprite");
        panel.classList.add("panel");

        var img = document.createElement('img');
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("width", "500");
        img.setAttribute("height", "400");

        var title1 = document.createElement('div');
        var content1 = document.createTextNode(data.articles[i].title);
        title1.classList.add("title");
        title1.appendChild(content1);

        var description = document.createElement('div');
        var content2 = document.createTextNode(data.articles[i].description);
        description.classList.add("description");
        description.appendChild(content2);

        panel.appendChild(img);
        panel.appendChild(title1);
        panel.appendChild(description);
        document.getElementById("base").appendChild(panel);
    }
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
}

function country(){
  const country= document.getElementById('country').value;
  fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a55203f5c2d844ab9ed75c6b806c4b47`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
    var count = data.totalResults;

    const myNode = document.getElementById("base");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for(var i=0;i<20;i++)
    {
        var panel = document.createElement('div');
        panel.classList.add("parallax__carousel__cell");
        panel.classList.add("sprite");
        panel.classList.add("panel");

        var img = document.createElement('img');
        img.setAttribute("src", data.articles[i].urlToImage);
        img.setAttribute("width", "500");
        img.setAttribute("height", "400");

        var title1 = document.createElement('div');
        var content1 = document.createTextNode(data.articles[i].title);
        title1.classList.add("title");
        title1.appendChild(content1);

        var description = document.createElement('div');
        var content2 = document.createTextNode(data.articles[i].description);
        description.classList.add("description");
        description.appendChild(content2);

        panel.appendChild(img);
        panel.appendChild(title1);
        panel.appendChild(description);
        document.getElementById("base").appendChild(panel);
    }
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
}
