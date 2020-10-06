// Include truYum form validation functions here
var foodDatas = [
    { id: 1, name: 'Sandwich', price: 99, active: 'Yes', dateOfLaunch: '15/03/2017', category: 'Main Course', freeDelivery: 'Yes' },
    { id: 2, name: 'Burger', price: 129, active: 'Yes', dateOfLaunch: '23/12/2017', category: 'Main Course', freeDelivery: 'No' },
    { id: 3, name: 'Pizza', price: 149, active: 'Yes', dateOfLaunch: '21/08/2017', category: 'Main Course', freeDelivery: 'No' },
    { id: 4, name: 'French Fries', price: 57, active: 'No', dateOfLaunch: '02/07/2017', category: 'Starter', freeDelivery: 'Yes' },
    { id: 5, name: 'Chocolate Brownies', price: 32, active: 'Yes', dateOfLaunch: '02/11/2022', category: 'Dessert', freeDelivery: 'Yes' }
]

var cart = [];

function admin() {
    var adminContent = document.getElementById('admin-content');
    var customerContent = document.getElementById('customer-content');

    adminContent.style.display = 'block';
    customerContent.style.display = 'none';
    displayDataAdmin(foodDatas);
}

function customer() {
    var adminContent = document.getElementById('admin-content');
    var customerContent = document.getElementById('customer-content');

    adminContent.style.display = 'none';
    customerContent.style.display = 'block';
    displayDataCustomer(foodDatas);
}

const displayDataCustomer = function (foodDatas) {
    var tBody = document.getElementById('customer-table');
    tBody.innerHTML = '';

    for (var foodData of foodDatas) {

        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        var col3 = document.createElement('td');
        var col4 = document.createElement('td');
        var col5 = document.createElement('td');
        var addToCart = document.createElement('a');

        col1.textContent = foodData.name;
        row.appendChild(col1);

        col2.textContent = foodData.freeDelivery;
        row.appendChild(col2);

        col3.textContent = foodData.price;
        row.appendChild(col3);

        col4.textContent = foodData.category;
        row.appendChild(col4);

        addToCart.href = "menu-item-list-customer-notification.html";
        addToCart.onclick = function () {
            cart.push(foodData);
        }
        addToCart.textContent = "Add to Cart";
        // addToCart.classList.add('mdl-button','mdl-js-button');

        col5.appendChild(addToCart);
        row.appendChild(col5);
        tBody.appendChild(row);

    }
}

const displayDataAdmin = function (foodDatas) {
    var tBody = document.getElementById('tBodyAdmin');
    tBody.innerHTML = '';

    for (var foodData of foodDatas) {

        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        var col3 = document.createElement('td');
        var col4 = document.createElement('td');
        var col5 = document.createElement('td');
        var col6 = document.createElement('td');
        var col7 = document.createElement('td');
        var edit = document.createElement('a');

        col1.textContent = foodData.name;
        row.appendChild(col1);

        col2.textContent = foodData.price;
        row.appendChild(col2);

        col3.textContent = foodData.active;
        row.appendChild(col3);

        col4.textContent = foodData.dateOfLaunch;
        row.appendChild(col4);

        col5.textContent = foodData.category;
        row.appendChild(col5);

        col6.textContent = foodData.freeDelivery;
        row.appendChild(col6);

        edit.href = "edit-menu-item.html";
        edit.onclick = function () {
            editData(foodData);
        }
        edit.textContent = "Edit";
        // edit.classList.add('mdl-button','mdl-js-button');

        col7.appendChild(edit);
        row.appendChild(col7);
        tBody.appendChild(row);
    }
}

function editData(foodData) {
    var adminContent = document.getElementById('admin-content');
    var editForm = document.getElementById('admin-edit-form');
    adminContent.style.display = 'none';
    editForm.style.display = 'block';
}

if (document.getElementById('page').value == 'customer') {
    displayDataCustomer(foodDatas);
} else if (document.getElementById('page') == 'admin') {
    displayDataAdmin(foodDatas);
} else {
    console.log("not customer / admin page");
}
