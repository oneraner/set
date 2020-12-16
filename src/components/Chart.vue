<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      chartdata: {
        labels: [
          '109/11/02', '109/11/03', '109/11/04', '109/11/05', '109/11/06',
          '109/11/09', '109/11/10', '109/11/11', '109/11/12', '109/11/13',
          '109/11/16', '109/11/17', '109/11/18', '109/11/19', '109/11/20',
          '109/11/23', '109/11/24', '109/11/25', '109/11/26', '109/11/27',
          '109/11/30'
        ],
        datasets: [
          {
            label: '0050',
            fill: false,
            backgroundColor: 'rgba(188,96,147,1)',
            borderColor: 'rgba(212,85,49,1)',
            pointBackgroundColor: 'rgba(41,56,69,1)',
            data: [
              '103.40', '104.60', '106.15', '106.05', '106.70',
              '108.10', '107.10', '108.75', '108.80', '109.25',
              '112.80', '113.60', '114.35', '114.15', '114.00',
              '115.45', '114.90', '113.95', '114.85', '114.65',
              '113.30'
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          fontSize: 24,
          text: '2020/11 0050 價格走勢'
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
