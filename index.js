//Comonly asked questions 1
const qaItems = [
	{
		question: "How do I track my package?",
		answer:
			"You can easily track your package using our online tracking number on our website to get real-time updates on your deliverie's status",
	},
	{
		question: "What should I do if my package is damaged or lost?",
		answer:
			"If your package arrives damaged or lost in transit, please contact us immediately. We will investigate the matter and arrange for a replacement or refund as per our policy.",
	},
	{
		question: "Can I change my delivery address after placing an order?",
		answer:
			"Yes, you can change your delivery address as long as the package has not been dispatched. Please contact our customer service team as soon as possible to make any changes.",
	},
	{
		question: "Are there any items that cannot be shipped?",
		answer:
			"Yes. there are certain restrictions on items that can be shipped due to safety and legal reasons. Please refer to our shipping policy or contact us for more information on prohibited items",
	},
];

const accordionDiv = document.getElementById("accordion");

qaItems.forEach((qaItem) => {
	const questionText = qaItem.question;
	const answerText = qaItem.answer;
	const br = document.createElement("br");

	// const { questionText: question, answerText: answer } = qaItem;

	const questionDiv = document.createElement("div");
	questionDiv.classList.add("accordion-question");
	questionDiv.textContent = questionText;

	const answerDiv = document.createElement("div");
	answerDiv.classList.add("accordion-answer");
	answerDiv.textContent = answerText;

	questionDiv.appendChild(answerDiv);

	questionDiv.addEventListener("click", () => {
		questionDiv.classList.toggle("active");
		answerDiv.classList.toggle("active");
	});

	accordionDiv.appendChild(questionDiv);

	accordionDiv.appendChild(br);
});

class DatabaseObject {
	ToString() {
		throw new Error("Not implemented");
	}
}

class Product {
constructor(name, inventory) {}
}

ToString() {
	return `${this.name}: ${inventory} left in stock`;
}

class Delivery {
constructor(address, scheduledtime, product, quantity) {}
}

toString() {
	return `Delivering ${quantity} of ${product} to ${address} at ${scheduledtime}`;
}

class ProductDao {
static seeds = [
	{
	name: "apples",
	inventory: 100,
},
{
	name: "bananas",
	inventory: 80,
},
{
	name: "peaches",
	inventory: 70,
},
]

	getAll() {
throw new Error("not implemented");
	}
	update(product) {
throw new Error("not implemented");
	}
}

class SessionStorageProductDao extends ProductDao {

constructor() {
	this.database = sessionStorage;
}

		getAll() {
const productsAsJSON = this.database.getItem("products");
const productsData = productsAsJSON ? JSON.parse(productsAsJSON) : ProductDao.seeds;
return productsData.map((productsData) => {
	const { name, inventory } = productData
 	new Product(name, inventory)
 	}
}

	update(product) {
const existingproducts = this.getAll();
const indexToDelete = existingproducts.findIndex((productInList) => productInList.name == product.name);
existingproducts.splice(indexToDelete, 1, product);
	}
}

class DeliveryDao {
	getAll() {
throw new Error("not implemented");
	}
	create(delivery) {
throw new Error("not implemented");
	}
}

class SessionStorageProductDao extends DeliveryDao {
	constructor() {
		this.database = sessionStorage;
	}
		getAll() {
const deliveriesAsJSON = this.database.getItem("deliveries")
return JSON.parse(deliveriesAsJSON);
	}
	create(delivery) {
const deliveries = this.getAll();
deliveries.push(delivery);
this.database.setItem("deliveries", deliveries);
	}
}

// class cookiesStorageProductDao extends ProductDao {

// 	constructor() {
// 		this.database = document.cookie;
// 	}
// 	getAll() {
// const productsAsJSON = this.database.getItem("products");
// return productsAsJSON ? JSON.parse(productsAsJSON) : [];
// 	}

// 	updateProduct() {
// const existingproducts = this.getAll();
// const indexToDelete = existingproducts.findIndex((productInList) => productInList.name == product.name);
// existingproducts.splice(indexToDelete, 1, product);
// 	}
// }