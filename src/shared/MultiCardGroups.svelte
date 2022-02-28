<script>
    import CardGroup from './CardGroup.svelte';
    import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let wrapperStyle;
    export let data = [];
    export let multiCardConfig={
        data:{
            cardTitleData:{
                period: "",
                location: ""
            },
            cardData: [
                {
                    firstCardData: "",
                    secondCardData: ""
                },
            ],
        }
    };
    export let innerCardStyle = {
        firstSlot:"",
        secondSlot:"",
        padding:"",
        isBoxed:true,
        hasTwoCards:true,
        hasPrimaryBg:true,
        hasDangerBg:false,
        hasTextCentered:true,
    };
    onMount(() => {
        console.log(":::: multiCardConfig ", multiCardConfig)

    });

</script>

{#if data.length > 0}
    {#each data as cardData, index}
        <div class="{wrapperStyle}" in:fly={{y: 100, duration: 800 , delay: index * 100, easing:quintOut}} >
            <CardGroup {...innerCardStyle}>
                <p slot = 'firstCard'>{cardData}</p>
            </CardGroup>
        </div>
    {/each}
{:else}
    {#each multiCardConfig.data.cardData as cardData, index}
        <div class="{wrapperStyle}" in:fly={{y: 100, duration: 800 , delay: index * 100, easing:quintOut}} >
            <CardGroup>
                <p slot = 'firstCard'>{cardData.firstCardData}</p>
                <p slot = 'secondCard'>{cardData.secondCardData}</p>
            </CardGroup>
        </div>
    {/each}
{/if}

