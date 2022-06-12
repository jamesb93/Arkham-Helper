<script>
    import { phases } from '$lib/phases'
</script>

<div class="phases">

    {#each Object.entries(phases) as [title, props]}
    
    <div>{title}</div>
    {#each props.steps as step}
    { step.title }
    {/each}
    
    {/each}
</div>

<style>
    .phases {
        display: flex;
        flex-direction: column;
    }
</style>