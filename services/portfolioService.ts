export type PortfolioParams = {
    Id: number,
    title: string,
    year: string,
    description: string,
    posterLink: string,
    videoLink: string,
    previewLink: string,
    visitLink: string,
    previewText?: string
}

const getPortfolioItems: () => Promise<PortfolioParams[]> = () => {
    //perhaps call an API to get the items

    return Promise.resolve([
        {
            Id: 5,
            title: "Zid Sheets Integration",
            previewLink: "https://zidsheets.amunim.me/en/privacy-policy",
            previewText: "Privacy Policy",
            description: `A low code solution that integrate zid (shopify for the middle east) stores with google sheets.
            Easily export all your orders, customers, carts to selected sheets with a very simple UI/UX in real-time.
            App features english and arabic support.`,
            year: "Recommmended",
            videoLink: "https://zidsheets.amunim.me/en/sheet-preview.mp4",
            posterLink: "",
            visitLink: "https://zidsheets.amunim.me/"
        },
        {
            Id: 1,
            title: "Sunspots/Crystal Cabin/Goldener Inns",
            previewLink: "https://goldenerinns.com/",
            description: `Online Rentals, booking houses, units, complexes for multiple nightes. Displaying data calendar, member details, news, blogs and everything in between like checkout all on different domains with multiple units featuring on a range of domains powered by a single monolithic back-end.
Bookings can also arrive from airbnb, booking and other houdini sites(independant website for a specific unit).
A few domains are:  
    - [Goldener Inns](https://goldenerinns.com)
    - [Crystal Cabins](https://crystalcabins.com/)  
    - [Bedfinders](https://bedfinders.com)
    - [101escapes](https://101escapes.com)
    - [Arrow Point Condos](https://arrowpointcondos.com)
    - [Sweet Caroline Inn](https://sweetcarolineinn.com)
    - [Criss Cross Condo](https://crisscrosscondo.com)
    - [All Points Central](https://allpointscentral.com)
    `,
            year: "Recommmended",
            videoLink: "",
            posterLink: "/portfolio/goldener.gif",
            visitLink: "https://crystalcabins.com/"
        },
        /*{
            Id: 4,
            title: "Bonoki",
            previewLink: "https://play.google.com/store/apps/details?id=com.amfk.oyigula&pli=1",
            description: `An automatic wallet that inserts data by SMS
    Whenever you get a SMS the appropriate account gets updated with the latest transaction
    Later you can tag, categorise the transactions.
    Reporting tools such as summary, exporting to CSV, subscription based auto insertion records.
    Multiple currencies, credit card, account numbers supported`,
            year: "2023",
            posterLink: "/portfolio/bonoki.gif",
            videoLink: "",
            visitLink: "https://play.google.com/store/apps/details?id=com.amfk.oyigula&pli=1"
        },*/
        {
            Id: 2,
            title: "Simple Accounting",
            previewLink: "#main",
            description: `A simple accounting software to create invoices, JV/Bank Voucher/Cash Voucher. Project/Customer wise reports or vouchers. Reporting such as
    - Audit Trail
    - Trail Balance
    - Income Expense
    - Controlling Balance
    - Yearly Comparision (Expense)
    - Project wise Accounts Summary
    - Project wise Non Expense Accounts summary`,
            year: "2022",
            posterLink: "/portfolio/accounting.gif",
            videoLink: "",
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
