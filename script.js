document.addEventListener("DOMContentLoaded", function () {
  const menButton = document.getElementById("men-button");
  const womenButton = document.getElementById("women-button");
  const childButton = document.getElementById("child-button");
  const productContainer = document.getElementById("product-container");

  function fetchProducts(category_name) {
    const apiUrl =
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        productContainer.innerHTML = "";
        console.log(data);
        // console.log(data.categories[0].category_products);
        data.categories.forEach((product) => {
          if (product.category_name === category_name) {
            // console.log(category_name);

            product.category_products.forEach((pro) => {
              const card = document.createElement("div");
              card.classList.add("product-card");
              const parentdiv = document.createElement("div");
              const parentdiv2 = document.createElement("div");

              card.classList.add("parentdiv");

              const image = document.createElement("div");
              image.classList.add("product-image");
              image.innerHTML = `<img src="${pro.image}" alt="${pro.title}">`;

              const name = document.createElement("h5");
              name.textContent = pro.title;

              const badge = document.createElement("span");
              badge.textContent = pro.badge_text;
              badge.classList.add("badge");

              const price = document.createElement("p");

              price.textContent = `Rs ${pro.price}`;

              const button = document.createElement("button");
              button.textContent = "Add to Cart";

              const vendor = document.createElement("p");
              vendor.textContent = `${pro.vendor}`;

              const compareAtPrice = document.createElement("h5");

              compareAtPrice.textContent = `${pro.compare_at_price}`;
              const percentageOff = document.createElement("span");

              percentageOff.textContent = "50% off";

              card.appendChild(image);

              const test = card.appendChild(parentdiv);
              test.classList.add("title_brand");

              test.appendChild(name);
              test.appendChild(vendor);
              const price2 = card.appendChild(parentdiv2);
              price2.appendChild(price);
              price2.classList.add("price");
              price2.appendChild(compareAtPrice);
              price2.appendChild(percentageOff);

              card.appendChild(badge);
              card.appendChild(button);

              productContainer.appendChild(card);
            });
          }
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  menButton.addEventListener("click", () => fetchProducts("Men"));
  womenButton.addEventListener("click", () => fetchProducts("Women"));
  childButton.addEventListener("click", () => fetchProducts("Kids"));

  fetchProducts("Men");
});
