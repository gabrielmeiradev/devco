export default function Wrapper({ children }: { children: React.ReactNode}) {
    return <div className="max-w-3xl mx-auto px-6 py-10">{children}</div>
}