// Types and interfaces for the application

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  profilePhoto?: string
  preferredUnits: 'km' | 'miles'
  preferredCurrency: string
  createdAt: string
}

export interface Vehicle {
  id: string
  userId: string
  make: string
  model: string
  year: number
  registrationNumber: string
  vin: string
  engine: string
  transmission: string
  fuelType: string
  currentMileage: number
  photo?: string
  createdAt: string
}

export interface Service {
  id: string
  vehicleId: string
  serviceName: string
  date: string
  mileage: number
  cost: number
  garage: string
  notes?: string
  invoiceUrl?: string
  photos?: string[]
  nextServiceDate?: string
  nextServiceMileage?: number
}

export interface FuelRecord {
  id: string
  vehicleId: string
  date: string
  station: string
  odometer: number
  litres: number
  pricePerLitre: number
  totalCost: number
}

export interface Repair {
  id: string
  vehicleId: string
  repairName: string
  date: string
  garage: string
  labourCost: number
  partsCost: number
  invoiceUrl?: string
  photos?: string[]
}

export interface Expense {
  id: string
  vehicleId: string
  category: 'fuel' | 'service' | 'repairs' | 'insurance' | 'registration' | 'car_wash' | 'accessories' | 'other'
  description: string
  amount: number
  date: string
}

export interface Insurance {
  id: string
  vehicleId: string
  company: string
  policyNumber: string
  expiryDate: string
  registrationExpiry: string
  roadworthyExpiry: string
  documents?: string[]
}

export interface Notification {
  id: string
  userId: string
  type: 'oil_change' | 'insurance_expiry' | 'tyre_rotation' | 'registration' | 'battery' | 'brake' | 'service'
  message: string
  vehicleId: string
  completed: boolean
  createdAt: string
  dueDate: string
}

export interface DashboardStats {
  totalVehicles: number
  currentMileage: number
  nextService: string
  monthlyExpenses: number
  fuelEconomy: number
  insuranceStatus: string
  activeNotifications: number
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    borderColor?: string
    backgroundColor?: string
    tension?: number
  }[]
}
