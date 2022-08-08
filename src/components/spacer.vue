<template>
      <div class="spacer">
            <p>Produis les plus populaire</p>
            <p>Voir tous</p>
    </div>
</template>

<script>
export default{
    name:"Spacer"
}
</script>

<style>
.spacer{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 50px;
            background-color:white;
            padding: 10px;
            font-weight: bold;
            font-size:12px;
        }
</style>