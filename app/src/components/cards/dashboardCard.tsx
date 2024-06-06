/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gL80WbwSr8M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from '../../../@/components/ui/card'

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6">
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-center">$45,231.89</div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-center">+2,350</div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-center">+12,234</div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-center">+573</div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}