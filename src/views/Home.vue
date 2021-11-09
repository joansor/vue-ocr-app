<template>
	<div id="app" class="app">
		<h1>{{ restaurantName }}</h1>
		<p class="description">
			Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
			notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
			matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
			est difficile de s'arrêter.
		</p>

		<section class="menu">
			<h2>Menu</h2>
			<MenuItem
				v-for="item in simpleMenu"
				:addToShoppingCart="addToShoppingCart"
				:name="item.name"
				:image="item.image"
				v-model:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
			/>
		</section>

		<aside class="shopping-cart">
			<h2>Panier d'achat : {{ shoppingCart }} articles</h2>
		</aside>

		<footer class="footer">
			<p>{{ copyright }}</p>
		</footer>
	</div>
</template>

<script>
import MenuItem from "../components/MenuItem"
export default {
	name: "Home",
	components: {
		MenuItem
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	data() {
		return {
			restaurantName: "La belle Vue",
			shoppingCart: 0,
			simpleMenu: [
				{
					name: "Croissant",
					image: {
						source: "/images/croissant.jpg",
						alt: "Un croissant"
					},
					inStock: true,
					quantity: 1
				},
				{
					name: "Baguette de pain",
					image: {
						source: "/images/french-baguette.jpeg",
						alt: "Quatre baguettes de pain"
					},
					inStock: true,
					quantity: 1
				},
				{
					name: "Éclair",
					image: {
						source: "/images/eclair.jpg",
						alt: "Éclair au chocolat"
					},
					inStock: false,
					quantity: 1
				}
			]
		}
	},
	computed: {
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		copyright() {
			const currentYear = new Date().getFullYear()
			return `Copyright ${this.restaurantName} ${currentYear}`
		}
	},
	methods: {
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		addToShoppingCart(amount) {
			this.shoppingCart += amount
		}
	}
}
</script>
