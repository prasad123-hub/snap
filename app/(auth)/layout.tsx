export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="-mt-20 flex-1">{props.children}</div>
      </div>
    </>
  )
}
