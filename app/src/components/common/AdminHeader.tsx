import React from 'react';
import { Button } from "../../../@/components/ui/button";

export default function AdminHeader() {
  return (
    <header className="bg-white dark:bg-gray-950 py-4 md:py-6 lg:py-2 border-b border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2" href="#">
            <MountainIcon className="w-6 h-6" />
            <span className="text-xl font-bold">F'Blastek</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="../../../public/aboutPage/about1.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
