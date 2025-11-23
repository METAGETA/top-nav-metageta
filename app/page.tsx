import { MenuBar } from "@/components/menu-bar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.svg')" }}
      />
      <MenuBar />
      <div className="p-8 pt-16">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground">
          Your content goes here. The navigation is now fixed at the top and stretches full width.
        </p>
      </div>
    </div>
  )
}
