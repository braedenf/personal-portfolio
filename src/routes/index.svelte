<script>
	import SectionLabel from '$lib/SectionLabel.svelte';
	import { text } from 'svelte/internal';

	let scrollY;
</script>

<svelte:window bind:scrollY />

<header id="home">
	<section id="header">
		<div class="flex flex-col gap-2 lg:gap-4 items-center text-center mt-4 lg:mt-8">
			<h1 class="font-display text-4xl lg:text-6xl text-white">Braeden Foster</h1>
			<h2 class="font-display lg:text-2xl text-accent">Web Designer / Creative Technologist</h2>
		</div>
	</section>
	<div class="absolute top-0 left-0 w-full overflow-hidden z-[-10]">
		<svg
			class="relative block w-full h-[10em] lg:h-[15em]"
			viewBox="0 0 1440 417"
			fill="none"
			preserveAspectRatio="none"
		>
			<path
				d="M582 393.5C225 393.5 0 320 0 320V0H1440V417C1228 284.5 939 393.5 582 393.5Z"
				fill="#4C546F"
			/>
		</svg>
	</div>
</header>

<main
	class="mt-20 lg:mt-48 mb-20 flex flex-col gap-28 max-w-4xl xl:max-w-6xl mx-4 sm:mx-12 lg:mx-auto"
>
	<section class="sm:min-h-full container max-w-2xl mx-auto" id="hero">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center">
			<div class="mx-8">
				<h3 class="font-display text-white text-4xl sm:text-4xl lg:text-5xl mb-8">
					Welcome to my portfolio.
				</h3>
				<p class="font-body text-white text-lg">
					I’m a frontend developer and creative technologist. I experiment and play with web
					technologies to create rich user experiences.
				</p>
			</div>

			<img
				class="inline object-cover w-4/6 max-w-[16em] rounded-full shadow-lg"
				src="portfolio_picture.png"
				alt="profile of me"
			/>
		</div>
	</section>
	<section id="projects">
		<SectionLabel class="-rotate-2 max-w-sm mx-auto" text="Web Work" />
		<div class="mt-12 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
			<a
				class="flex flex-col gap-4 items-center bg-background-light py-6 px-3 rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200 group"
				href="projects/maletino-movement"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="maletino-movement.png"
					alt="Feedback app website screenshot"
				/>
				<h4 class="font-display text-center text-accent">Maletino Movement</h4>
				<p class="text-center font-body text-white">
					A personal website I created for personal fitness trainer Yolanda Maletino.
				</p>
			</a>
			<a
				class="flex flex-col gap-4 items-center bg-background-light py-6 px-3 rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200"
				href="projects/ecommerce-model-viewer"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="ecommerce_profile.png"
					alt="ecommerce viewer website screenshot"
				/>
				<h4 class="font-display text-center text-accent">Ecommerce Model Viewer</h4>
				<p class="text-center font-body text-white">
					I created a prototype for bespoke furniture company Resident, this prototype demonstrates
					viewing furniture models in a 3D viewport as well as in AR
				</p>
			</a>
			<a
				class="flex flex-col gap-4 items-center bg-background-light py-6 px-3 rounded-lg shadow-lg transform hover:-translate-y-2 ease-in-out duration-200"
				href="projects/museum-web-game"
			>
				<img
					class="inline object-cover w-32 h-32 rounded-full"
					src="treasure_hunt_profile.png"
					alt="treasure hunt game screenshot"
				/>
				<h4 class="font-display text-center text-accent">Museum Web Game</h4>
				<p class="text-center font-body text-white">
					For MOTAT - Museum of Transport and Technology I worked on a web-based video game as part
					of the holiday experience Hidden in Plain Sight
				</p>
			</a>
		</div>
	</section>
	<section class="mb-8" id="about">
		<SectionLabel class="rotate-2 max-w-sm mx-auto" text="About" />
		<p class="mt-20 tex-body text-white">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla facilisi etiam
			dignissim. Sed id semper risus in hendrerit gravida rutrum quisque non. Feugiat vivamus at
			augue eget.
		</p>
	</section>
