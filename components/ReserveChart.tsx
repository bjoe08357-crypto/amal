"use client"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import data from '@/data/reserves.json'

const colors = ['#B9D28E','#6EA6B3','#C6B39E','#CBD5E1']

export default function ReserveChart() {
  const pieData = [
    { name: 'Fiat/T‑Bills', value: data.fiat_tBills },
    { name: 'Crypto', value: data.crypto },
    { name: 'Gold', value: data.gold },
    { name: 'Algo Buffer', value: data.algo_buffer },
  ]
  return (
    <div className="h-56 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
            {pieData.map((_, i) => <Cell key={i} fill={colors[i%colors.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


