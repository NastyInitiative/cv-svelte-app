<script>
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import CardGroup from '../../shared/CardGroup.svelte';
	import MultiCardGroups from '../../shared/MultiCardGroups.svelte';

    let cardConfig = {
        data: {
            cardData: [
                {
                    firstCardData: "Object-Oriented Analysis and Design Using UML",
                    secondCardData: "Java SE8 Fundamentals"
                },
                {
                    firstCardData: "Basi di dati e SQL",
                    secondCardData: "Android"
                },
                {
                    firstCardData: "Front-End Web Development",
                    secondCardData: "Team Building"
                },
                {
                    firstCardData: "Self Marketing",
                    secondCardData: "Time Management"
                },
                {
                    firstCardData: "Public Speaking",
                    secondCardData: "Comunicazione Efficace"
                },
            ]
        },
    };
    
    let oneColData = ["SQL", "PHP", "Componentistica PC", "Reti", "Le principali minacce nella cybersecurity"];
    let styleObj = {
        hasDangerBg:true,
        hasTextCentered:true,
        hasTwoCards: false,
        padding: "p-5"
    }

</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 100, delay: 200,duration: 800, easing:quintOut}}>Education</p>
<div class="tile is-ancestor" id="education">
    <div class="tile is-parent is-6" in:fly={{y: 100, delay: 400,duration: 1000, easing:quintOut}}> 
        <div class="tile is-child glass-bg box has-text-white-bis ">
            <p class="title has-text-white-bis">Java e Android Developer</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTwoCards={false} hasTextCentered={false}>
                <span slot="firstCard"> 
                    <p>17/09/2018–14/12/2018</p>
                    <p>Centro Elis, Roma (Italia)</p>
                </span>
            </CardGroup>
            <MultiCardGroups wrapperStyle={'p-3'} multiCardConfig={cardConfig} />
        </div>
    </div>
    <div class="tile is-parent is-6 vertical" in:fly={{y: 100, delay: 600,duration: 800, easing:quintOut}}>
        <div class="tile is-child box glass-bg has-text-white-bis">
            <p class="title has-text-white-bis">Perito Informatico</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoCards={false}>
                <span slot="firstCard">
                    <p>2007-2012</p>
                    <p>Istituto Tecnico Commerciale Vicenzo Arangio Ruiz, Roma (Italia)</p>
                </span>
            </CardGroup>
            <MultiCardGroups wrapperStyle={'p-3'} data={oneColData} innerCardStyle={styleObj} />
        </div>
    </div>
</div>
