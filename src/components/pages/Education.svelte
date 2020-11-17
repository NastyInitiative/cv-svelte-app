<script>
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet">Education</p>
<div class="tile is-ancestor">
    <div class="tile is-parent is-6" transition:fly="{{y: 200, duration: 900, delay:600, easing: quintOut}}"> 
        <div class="tile is-child box has-background-dark has-text-white-bis">
            <p class="title has-text-white-bis">Java e Android Developer</p>
            <div class="columns">
                <div class="column">
                    <p>17/09/2018–14/12/2018 - Centro Elis, Roma (Italia)</p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p> Object-Oriented Analysis and Design Using UML</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Java SE8 Fundamentals</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Basi di dati e SQL</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Apache Cassandra</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Apache Hadoop</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Apache Spark</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Apache Kafka</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Android</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Front-End Web Developer</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Team Building</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Self Marketing</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Time Management</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        Stress Management
                    </div>
                </div>
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        Comunicazione Efficace
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-primary has-text-centered has-text-white-bis p-2">
                        <p>Public Speaking</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tile is-parent is-6 vertical" transition:fly="{{y: -200, duration: 900, delay:600, easing: quintOut}}">
        <div class="tile is-child box has-background-dark has-text-white-bis">
            <p class="title has-text-white-bis">Perito Informatico</p>
            <div class="columns">
                <div class="column">
                    <p>2007-2012 - Istituto Tecnico - Commerciale Vicenzo Arangio Ruiz, Roma (Italia)</p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-danger has-text-centered has-text-white-bis">
                        <p>SQL</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-danger has-text-centered has-text-white-bis">
                        <p>PHP</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-danger has-text-centered has-text-white-bis">
                        <p>Componentistica PC</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-danger has-text-centered has-text-white-bis">
                        <p>Reti</p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box has-background-danger has-text-centered has-text-white-bis">
                        <p>Le principali minacce nella cybersecurity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
