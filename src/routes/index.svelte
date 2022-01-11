<script>
	import SectionLabel from '$lib/SectionLabel.svelte';
	import KUTE from 'kute.js';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	onMount(() => {
		const tween = KUTE.fromTo(
			'#blob1',
			{ path: '#blob1' },
			{ path: '#blob2' },
			{ repeat: 999, duration: 8000, yoyo: true }
		);

		tween.start();
	});
</script>

<main class="mt-20 sm:mt-40 lg:mt-48 xl:mt-72 2xl:mt-[500px] mb-20 flex flex-col  lg:mx-auto">
	<section
		class="container px-8 mx-auto lg:mx-auto lg:max-w-4xl pb-64 sm:pb-[400px] xl:pb-[500px]"
		id="hero"
	>
		<svg
			class="opacity-20 blob-motion -z-30 w-[70%] sm:w-[50%]"
			id="visual"
			viewBox="0 0 900 900"
			width="900"
			height="900"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><g transform="translate(452.16122828917685 383.88346016249517)"
				><path
					id="blob1"
					d="M249.6 -220.4C316.2 -182.9 358.1 -91.5 358.5 0.4C358.8 92.2 317.7 184.3 251 259.3C184.3 334.3 92.2 392.2 12.1 380C-67.9 367.9 -135.8 285.8 -205.6 210.8C-275.4 135.8 -347.2 67.9 -360.5 -13.3C-373.8 -94.5 -328.7 -189 -258.9 -226.5C-189 -264 -94.5 -244.5 -1.5 -243C91.5 -241.5 182.9 -257.9 249.6 -220.4"
					fill="#F2545B"
				/></g
			>
			<g transform="translate(485.8818936096409 484.65017177881225)" style="visibility: hidden;"
				><path
					id="blob2"
					d="M152.1 -166.6C198.1 -106.1 237 -53 260.6 23.6C284.2 100.2 292.3 200.3 246.3 240.7C200.3 281 100.2 261.5 12.5 249C-75.2 236.5 -150.4 231 -214.4 190.7C-278.4 150.4 -331.2 75.2 -346.6 -15.4C-362.1 -106.1 -340.1 -212.1 -276.1 -272.6C-212.1 -333.1 -106.1 -348.1 -26.5 -321.6C53 -295 106.1 -227.1 152.1 -166.6"
					fill="#F2545B"
				/></g
			>
		</svg>
		<div
			in:fly={{ y: 100, duration: 1500 }}
			out:fade
			class="grid grid-cols-1 gap-8 lg:gap-3 sm:grid-cols-3 justify-items-center"
		>
			<div class="col-span-2">
				<h2
					class="font-display text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-8"
				>
					Welcome to my <span
						class="text-transparent bg-clip-text bg-gradient-to-br from-secondary-darker to-secondary"
						>portfolio</span
					>
				</h2>
				<p
					class="font-body text-white text-lg border-t-2 pt-2 border-l-0 border-r-0 border-b-0 border-primary border-2"
				>
					I’m a frontend developer and creative technologist based in Tāmaki Makaurau, Aotearoa -
					Auckland New Zealand. I design and experiment with web technologies to create rich user
					experiences.
				</p>
			</div>

			<img
				class="object-left rounded-full shadow-lg aspect-auto w-[60%] sm:w-full"
				src="portfolio_picture.png"
				alt="profile of me"
			/>
		</div>
	</section>
	<section class="mt-16 pt-16 bg-gradient-to-r from-secondary-darker to-secondary" id="projects">
		<SectionLabel class="-rotate-2 bg-background-dark max-w-sm mx-auto" text="Web Work" />
		<div
			class="py-16 lg:py-[200px] sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto"
		>
			<a
				class="flex flex-col gap-4 lg:gap-8 items-center bg-background-dark py-6 xl:py-16 px-3 lg:mx-auto rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200"
				href="projects/maletino-movement"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="MMLogo.png"
					alt="MaletinoMovement Logo"
				/>
				<h4 class="font-bold text-center text-white bg-background-light px-3 rounded-full">
					Maletino Movement
				</h4>
				<p class="text-center font-body text-white">
					I collaborated with a small personal fitness company to design a custom website with an
					additional booking system.
				</p>
			</a>
			<a
				class="flex flex-col gap-4 lg:gap-8 items-center bg-background-dark py-6 xl:py-16 px-3 lg:mx-auto rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200"
				href="projects/ecommerce-model-viewer"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="Model-Viewer/ModelViewerEcommerceProfile.png"
					alt="ecommerce viewer website screenshot"
				/>
				<h4 class="font-bold text-center text-white bg-background-light px-3 rounded-full">
					Ecommerce Model Viewer
				</h4>
				<p class="text-center font-body text-white">
					I created a prototype for bespoke furniture company Resident, this prototype demonstrates
					the ability to view furniture models in 3D and AR.
				</p>
			</a>
			<a
				class="flex flex-col gap-4 lg:gap-8 items-center bg-background-dark py-6 xl:py-16 px-3 lg:mx-auto rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200"
				href="projects/museum-web-game"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="MotatGame/TreasureHunt.png"
					alt="treasure hunt game screenshot"
				/>
				<h4 class="font-bold text-center text-white bg-background-light px-3 rounded-full">
					Museum Web Game
				</h4>
				<p class="text-center font-body text-white">
					At MOTAT - Museum of Transport and Technology, I worked on a web-based video game as part
					of the holiday experience Hidden in Plain Sight.
				</p>
			</a>
		</div>
	</section>
	<section class="pt-16 sm:mt-32" id="about">
		<SectionLabel class="rotate-2 bg-primary max-w-sm mx-auto" text="About" />
		<p class="mt-20 text-white max-w-2xl mx-auto px-8">
			I am a creative technologist based in Tāmaki Makaurau, Aotearoa - Auckland New Zealand. From a
			young age, I have been inquisitive about all kinds of technologies, with an interest in
			hacking & remixing these technologies to discover new concepts.
		</p>
		<p class="text-white max-w-2xl mx-auto px-8 mt-6">
			My interests have led me to work with many great collaborations such as with artists,
			musicians, academics, museums and game designers. Recently, I have become more interested in
			the use of front-end technologies such as React or Svelte to create dynamic & portable
			experiences.
		</p>
		<p class=" text-white max-w-2xl mx-auto px-8 mt-6">
			When I am not hacking & remaking, you can find me skateboarding or surfing.
		</p>
	</section>
</main>

<style>
	.blob-motion {
		position: absolute;
		display: inline-block;
		transform: translateY(-40%);
		transform: translateX(20%);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
