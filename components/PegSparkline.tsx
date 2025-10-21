"use client"
import { ResponsiveContainer, LineChart, Line, Tooltip, ReferenceLine } from 'recharts'
import peg from '@/data/peg.json'

export default function PegSparkline() {
  const data = peg.points.map((v: number, i: number) => ({ i, v }))
  return (
    <div className="h-56 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip formatter={(v) => (typeof v === 'number' ? (v as number).toFixed(3) : v)} contentStyle={{ fontSize: 12 }} />
          <ReferenceLine y={1} stroke="#CBD5E1" />
          <Line type="monotone" dataKey="v" stroke="#6EA6B3" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


