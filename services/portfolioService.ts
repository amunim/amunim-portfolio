export type PortfolioParams = {
    Id: number,
    title: string,
    year: string,
    description: string,
    videoLink: string,
    previewLink: string,
    visitLink: string
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
            visitLink: "#main"
        },
        {
            Id: 2,
            title: "Agyle Intelligence ",
            previewLink: "#main",
            description: "A platform for automating data collection and reporting throughout teams, operations and supply chains.\n\nDesign by Kristin Killam.",
            year: "2019",
            videoLink: "#main",
            visitLink: "#main"
        },
        {
            Id: 3,
            title: "Hal-Con",
            previewLink: "#main",
            description: "Atlantic Canada's premier sci-fi and gaming convention.",
            year: "2015",
            videoLink: "#main",
            visitLink: "#main"
        },
    ]);
}

export { getPortfolioItems };