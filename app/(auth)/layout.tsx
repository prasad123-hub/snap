export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="-mt-20 flex-1 px-6 md:px-10">{props.children}</div>
      </div>
    </>
  )
}
