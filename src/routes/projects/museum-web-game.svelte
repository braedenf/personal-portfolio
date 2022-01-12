<script>
	import ProjectPage from '$lib/ProjectPage.svelte';
</script>

<svelte:head>
	<title>Braeden Developer Portfolio - Museum Web Game</title>
</svelte:head>

<ProjectPage
	headerImageUrl="/MotatGame/TreasureMapClip.gif"
	projectLink="https://motatnz.itch.io/motat-treasure-hunt"
	linkText="View the Game"
>
	<h1
		class="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl lg:mt-8 font-bold text-background-secondary mb-6 lg:mb-12"
	>
		<span class="text-primary">MOTAT Treasure</span> <br /> Map Game
	</h1>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		I developed this game in 2020 as an addition to the July school holiday programme at <a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://www.motat.nz/">MOTAT</a
		>. The experience was themed around the concept of treasure hunting, with the goal of finding
		clues around the museum using a treasure map.
	</p>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		The outcome was a close collaboration between myself and MOTAT's graphic designer.
	</p>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl py-6">Adapting through COVID-19</h2>

	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		The purpose of this game was to create more accessibility for families and children, who were
		unable to visit the museum physically due to COVID-19 restrictions. I aimed to include iconic
		landmarks found at the museum to serve as the background for the platformer game.
	</p>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl py-6">Developing the Game</h2>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		The game was built using the open-source game engine called <a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://godotengine.org/">Godot</a
		>. The value of using this engine in addition to being open-source was due to its simplicity in
		designing and scripting 2D games. I was able to quickly build levels using Godot's 2D tile
		system to create a variety of obstacles and platforms for players to navigate.
	</p>
</ProjectPage>
