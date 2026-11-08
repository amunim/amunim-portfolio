import { PortfolioParams } from "@/services/portfolioService";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const hasLink = (href?: string) => !!href && href !== "#main";

export default function PortfolioItem({ title, year, posterLink, description, videoLink, previewLink, visitLink, previewText, visitText, mediaAlt, flip }: PortfolioParams & { flip?: boolean }) {
    const hasMedia = !!videoLink || !!posterLink;
    const hasVisit = hasLink(visitLink);
    const hasPreview = hasLink(previewLink) && previewLink !== visitLink;

    const body = (
        <div className='work-row__body'>
            <p className='work-row__meta'>{year}</p>
            <h3 className='work-row__title'>{title}</h3>
            {hasMedia && <div className='prose'><ReactMarkdown>{description}</ReactMarkdown></div>}
            {(hasVisit || hasPreview) && (
                <div className='work-row__actions'>
                    {hasVisit && <a href={visitLink} target='_blank' rel='noreferrer' className='btn btn-ghost'>{visitText ?? "Visit site"}</a>}
                    {hasPreview && <a href={previewLink} target='_blank' rel='noreferrer' className='link'>{previewText ?? "Preview"}</a>}
                </div>
            )}
        </div>
    );

    if (!hasMedia) {
        // no screen recording: the text and its list of links take the second column
        return (
            <article className={`work-row work-row--text${flip ? ' work-row--flip' : ''}`}>
                {body}
                <div className='work-row__aside'>
                    <div className='prose'><ReactMarkdown>{description}</ReactMarkdown></div>
                </div>
            </article>
        );
    }

    return (
        <article className={`work-row${flip ? ' work-row--flip' : ''}`}>
            {body}
            <div className='work-row__media print'>
                {videoLink ? (
                    <video autoPlay loop muted playsInline preload='metadata' aria-label={mediaAlt}>
                        <source src={videoLink} />
                    </video>
                ) : (
                    <img src={posterLink} alt={mediaAlt ?? title} loading='lazy' />
                )}
            </div>
        </article>
    );
}
