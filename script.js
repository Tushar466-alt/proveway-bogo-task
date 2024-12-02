document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      unit: "1 Unit",
      discount: "10% Off",
      price: "$10.00 USD",
      originalPrice: "$24.00 USD",
      options: [
        { id: 1, size: "S", color: "Black" },
        { id: 2, size: "M", color: "Colour" },
      ],
    },
    {
      unit: "2 Unit",
      discount: "20% Off",
      price: "$18.00 USD",
      originalPrice: "$24.00 USD",
      options: [
        { id: 1, size: "S", color: "Black" },
        { id: 2, size: "M", color: "Colour" },
      ],
    },
    {
      unit: "3 Unit",
      discount: "30% Off",
      price: "$24.00 USD",
      originalPrice: "$24.00 USD",
      options: [
        { id: 1, size: "S", color: "Black" },
        { id: 2, size: "M", color: "Colour" },
      ],
    },
  ];

  const container = document.querySelector("#box-container");

  cards.forEach((_card, index) => {
    const boxWrapper = document.createElement("div");
    boxWrapper.classList.add("box-wrapper");

    const boxHeader = document.createElement("div");
    boxHeader.classList.add("box-header");
    boxHeader.dataset.index = index;

    boxHeader.innerHTML = `
        <div>
          <input type="radio" name="box" value="box${index}" />
          <div>
            <div>
              <h5>${_card.unit}</h5>
              <div>${_card.discount}</div>
            </div>
            <span>Standard price</span>
          </div>
        </div>
        <div>
          <h5>${_card.price}</h5>
          <span>${_card.originalPrice}</span>
        </div>
      `;

    const boxBody = document.createElement("div");
    boxBody.classList.add("box-body");
    boxBody.style.display = "none";
    boxBody.innerHTML = `
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>Size</td>
                  <td>Colour</td>
                </tr>
              </thead>

              <tbody>
                ${_card.options
                  .map(
                    (option) => `
                    <tr>
                    <td>#${option.id}</td>
                    <td>
                        <select>
                        <option value=${option.size}>${option.size}</option>
                        </select>
                    </td>
                    <td>
                        <select>
                        <option value=${option.color}>${option.color}</option>
                        </select>
                    </td>
                    </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
      `;

    boxWrapper.appendChild(boxHeader);
    boxWrapper.appendChild(boxBody);
    container.appendChild(boxWrapper);
  });

  container.addEventListener("click", function (e) {
    if (e.target.closest(".box-header")) {
      const boxHeader = e.target.closest(".box-header");
      const boxIndex = boxHeader.dataset.index;
      const boxBody = boxHeader.nextElementSibling;

      const allBoxBodies = container.querySelectorAll(".box-body");
      allBoxBodies.forEach(function (body) {
        if (body !== boxBody) {
          body.style.display = "none";
        }
      });
      boxBody.style.display =
        boxBody.style.display === "none" ? "block" : "none";
    }
  });
});
