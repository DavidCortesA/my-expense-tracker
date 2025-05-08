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
  date: string;
  category: string;
}

interface Expense {
  title: string;
  amount: number;
  date: string;
  category: string;
}

interface IncomeCategory {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
interface ExpenseCategory {
  name: string;
  createdAt: string;
  id?: string;
  updatedAt?: Date;
}
