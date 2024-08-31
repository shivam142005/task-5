document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve input values
    const pizzaType = document.getElementById('pizzaType').value;
    const size = document.getElementById('size').value;
    const toppings = document.getElementById('toppings').value;
    const address = document.getElementById('address').value;

    // Create a confirmation message
    const confirmationMessage = `
        <strong>Order Confirmation:</strong><br>
        Pizza Type: ${pizzaType}<br>
        Size: ${size}<br>
        Toppings: ${toppings}<br>
        Delivery Address: ${address}<br>
        <br>Your order has been placed successfully!
    `;

    // Display the confirmation message
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
});
