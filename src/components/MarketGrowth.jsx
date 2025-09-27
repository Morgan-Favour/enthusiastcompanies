'use client'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { year: '2020', marketSize: 150 },
  { year: '2022', marketSize: 250 },
  { year: '2024', marketSize: 400 },
  { year: '2026', marketSize: 700 },
  { year: '2028', marketSize: 1200 },
  { year: '2030', marketSize: 2000 },
]

export default function MarketGrowth() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Global Hydrogen Market Growth</h2>
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="marketSize"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  )
}
