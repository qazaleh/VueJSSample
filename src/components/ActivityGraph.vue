<template  >
    <div class="app" height="200" width="400" style=" background-color: cornflowerblue">

<!--        <canvas ref="myChart" id="myChart" style="width: 100%;height: 200px; background-color: chocolate"></canvas>-->
        <script type="module" src="LineExample.js"></script>
        <line-example></line-example>

    </div>

</template>

<script>
    import LineExample from './LineExample'
    import BarExample from './BarExample'

    export default {
        name: "ActivityGraph",
        comments:{
            LineExample,
            BarExample


        },

        mounted () {

        },
        data: () => ({
            // data:{
            //     labels: ['January', 'February'],
            //     datasets: [
            //         {
            //             label: 'Data One',
            //             backgroundColor: '#f87979',
            //             data: [40, 20]
            //         }
            //     ]
            // },
            // options: {
            //     responsive: true,
            //     maintainAspectRatio: false
            // }
        }),

        // methods:{
        //     insertChartData() {
        //         console.log('now we should see :((( this fucking chart');
        //
        //         var ctx = document.getElementById('myChart');
        //         console.log(ctx);
        //
        //         var myChart = new Chart(ctx, {
        //             type: 'line',
        //             data:this.data,
        //             options: this.options
        //         });
        //
        //         console.log('fucking chart created');
        //         console.log(myChart);
        //     }
        // },
        // created() {
        // },

    }
</script>

<style scoped>

</style>