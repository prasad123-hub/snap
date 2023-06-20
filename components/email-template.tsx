import * as React from "react"

import { Button } from "./ui/button"

interface EmailTemplateProps {
  firstName: string
  url: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  url,
}) => (
  <div className="flex h-[100%] w-full items-center justify-center bg-gray-400">
    <div className="bg-white p-10">
      <h1 className="text-2xl font-bold">Welcome to the club, {firstName}!</h1>
      <p className="mt-4 text-gray-500">
        Click the link below to sign in to your account.
      </p>
      <a href={url} target="_blank" rel="noreferrer" className="mt-4">
        <Button variant={"default"}>Sign in</Button>
      </a>
      <p className="mt-4">
        This link expires in 24 hours and can only be used once.
      </p>
      <p className="mt-4">
        If you did not try to log into your account, you can safely ignore it.
      </p>
    </div>
  </div>
)
