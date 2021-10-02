<template>
    <div :class="`teamInfo ${componentView}`">
        <img :src="require(`@/assets/logos/${this.logo}.png`)"  alt="Gonzaga Bulldogs">
        <span>({{seed}}) {{teamName}} <span>{{record}}</span></span>
    </div>
</template>

<script>
export default {
    name: 'TeamInfo',
    props: {
        seed: Number,
        teamName: String,
        record: String,        
        logo: String,
        componentView: String
    }
}
</script>

<style scoped>

.vertical img {
    height: 40px;
}    

img + span {
    display: block;
}
</style>