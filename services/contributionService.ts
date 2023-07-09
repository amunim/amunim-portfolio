export type ContributionParams = {
    title: string,
    description: string,
    link: string,
    language: string,
    languageColor: string,
}

const getContributionItems: () => Promise<ContributionParams[]> = () =>
{
    return Promise.resolve(
        [
            {
              title: "MediatR",
              description: `Simple mediator implementation in .NET
        
              In-process messaging with no dependencies.
        
              Supports request/response, commands, queries, notifications and events, synchronous and async with intelligent dispatching via C# generic variance.`,
              link: "https://stackoverflow.com/questions/73760859/mediatr-generic-handlers/73760945#73760945",
              language: "C#",
              languageColor: "#21C861"
            },
            {
              title: "AntDesign rc-Rate",
              description: "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.",
              link: "https://github.com/react-component/rate/pull/137",
              language: "Typescript",
              languageColor: "#3178c6"
            },
            {
              title: "Custom Electron Prompt",
              description: `Custom prompt for Electron made easy with various templates
              
              There are currently 5 types available: Input / Keybind / Counter / Select / MultiInput
              
              There is also an option for a button with user-defined onclick function.`,
              link: "https://github.com/Araxeus/custom-electron-prompt",
              language: "Javascript",
              languageColor: "#F1E05A"
            },
            {
              title: "Flagsmith blog",
              description: `Behind the technical writing article for flagsmith.
              
              Flagsmith is a feature management platform that allows you to fully test and control features simply by flicking a toggle
              
              The article features a step-by-step tutorial on how to configure and use flagsmith along with tips on best practices leveraging my experience and fondness of C# into words.
              One of the highlight of the article was t4 templates to import flags from flagsmith in .cs files as enums.`,
              link: "https://www.flagsmith.com/blog/net-feature-flag",
              language: "C#",
              languageColor: "#21C861"
            },
          ]
    );
};

export { getContributionItems };