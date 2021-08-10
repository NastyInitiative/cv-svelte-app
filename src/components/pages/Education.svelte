<script>
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import CardGroup from '../../shared/CardGroup.svelte';
    let cardConfig = {
        data: {
            firstEducation: {
                cardTitleData:{
                    period: '17/09/2018–14/12/2018',
                    location: 'Centro Elis, Roma (Italia)'
                },
                firstCardData: [
                    'Object-Oriented Analysis and Design Using UML',
                    'Basi di dati e SQL',
                    'Apache Hadoop',
                    'Apache Kafka',
                    'Front-End Web Development',
                    'Self Marketing',
                    'Stress Management',
                    'Public Speaking',
                ],
                secondCardData: [
                    'Java SE8 Fundamentals',
                    'Apache Cassandra',
                    'Apache Spark',
                    'Android',
                    'Team Building',
                    'Time Management',
                    'Comunicazione Efficace',
                ]
            }
        },
        config: {
            cardTitleConfig: {

            }
        }
    };
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 100, delay: 200,duration: 800, easing:quintOut}}>Education</p>
<div class="tile is-ancestor">
    <div class="tile is-parent is-6"> 
        <div class="tile is-child box has-background-dark has-text-white-bis" in:fly={{y: 100, delay: 400,duration: 1000, easing:quintOut}}>
            <p class="title has-text-white-bis">Java e Android Developer</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTwoCards={false} hasTextCentered={false}>
                <span slot="firstCard"> 
                    <p>17/09/2018–14/12/2018</p>
                    <p>Centro Elis, Roma (Italia)</p>
                </span>
            </CardGroup>
            <CardGroup>
                <p slot = 'firstCard'>Object-Oriented Analysis and Design Using UML</p>
                <p slot = 'secondCard'>Java SE8 Fundamentals</p>
            </CardGroup>
            <CardGroup >
                <span slot = 'firstCard'>Basi di dati e SQL</span>
                <span slot = 'secondCard'>Apache Cassandra</span>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstCard'>Apache Hadoop</p>
                <p slot = 'secondCard'>Apache Spark</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstCard'>Apache Kafka</p>
                <p slot = 'secondCard'>Android</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstCard'>Front-End Web Developer</p>
                <p slot = 'secondCard'>Team Building</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstCard'>Self Marketing</p>
                <p slot = 'secondCard'>Time Management</p>
            </CardGroup>
            <CardGroup >
                <p slot = 'firstCard'>Stress Management</p>
                <p slot = 'secondCard'>Comunicazione Efficace</p>
            </CardGroup>
            <CardGroup hasTwoCards={false}>
                <p slot = 'firstCard'>Public Speaking</p>
            </CardGroup>
        </div>
    </div>
    <div class="tile is-parent is-6 vertical" in:fly={{y: 100, delay: 600,duration: 800, easing:quintOut}}>
        <div class="tile is-child box has-background-dark has-text-white-bis">
            <p class="title has-text-white-bis">Perito Informatico</p>
            <CardGroup isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoCards={false}>
                <span slot="firstCard">
                    <p>2007-2012</p>
                    <p>Istituto Tecnico Commerciale Vicenzo Arangio Ruiz, Roma (Italia)</p>
                </span>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoCards={false} hasDangerBg={true}>
                <p slot="firstCard">SQL</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoCards={false} hasDangerBg={true}>
                <p slot="firstCard">PHP</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoCards={false} hasDangerBg={true}>
                <p slot="firstCard">Componentistica PC</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoCards={false} hasDangerBg={true}>
                <p slot="firstCard">Reti</p>
            </CardGroup>
            <CardGroup padding={'p-5'} hasPrimaryBg={false} hasTwoCards={false} hasDangerBg={true}>
                <p slot="firstCard">Le principali minacce nella cybersecurity</p>
            </CardGroup>
        </div>
    </div>
</div>
