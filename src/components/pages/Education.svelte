<script>
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import CardGroup from '../../shared/CardGroup.svelte';
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 100, delay: 200,duration: 800, easing:quintOut}}>Education</p>
<div class="tile is-ancestor">
    <div class="tile is-parent is-6"> 
        <div class="tile is-child box has-background-dark has-text-white-bis" in:fly={{y: 100, delay: 400,duration: 1000, easing:quintOut}}>
            <p class="title has-text-white-bis">Java e Android Developer</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTwoColumns={false} hasTextCentered={false}>
                <span slot="firstParagraph"> 
                    <p >17/09/2018–14/12/2018</p>
                    <p >Centro Elis, Roma (Italia)</p>
                </span>
            </CardGroup>
            <CardGroup>
                <p slot = 'firstParagraph'>Object-Oriented Analysis and Design Using UML</p>
                <p slot = 'secondParagraph'>Java SE8 Fundamentals</p>
            </CardGroup>
            <CardGroup >
                <span slot = 'firstParagraph'>Basi di dati e SQL</span>
                <span slot = 'secondParagraph'>Apache Cassandra</span>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstParagraph'>Apache Hadoop</p>
                <p slot = 'secondParagraph'>Apache Spark</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstParagraph'>Apache Kafka</p>
                <p slot = 'secondParagraph'>Android</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstParagraph'>Front-End Web Developer</p>
                <p slot = 'secondParagraph'>Team Building</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstParagraph'>Self Marketing</p>
                <p slot = 'secondParagraph'>Time Management</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstParagraph'>Stress Management</p>
                <p slot = 'secondParagraph'>Comunicazione Efficace</p>
            </CardGroup>
            <CardGroup hasTwoColumns={false}>
                <p slot = 'firstParagraph'>Public Speaking</p>
            </CardGroup>
        </div>
    </div>
    <div class="tile is-parent is-6 vertical" in:fly={{y: 100, delay: 600,duration: 800, easing:quintOut}}>
        <div class="tile is-child box has-background-dark has-text-white-bis">
            <p class="title has-text-white-bis">Perito Informatico</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoColumns={false}>
                <span slot="firstParagraph">
                    <p>2007-2012</p>
                    <p>Istituto Tecnico Commerciale Vicenzo Arangio Ruiz, Roma (Italia)</p>
                </span>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoColumns={false} hasDangerBg={true} hasPaddingSmall={false}>
                <p slot="firstParagraph">SQL</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoColumns={false} hasDangerBg={true} hasPaddingSmall={false}>
                <p slot="firstParagraph">PHP</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoColumns={false} hasDangerBg={true} hasPaddingSmall={false}>
                <p slot="firstParagraph">Componentistica PC</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoColumns={false} hasDangerBg={true} hasPaddingSmall={false}>
                <p slot="firstParagraph">Reti</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoColumns={false} hasDangerBg={true} hasPaddingSmall={false}>
                <p slot="firstParagraph">Le principali minacce nella cybersecurity</p>
            </CardGroup>
        </div>
    </div>
</div>
