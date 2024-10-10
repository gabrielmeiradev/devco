export default function Section({ name, children, id }: { name: string, children: React.ReactNode, id: string }) {
    return <div id={id} className="w-full scroll-mt-20 md:scroll-mt-12">
        <h2 className="text-base font-semibold text-muted-foreground mb-4">{name}</h2>
        {children}
    </div>
}