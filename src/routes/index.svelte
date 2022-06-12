<script>
	import { phases } from '$lib/phases';
	import { marked } from 'marked';
	import { browser } from '$app/env';

	const sm = {
		Mythos: {
			prev: 'Upkeep',
			next: 'Investigation'
		},
		Investigation: {
			prev: 'Mythos',
			next: 'Enemy'
		},
		Enemy: {
			prev: 'Investigation',
			next: 'Upkeep'
		},
		Upkeep: {
			prev: 'Enemy',
			next: 'Mythos'
		}
	};

	let phase = 'Mythos';
	let step = 0;

	get();
	$: steps = phases[phase].steps;
	$: instructions = phases[phase].steps[step].instructions;

	function store() {
		if (browser) {
			localStorage.setItem('phase', phase);
			localStorage.setItem('step', step);
		}
	}

	function get() {
		if (browser) {
			phase = localStorage.getItem('phase') || 'Mythos';
			step = localStorage.getItem('step') || 0;
		}
	}

	function nextStep() {
		step += 1;
		if (step >= steps.length) {
			step = 0;
			phase = sm[phase].next;
		}
		store();
	}

	function prevStep() {
		step -= 1;
		if (step < 0) {
			phase = sm[phase].prev;
			step = phases[phase].steps.length - 1;
		}
		store();
	}

	function nextPhase() {
		phase = sm[phase].next;
		step = 0;
	}

	function prevPhase() {
		phase = sm[phase].prev;
		step = 0;
	}

	function handlePress(e) {
		switch (e.code) {
			case 'ArrowUp':
				e.preventDefault();
				prevStep();
				break;
			case 'ArrowDown':
				e.preventDefault();
				nextStep();
				break;
			case 'ArrowLeft':
				e.preventDefault();
				prevPhase();
				break;
			case 'ArrowRight':
				e.preventDefault();
				nextPhase();
				break;
		}
	}
</script>

<svelte:window
	on:keydown={handlePress}
	on:click={(e) => {
		console.log(e);
	}}
/>

<div class="columns">
	<div class="steps">
		<div class="tab">
			{#each Object.entries(sm) as [p, _]}
				<div
					class:inactive={phase !== p}
					on:click={() => {
						phase = p;
						step = 0;
					}}
				>
					{p}
				</div>
			{/each}
		</div>

		<div class="top">
			<div class="steps">
				{#each steps as props, i}
					<div class="title" class:inactive={i !== step} on:click={() => (step = i)}>
						{i + 1}. {props.title}
					</div>
				{/each}
			</div>

			<!-- <div class="map">
                {#each Object.entries(sm) as [p, _]}
                <div class="phase" 
                class:inactive={phase!==p}
                on:click={ () => { phase=p; step=0 }}
                >
                {p}
                </div>
                {/each}
            </div> -->
		</div>
	</div>

	<div class="buttons">
		<button class="btn" on:click={prevStep}> Previous </button>

		<button class="btn" on:click={nextStep}> Next </button>
	</div>

	<hr />

	<h3>Instructions:</h3>
	{#key instructions}
		<div class="instructions">
			{@html marked(instructions)}
		</div>
	{/key}
</div>

<style>
	.tab {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 1em;
		font-size: 1.25rem;
		gap: 1em;
	}
	.tab > div {
		cursor: pointer;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	.columns {
		display: grid;
		grid-template-columns: 1fr;
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.title {
		cursor: pointer;
	}

	.instructions {
		font-size: 0.8rem;
	}

	.btn {
		width: max-content;
	}
</style>
