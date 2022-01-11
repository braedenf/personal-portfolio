<script>
	import Nav from '$lib/Nav.svelte';
	import CopyEmailButton from '$lib/CopyEmailButton.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta
		name="description"
		content="I am a creative technologist that specialises in web technologies. I love to tinker and experiment with creating engaging iteractive experiences."
	/>
	<meta property="og:image" content="portfolio_picture.jpg" />
	<title>Braeden Developer Portfolio</title>
</svelte:head>

<header id="home">
	<div class="spacer layer1 -z-20 top-0" />
	<section id="header">
		<a href="/" class="flex flex-col gap-2 lg:gap-4 items-center text-center">
			<h1 class="text-white font-bold text-5xl lg:text-6xl xl:text-7xl pt-32 sm:pt-6">
				Braeden Foster
			</h1>
			<h2 class="font-display lg:text-2xl text-white">Web Designer / Creative Technologist</h2>
		</a>
	</section>
</header>

<slot />
<Nav />

<footer class="pt-12">
	<div class="flex flex-col justify-center items-center gap-4">
		<div class="spacer layer2 -z-10" />

		<CopyEmailButton class="my-12" email="braedenleefoster@gmail.com" />
		<div class="flex gap-4">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/braeden-foster-30b120116/"
			>
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
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/braedenf">
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
	</div>
</footer>

<style>
	.spacer {
		position: absolute;
		aspect-ratio: 960/540;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layer1 {
		background-image: url('/top-waves.svg');
	}
	.layer2 {
		background-image: url('/bottom-waves.svg');
	}
</style>
