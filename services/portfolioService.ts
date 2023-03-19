export type PortfolioParams = {
    Id: number,
    title: string,
    year: string,
    description: string,
    posterLink: string,
    videoLink: string,
    previewLink: string,
    visitLink: string,
}

const getPortfolioItems: () => Promise<PortfolioParams[]> = () => {
    //perhaps call an API to get the items

    return Promise.resolve([
        {
            Id: 1,
            title: "Marker.io",
            previewLink: "#main",
            description: "Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.",
            year: "Recommmended",
            videoLink: "#main",
            posterLink: "",
            visitLink: "#main"
        },
        {
            Id: 2,
            title: "Simple Accounting",
            previewLink: "#main",
            description: `A simple accounting software to create invoices, JV/Bank Voucher/Cash Voucher. Project/Customer wise reports or vouchers. Reporting such as
    Audit Trail
    Trail Balance
    Income Expense
    Controlling Balance
    Yearly Comparision (Expense)
    Project wise Accounts Summary
    Project wise Non Expense Accounts summary`,
            year: "2022",
            videoLink: "/portfolio/accounting.mp4",
            posterLink: "",
            visitLink: "#main"
        },
        {
            Id: 3,
            title: "Opticofy",
            previewLink: "#main",
            description: `A simple POS application to create invoices for sales in optical shop vendors, simply add a customer info, create recievables or sales records. Later Have reporting on yearly sales or customer-wise sales`,
            year: "2021",
            posterLink: "/portfolio/opticofy.gif",
            videoLink: "",
            visitLink: "https://opticofy.com/"
        },
    ]);
}

export { getPortfolioItems };