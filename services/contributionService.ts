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
              description: "A StackOverflow answer about generic handlers in MediatR, the dependency-free mediator library for in-process messaging in .NET.",
              link: "https://stackoverflow.com/questions/73760859/mediatr-generic-handlers/73760945#73760945",
              language: "C#",
              languageColor: "#21C861"
            },
            {
              title: "Ant Design rc-rate",
              description: "A pull request to rc-rate, the React rating component used by Ant Design.",
              link: "https://github.com/react-component/rate/pull/137",
              language: "TypeScript",
              languageColor: "#3178c6"
            },
            {
              title: "Custom Electron Prompt",
              description: "A contribution to a library of prompt templates for Electron: input, keybind, counter, select and multi-input, plus buttons with your own click handler.",
              link: "https://github.com/Araxeus/custom-electron-prompt",
              language: "JavaScript",
              languageColor: "#F1E05A"
            },
            {
              title: "Flagsmith blog",
              description: "A technical article for Flagsmith on using feature flags in .NET, step by step, with T4 templates that import flags as C# enums.",
              link: "https://www.flagsmith.com/blog/net-feature-flag",
              language: "C#",
              languageColor: "#21C861"
            },
          ]
    );
};

export { getContributionItems };
