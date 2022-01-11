<script>
	import ProjectPage from '$lib/ProjectPage.svelte';
</script>

<ProjectPage
	headerImageUrl="/Model-Viewer/ModelViewerPrototype.png"
	projectLink="https://determined-mirzakhani-828e94.netlify.app/"
	linkText="View the Prototype"
>
	<h1
		class="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl lg:mt-8 font-bold text-background-secondary mb-6 lg:mb-12"
	>
		Resident 3D <span class="text-primary">&</span> AR Viewer Prototype
	</h1>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		In 2021 I developed a proof of concept prototype for <a
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://resident.co.nz/">Resident</a
		> - A furniture and lighting company. I worked with Resident to improve the way customers can interact
		with their products online, using a 3D and AR viewer for products featured online.
	</p>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl pb-4">Building the Prototype</h2>

	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		To create the 3D Viewer for the prototype I explored many options, such as <a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://vectary.com">Vectary</a
		>
		and
		<a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://emersya.com/en/home">Emersya</a
		>. However, I decided to go with Google's
		<a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://modelviewer.dev/">Model Viewer</a
		> library, as it is open source and free to use. Additionally, the library includes features such
		as a Web viewer, AR Viewer, Custom Camera settings, light environment settings and so on.
	</p>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl pb-4">Hosting the 3D Files</h2>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		To host the many 3D model variants for the furniture and lighting products, I used a cloud
		hosting software called <a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://cloudinary.com/">Cloudinary</a
		>. The advantage of using Cloudinary is that the platform can serve the 3D models via a simple
		API, and the models can be fetched as images or 3D Model formats. Additionally, the client's can
		serve the models to other platforms, making this a versatile intergration.
	</p>
</ProjectPage>
