import { Plus, BarChart3 } from 'lucide-react'
import { useState } from 'react'

interface ExpenseManagerProps {
  isDark: boolean
}

export default function ExpenseManager({ isDark }: ExpenseManagerProps) {
  const [expenses] = useState([
    { id: 1, category: 'fuel', description: 'Petrol Fill-up', amount: 92.5, date: '2024-07-15' },
    { id: 2, category: 'service', description: 'Oil Change', amount: 150, date: '2024-07-10' },
    { id: 3, category: 'insurance', description: 'Monthly Premium', amount: 120, date: '2024-07-01' },
  ])

  const categoryColors = {
    fuel: 'text-blue-500',
    service: 'text-green-500',
    insurance: 'text-purple-500',
    repairs: 'text-red-500',
  }

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Expense Manager</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track all vehicle-related expenses
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Add Expense
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card card-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">Total Expenses</h3>
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-4xl font-bold">${totalExpenses.toFixed(2)}</p>
          </div>
          <div className="card card-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">Expense Count</h3>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-4xl font-bold">{expenses.length}</p>
          </div>
        </div>

        {/* Records */}
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div key={expense.id} className="card card-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{expense.description}</p>
                  <p className="text-sm text-gray-400 capitalize">{expense.category} • {new Date(expense.date).toLocaleDateString()}</p>
                </div>
                <p className="text-2xl font-bold text-accent-green">${expense.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}