export default async function DashboardLayoutProps({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-2 flex-1">
        <div className="w-full px-6 pb-10 md:px-10 lg:flex lg:flex-1 lg:flex-col">
          {children}
        </div>
      </main>
    </div>
  )
}
