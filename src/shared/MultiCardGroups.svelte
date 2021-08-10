<script>
    import CardGroup from './CardGroup.svelte';
    export const multiCardConfig={
        data:{
            cardTitleData:{
                period: "",
                location: ""
            },
            firstCardData: [],
            secondCardData: []
        },
        config: {
            cardTitleConfig:{
                isBoxed:false,
                hasTwoCards:false,
                hasPrimaryBg:false,
                hasTextCentered:false,
            },
            cardConfig:{
                firstSlot:"",
                secondSlot:"",
                padding:"",
                isBoxed:true,
                hasTwoCards:true,
                hasPrimaryBg:true,
                hasDangerBg:false,
                hasTextCentered:true,
            }
        },
    };
</script>

<CardGroup isBoxed={multiCardConfig.config.cardTitleConfig.isBoxed} 
        hasPrimaryBg={multiCardConfig.config.cardTitleConfig.hasPrimaryBg} 
        hasTwoCards={multiCardConfig.config.cardTitleConfig.hasTwoCards} 
        hasTextCentered={multiCardConfig.config.cardTitleConfig.hasTextCentered}>
    <span slot="firstCard"> 
        <p>{multiCardConfig.data.cardTitleData.period}</p>
        <p>{multiCardConfig.data.cardTitleData.location}</p>
    </span>
</CardGroup>

{#each multiCardConfig.data.firstCardData as cardData}
    <CardGroup>
        <p slot = 'firstCard'>Object-Oriented Analysis and Design Using UML</p>
        <p slot = 'secondCard'>Java SE8 Fundamentals</p>
    </CardGroup>
{/each}
