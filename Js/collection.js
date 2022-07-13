const buildCard = (title, description, photoUrl, price, productId) => {
    let cardStructure = document.createElement("div");
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h3");
    let cardText = document.createElement("p");
    let cardPrice = document.createElement("h5");
    let cardButton = document.createElement("a");
  

    cardStructure.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");
    cardContainer.classList.add("card", "custom-card", "m-2");
    cardImage.classList.add("card-img-top", "custom-card-image");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "font-mod");
    cardText.classList.add("card-text");
    cardPrice.classList.add("price");
    cardButton.classList.add("btn", "btn-hover", "hola");
  
    
    cardImage.src = photoUrl;
    cardTitle.innerText = title;
    cardText.innerText = `${description}`;
    cardPrice.innerText = `Precio: $${price}`;
    cardButton.innerText = "Details";
    cardButton.href = `/details.html?productId=${productId}`;
  

    cardStructure.appendChild(cardContainer);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardButton);
  
    return cardStructure;
  };
  
  let mainContent = document.getElementById("collection-container");
  
  const createProduct = (title, description, price, imageUrl) => {
    const url = "https://hasturkodecamp-default-rtdb.firebaseio.com/products.json";
  
    const product = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
  
    let productId = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        productId = product.name;
        window.location.href = `/details.html?productId=${productId}`;
      });
  };
  
  const getProduct = (id) => {
    const url = `https://hasturkodecamp-default-rtdb.firebaseio.com/products/${id}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        const card = buildCard(
          product.title,
          product.description,
          product.imageUrl,
          product.price
        );
  
        mainContent.appendChild(card);
      });
  };
  
  const getAllProducts = () => {
    const url = `https://hasturkodecamp-default-rtdb.firebaseio.com/products.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        for (const key in products) {
          const product = products[key];
  
          const card = buildCard(
            product.title,
            product.description,
            product.imageUrl,
            product.price,
            key
          );
  
          mainContent.appendChild(card);
        }
      });
  };
  
  const updateProduct = (title, description, price, imageUrl, productId) => {
    const url = `https://hasturkodecamp-default-rtdb.firebaseio.com/products/${productId}.json`;
  
    const product = {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => {
      if (res.ok) {
        window.location.href = `/details.html?productId=${productId}`;
      } else {
        console.error(res);
      }
    });
  };
  