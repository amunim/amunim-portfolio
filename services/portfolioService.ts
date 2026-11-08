export type PortfolioParams = {
    Id: number,
    title: string,
    year: string,
    description: string,
    posterLink: string,
    videoLink: string,
    previewLink: string,
    visitLink: string,
    previewText?: string,
    visitText?: string,
    mediaAlt?: string
}

const getPortfolioItems: () => Promise<PortfolioParams[]> = () => {
    //perhaps call an API to get the items

    // previewLink / visitLink of "" or "#main" mean there is no public page: no button is rendered.
    return Promise.resolve([
        {
            Id: 5,
            title: "Zid Sheets Integration",
            previewLink: "https://zidsheets.amunim.me/en/privacy-policy",
            previewText: "Read the privacy policy",
            visitText: "Visit Zid Sheets",
            description: `A low-code integration between Zid stores (the Shopify of the Middle East) and Google Sheets.

Orders, customers and carts export to the sheets you pick, in real time, through a simple interface in English and Arabic.`,
            year: "Recommended",
            // https://zidsheets.amunim.me/en/sheet-preview.mp4 returned 404 on 2026-11-08; restore videoLink once it is back.
            videoLink: "",
            posterLink: "",
            mediaAlt: "Zid Sheets exporting store orders into a Google Sheet",
            visitLink: "https://zidsheets.amunim.me/"
        },
        {
            Id: 1,
            title: "Sunspots, Crystal Cabins and Goldener Inns",
            previewLink: "",
            description: `Online rentals for houses, units and complexes, booked by the night. The calendar, member details, news, blog and checkout run on many domains from a single monolithic back-end.

Bookings also arrive from Airbnb, Booking.com and similar channels, and single units can have their own independent site.

- [Goldener Inns](https://goldenerinns.com)
- [Crystal Cabins](https://crystalcabins.com/)
- [Bedfinders](https://bedfinders.com)
- [101escapes](https://101escapes.com)
- [Arrow Point Condos](https://arrowpointcondos.com)
- [Sweet Caroline Inn](https://sweetcarolineinn.com)
- [Criss Cross Condo](https://crisscrosscondo.com)
- [All Points Central](https://allpointscentral.com)`,
            year: "Recommended",
            videoLink: "",
            posterLink: "",
            visitLink: ""
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
            previewLink: "",
            description: `Accounting software for invoices and for journal, bank and cash vouchers, with reports by project and by customer:

- Audit trail
- Trial balance
- Income and expense
- Controlling balance
- Yearly comparison (expense)
- Project-wise accounts summary
- Project-wise non-expense accounts summary`,
            year: "2022",
            posterLink: "",
            // the 6 MB gif of the same recording is still in /public/portfolio
            videoLink: "/portfolio/accounting.mp4",
            mediaAlt: "Simple Accounting creating an invoice and running a report",
            visitLink: ""
        },
        {
            Id: 3,
            title: "Opticofy",
            previewLink: "",
            description: `A point-of-sale app for optical shops. Add a customer, record a sale or a receivable, then report on yearly or per-customer sales.`,
            year: "2021",
            posterLink: "/portfolio/opticofy.gif",
            mediaAlt: "Opticofy point-of-sale menu with customer, sales and report screens",
            videoLink: "",
            visitText: "Visit Opticofy",
            visitLink: "https://opticofy.com/"
        },
    ]);
}

export { getPortfolioItems };
