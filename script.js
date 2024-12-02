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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#box-container");

  cards.forEach((_card, index) => {
    const boxWrapper = document.createElement("div");
    boxWrapper.classList.add("box-wrapper");

    const _head = document.createElement("div");
    _head.classList.add("box-header");
    _head.dataset.index = index;

    _head.innerHTML = `
        <div>
          <input type="radio" name="box" value="box${index}" />
          <div>
            <div>
              <h5>${_card.unit}</h5>
              <div>${_card.discount}</div>
            </div>
            ${index === 0 ? `<span>Standard price</span>` : ""}
          </div>
        </div>
        <div>
          <h5>${_card.price}</h5>
          <span>${_card.originalPrice}</span>
        </div>
      `;

    const _body = document.createElement("div");
    _body.classList.add("box-body");
    _body.style.display = "none";
    _body.innerHTML = `
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

    boxWrapper.appendChild(_head);
    boxWrapper.appendChild(_body);
    container.appendChild(boxWrapper);
  });

  container.addEventListener("click", (e) => {
    if (e.target.closest(".box-header")) {
      const _head = e.target.closest(".box-header");
      const _body = _head.nextElementSibling;
      const radioButton = _head.querySelector("input[type='radio']");

      const isBoxBodyVisible = _body.style.display === "block";
      _body.style.display = isBoxBodyVisible ? "none" : "block";
      radioButton.checked = !isBoxBodyVisible;

      const allBoxBodies = container.querySelectorAll(".box-body");
      allBoxBodies.forEach((body) => {
        if (body !== _body) {
          body.style.display = "none";
          const radioButtons = body.previousElementSibling.querySelector(
            "input[type='radio']"
          );
          radioButtons.checked = false;
        }
      });
    }
  });
});
