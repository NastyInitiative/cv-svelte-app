<script>
    export let hasTwoCards = true; 
    export let hasPrimaryBg = true;
    export let hasDangerBg = false; 
    export let isBoxed = true;
    export let hasTextCentered = true;
    export let padding = 'p-2';
    export let margin = ''; 
</script>

<div class="columns">
    <div class="column">
        <div class="{ isBoxed ? 'box' : '' } 
                    { hasPrimaryBg ? 'has-background-primary' : '' } 
                    { hasDangerBg ? 'has-background-danger' : '' } 
                    { hasTextCentered ?'has-text-centered' : ''} 
                    has-text-white-bis 
                    {padding} {margin}">
            <slot name = 'firstCard'></slot>
        </div>
    </div>
    {#if hasTwoCards}
    <div class="column">
        <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
            <slot name='secondCard'></slot>
        </div>
    </div>
    {/if}
</div>



