import { create } from 'zustand'
import { User, Vehicle, Service, FuelRecord, Repair, Expense, Insurance, Notification } from '@/types'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

interface DataStore {
  vehicles: Vehicle[]
  services: Service[]
  fuelRecords: FuelRecord[]
  repairs: Repair[]
  expenses: Expense[]
  insurances: Insurance[]
  notifications: Notification[]
  
  addVehicle: (vehicle: Vehicle) => void
  updateVehicle: (id: string, vehicle: Partial<Vehicle>) => void
  deleteVehicle: (id: string) => void
  
  addService: (service: Service) => void
  updateService: (id: string, service: Partial<Service>) => void
  deleteService: (id: string) => void
  
  addFuelRecord: (record: FuelRecord) => void
  deleteFuelRecord: (id: string) => void
  
  addRepair: (repair: Repair) => void
  updateRepair: (id: string, repair: Partial<Repair>) => void
  deleteRepair: (id: string) => void
  
  addExpense: (expense: Expense) => void
  deleteExpense: (id: string) => void
  
  addInsurance: (insurance: Insurance) => void
  updateInsurance: (id: string, insurance: Partial<Insurance>) => void
  deleteInsurance: (id: string) => void
  
  markNotificationComplete: (id: string) => void
  clearNotifications: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  isAuthenticated: !!localStorage.getItem('user'),
  
  setUser: (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
    set({ user, isAuthenticated: !!user })
  },
  
  logout: () => {
    localStorage.removeItem('user')
    set({ user: null, isAuthenticated: false })
  },
}))

export const useDataStore = create<DataStore>((set) => ({
  vehicles: [],
  services: [],
  fuelRecords: [],
  repairs: [],
  expenses: [],
  insurances: [],
  notifications: [],
  
  addVehicle: (vehicle) => set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  updateVehicle: (id, updates) => set((state) => ({
    vehicles: state.vehicles.map((v) => v.id === id ? { ...v, ...updates } : v),
  })),
  deleteVehicle: (id) => set((state) => ({
    vehicles: state.vehicles.filter((v) => v.id !== id),
  })),
  
  addService: (service) => set((state) => ({ services: [...state.services, service] })),
  updateService: (id, updates) => set((state) => ({
    services: state.services.map((s) => s.id === id ? { ...s, ...updates } : s),
  })),
  deleteService: (id) => set((state) => ({
    services: state.services.filter((s) => s.id !== id),
  })),
  
  addFuelRecord: (record) => set((state) => ({ fuelRecords: [...state.fuelRecords, record] })),
  deleteFuelRecord: (id) => set((state) => ({
    fuelRecords: state.fuelRecords.filter((r) => r.id !== id),
  })),
  
  addRepair: (repair) => set((state) => ({ repairs: [...state.repairs, repair] })),
  updateRepair: (id, updates) => set((state) => ({
    repairs: state.repairs.map((r) => r.id === id ? { ...r, ...updates } : r),
  })),
  deleteRepair: (id) => set((state) => ({
    repairs: state.repairs.filter((r) => r.id !== id),
  })),
  
  addExpense: (expense) => set((state) => ({ expenses: [...state.expenses, expense] })),
  deleteExpense: (id) => set((state) => ({
    expenses: state.expenses.filter((e) => e.id !== id),
  })),
  
  addInsurance: (insurance) => set((state) => ({ insurances: [...state.insurances, insurance] })),
  updateInsurance: (id, updates) => set((state) => ({
    insurances: state.insurances.map((i) => i.id === id ? { ...i, ...updates } : i),
  })),
  deleteInsurance: (id) => set((state) => ({
    insurances: state.insurances.filter((i) => i.id !== id),
  })),
  
  markNotificationComplete: (id) => set((state) => ({
    notifications: state.notifications.map((n) =>
      n.id === id ? { ...n, completed: true } : n,
    ),
  })),
  clearNotifications: () => set({ notifications: [] }),
}))
