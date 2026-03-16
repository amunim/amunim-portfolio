export default function ButtonPrimary({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div role="button" className={`${className} text-white bg-wedgewood-400 hover:bg-wedgewood-500 border border-gray-200 rounded-xl px-2 py-1 text-sm font-normal ${className}`}>
            {children}
        </div>
    )
}