</main>
<footer>
	<div class="flex flex-col justify-center items-center gap-4">
		<a
			target="_blank"
			class="font-display text-accent hover:text-accent-light transition"
			href="mailto: braedenleefoster@gmail.com">braedenleefoster@gmail.com</a
		>
		<div class="flex gap-4">
			<a target="_blank" href="https://www.linkedin.com/in/braeden-foster-30b120116/">
				<svg
					class="w-12 h-12 fill-current text-background-secondary hover:text-background-secondary-active transition"
					viewBox="0 0 56 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="28" cy="28" r="28" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M37.9167 11H18.0833C14.1719 11 11 14.1719 11 18.0833V37.9167C11 41.8281 14.1719 45 18.0833 45H37.9167C41.8295 45 45 41.8281 45 37.9167V18.0833C45 14.1719 41.8295 11 37.9167 11ZM22.3333 37.9167H18.0833V22.3333H22.3333V37.9167ZM20.2083 20.537C18.8398 20.537 17.7292 19.4178 17.7292 18.038C17.7292 16.6582 18.8398 15.539 20.2083 15.539C21.5768 15.539 22.6875 16.6582 22.6875 18.038C22.6875 19.4178 21.5782 20.537 20.2083 20.537ZM39.3333 37.9167H35.0833V29.9777C35.0833 25.2063 29.4167 25.5676 29.4167 29.9777V37.9167H25.1667V22.3333H29.4167V24.8338C31.3943 21.1703 39.3333 20.8997 39.3333 28.3414V37.9167Z"
						fill="#3E4253"
					/>
				</svg>
			</a>
			<a target="_blank" href="https://github.com/braedenf">
				<svg
					class="w-12 h-12 fill-current text-background-secondary hover:text-background-secondary-active transition"
					viewBox="0 0 56 56"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="28" cy="28" r="28" />
					<ellipse cx="21.1321" cy="33.283" rx="3.69811" ry="5.81132" fill="#3E4253" />
					<ellipse cx="35.9246" cy="33.283" rx="3.69811" ry="5.81132" fill="#3E4253" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.1997 11.6201C11.5098 12.8281 10.352 15.6819 11.4579 21.3501C9.57083 23.8654 8.45282 26.9908 8.45282 30.3772C8.45282 38.6928 15.1939 45.4338 23.5094 45.4338H32.4906C40.8061 45.4338 47.5472 38.6928 47.5472 30.3772C47.5472 26.9908 46.4292 23.8654 44.5421 21.3502C45.648 15.6819 44.4902 12.8281 43.8003 11.6201C43.5836 11.2406 43.1215 11.069 42.6998 11.1835C41.1172 11.613 39.2865 12.3397 37.1488 15.3069C35.3582 14.6829 32.0496 14.2641 28.2642 14.2641C24.1641 14.2641 20.6234 14.7554 18.9651 15.4667C16.7784 12.3655 14.9108 11.6206 13.3002 11.1835C12.8785 11.069 12.4164 11.2406 12.1997 11.6201ZM23.6164 26.0357C18.5287 25.7423 12 26.6766 12 31.7727V34.3636C12 39.1333 16.3415 42.9999 21.697 42.9999H34.303C39.6585 42.9999 44 39.1333 44 34.3636V31.7727C44 26.6766 37.4713 25.7423 32.3836 26.0357C30.9878 26.1162 29.5179 26.1592 28 26.1592C26.4821 26.1592 25.0122 26.1162 23.6164 26.0357Z"
						fill="#3E4253"
					/>
				</svg>
			</a>
		</div>
		<div class="absolute w-full overflow-hidden z-[-10]">
			<svg
				class="relative block w-full h-[16em] lg:h-[15em]"
				viewBox="0 0 1440 387"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<path
					d="M824.129 71C1064.47 51.5659 1205.52 39.5001 1440 47.5001L1440 387L0 387L3.38326e-05 -3.81849e-06C345.283 106 650.992 85 824.129 71Z"
					fill="#4C546F"
				/>
			</svg>
		</div>
	</div>
</footer>
