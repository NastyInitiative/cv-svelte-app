<script>
    export let level;
    export let levelColor;
    let skillPercentage = level;
    let counter = 0;
    setInterval(() => {
        if (counter == level) {
            clearInterval();
        } else {
            counter += 1;
            skillPercentage = counter+"%";
        }
    }, 30);
    let circleLevel= 312 - 312 * level/100;
</script> 
<div class="skill m-auto">
    <div class="outer">
        <div class="inner">
            <div class="number-c">
                {skillPercentage}
            </div>
        </div>  
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
        <circle style="stroke-dashoffset:{circleLevel}; stroke:{levelColor};" cx="60" cy="60" r="50" stroke-linecap="round" />
    </svg>
</div>
