function SearchFooter() {
    return (
        <footer className='dark:bg-[#171717]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense sm:pl-[5%] md:pl-[14%] lg:pl-52 py-3 px-8">
                <div className="flex justify-center space-x-8 ml- whitespace-nowrap md:justify-self-start text-sm dark:text-[#969ba1]">
                    <p className="link">Help</p>
                    <p className="link">Send feedback</p>
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                </div>
            </div>
        </footer>
    )
}

export default SearchFooter;