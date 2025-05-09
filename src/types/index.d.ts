interface User {
  id?: string;
  name?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  isAdmin?: boolean;
  isActive?: boolean;
  lastLogin?: Date | null;
  profilePicture?: string | null;
  bio?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  dateOfBirth?: Date | null;
  gender?: string | null;
}

interface LoginValues {
  password: string;
  email: string;
}

interface Income {
  title: string;
  amount: number;
  date: Date;
  category: string;
  id?: string
}

interface Expense {
  title: string;
  amount: number;
  date: Date;
  category: string;
  id?: string
}

interface IncomeCategory {
  name: string;
  createdAt: Date;
  id?: string;
  updatedAt?: Date;
}
interface ExpenseCategory {
  name: string;
  createdAt: Date;
  id?: string;
  updatedAt?: Date;
}
