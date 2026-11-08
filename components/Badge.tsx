export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">
            {children}
        </span>
    );
}