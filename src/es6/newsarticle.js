/* NewsArticle - A news article.. Generated automatically by the reactGenerator. */
import AudioObject from './audioobject.js';
import Comment from './comment.js';
import VideoObject from './videoobject.js';
import AlignmentObject from './alignmentobject.js';
import Action from './action.js';
import Language from './language.js';
import AggregateRating from './aggregaterating.js';
import MediaObject from './mediaobject.js';
import Offer from './offer.js';
import PublicationEvent from './publicationevent.js';
import Person from './person.js';
import ImageObject from './imageobject.js';
import Thing from './thing.js';
import Audience from './audience.js';
import Place from './place.js';
import InteractionCounter from './interactioncounter.js';
import Duration from './duration.js';
import Organization from './organization.js';
import CreativeWork from './creativework.js';
import Event from './event.js';
import Review from './review.js';


import React, {
  Component
} from 'react';

export default class NewsArticle extends Component {
    render() {
        let educationalUse;
        if (this.props.educationalUse) {
            if (this.props.educationalUse instanceof Array) {
                educationalUse = (
                   <div className='educationalUse-container'>
                       <div className='educationalUse-header' data-advice='HTML for the *head* of the section'>educationalUses</div>
                       {this.props.educationalUse.map((item, index) => {
                           return (<div className='educationalUse' data-advice='Put your HTML here. educationalUse is a Text.'><p className="NewsArticle-educationalUse">educationalUse: {this.props.educationalUse}</p></div>);
                       })};
                       <div className='educationalUse-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                educationalUse = (<div className='educationalUse' data-advice='Put your HTML here. educationalUse is a Text.'><p className="NewsArticle-educationalUse">educationalUse: {this.props.educationalUse}</p></div>);
            }
        }

        let producer;
        if (this.props.producer) {
            if (this.props.producer instanceof Array) {
                producer = (
                   <div className='producer-container'>
                       <div className='producer-header' data-advice='HTML for the *head* of the section'>producers</div>
                       {this.props.producer.map((item, index) => {
                           return (<div className='producer' data-advice='Put your HTML here. producer is a Person or Organization.'><div className="NewsArticle-producer">producer: {this.props.producer}</div></div>);
                       })};
                       <div className='producer-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                producer = (<div className='producer' data-advice='Put your HTML here. producer is a Person or Organization.'><div className="NewsArticle-producer">producer: {this.props.producer}</div></div>);
            }
        }

        let text;
        if (this.props.text) {
            if (this.props.text instanceof Array) {
                text = (
                   <div className='text-container'>
                       <div className='text-header' data-advice='HTML for the *head* of the section'>texts</div>
                       {this.props.text.map((item, index) => {
                           return (<div className='text' data-advice='Put your HTML here. text is a Text.'><p className="NewsArticle-text">text: {this.props.text}</p></div>);
                       })};
                       <div className='text-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                text = (<div className='text' data-advice='Put your HTML here. text is a Text.'><p className="NewsArticle-text">text: {this.props.text}</p></div>);
            }
        }

        let pageEnd;
        if (this.props.pageEnd) {
            if (this.props.pageEnd instanceof Array) {
                pageEnd = (
                   <div className='pageEnd-container'>
                       <div className='pageEnd-header' data-advice='HTML for the *head* of the section'>pageEnds</div>
                       {this.props.pageEnd.map((item, index) => {
                           return (<div className='pageEnd' data-advice='Put your HTML here. pageEnd is a Integer or Text.'><div className="NewsArticle-pageEnd">pageEnd: {this.props.pageEnd}</div></div>);
                       })};
                       <div className='pageEnd-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                pageEnd = (<div className='pageEnd' data-advice='Put your HTML here. pageEnd is a Integer or Text.'><div className="NewsArticle-pageEnd">pageEnd: {this.props.pageEnd}</div></div>);
            }
        }

        let alternativeHeadline;
        if (this.props.alternativeHeadline) {
            if (this.props.alternativeHeadline instanceof Array) {
                alternativeHeadline = (
                   <div className='alternativeHeadline-container'>
                       <div className='alternativeHeadline-header' data-advice='HTML for the *head* of the section'>alternativeHeadlines</div>
                       {this.props.alternativeHeadline.map((item, index) => {
                           return (<div className='alternativeHeadline' data-advice='Put your HTML here. alternativeHeadline is a Text.'><p className="NewsArticle-alternativeHeadline">alternativeHeadline: {this.props.alternativeHeadline}</p></div>);
                       })};
                       <div className='alternativeHeadline-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternativeHeadline = (<div className='alternativeHeadline' data-advice='Put your HTML here. alternativeHeadline is a Text.'><p className="NewsArticle-alternativeHeadline">alternativeHeadline: {this.props.alternativeHeadline}</p></div>);
            }
        }

        let accountablePerson;
        if (this.props.accountablePerson) {
            if (this.props.accountablePerson instanceof Array) {
                accountablePerson = (
                   <div className='accountablePerson-container'>
                       <div className='accountablePerson-header' data-advice='HTML for the *head* of the section'>accountablePersons</div>
                       {this.props.accountablePerson.map((item, index) => {
                           return (<Person key={index} {...this.props.accountablePerson} />);
                       })};
                       <div className='accountablePerson-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accountablePerson = (<Person  {...this.props.accountablePerson} />);
            }
        }

        let keywords;
        if (this.props.keywords) {
            if (this.props.keywords instanceof Array) {
                keywords = (
                   <div className='keywords-container'>
                       <div className='keywords-header' data-advice='HTML for the *head* of the section'>keywordss</div>
                       {this.props.keywords.map((item, index) => {
                           return (<div className='keywords' data-advice='Put your HTML here. keywords is a Text.'><p className="NewsArticle-keywords">keywords: {this.props.keywords}</p></div>);
                       })};
                       <div className='keywords-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                keywords = (<div className='keywords' data-advice='Put your HTML here. keywords is a Text.'><p className="NewsArticle-keywords">keywords: {this.props.keywords}</p></div>);
            }
        }

        let headline;
        if (this.props.headline) {
            if (this.props.headline instanceof Array) {
                headline = (
                   <div className='headline-container'>
                       <div className='headline-header' data-advice='HTML for the *head* of the section'>headlines</div>
                       {this.props.headline.map((item, index) => {
                           return (<div className='headline' data-advice='Put your HTML here. headline is a Text.'><p className="NewsArticle-headline">headline: {this.props.headline}</p></div>);
                       })};
                       <div className='headline-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                headline = (<div className='headline' data-advice='Put your HTML here. headline is a Text.'><p className="NewsArticle-headline">headline: {this.props.headline}</p></div>);
            }
        }

        let dateline;
        if (this.props.dateline) {
            if (this.props.dateline instanceof Array) {
                dateline = (
                   <div className='dateline-container'>
                       <div className='dateline-header' data-advice='HTML for the *head* of the section'>datelines</div>
                       {this.props.dateline.map((item, index) => {
                           return (<div className='dateline' data-advice='Put your HTML here. dateline is a Text.'><p className="NewsArticle-dateline">dateline: {this.props.dateline}</p></div>);
                       })};
                       <div className='dateline-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateline = (<div className='dateline' data-advice='Put your HTML here. dateline is a Text.'><p className="NewsArticle-dateline">dateline: {this.props.dateline}</p></div>);
            }
        }

        let encoding;
        if (this.props.encoding) {
            if (this.props.encoding instanceof Array) {
                encoding = (
                   <div className='encoding-container'>
                       <div className='encoding-header' data-advice='HTML for the *head* of the section'>encodings</div>
                       {this.props.encoding.map((item, index) => {
                           return (<MediaObject key={index} {...this.props.encoding} />);
                       })};
                       <div className='encoding-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                encoding = (<MediaObject  {...this.props.encoding} />);
            }
        }

        let character;
        if (this.props.character) {
            if (this.props.character instanceof Array) {
                character = (
                   <div className='character-container'>
                       <div className='character-header' data-advice='HTML for the *head* of the section'>characters</div>
                       {this.props.character.map((item, index) => {
                           return (<Person key={index} {...this.props.character} />);
                       })};
                       <div className='character-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                character = (<Person  {...this.props.character} />);
            }
        }

        let contentRating;
        if (this.props.contentRating) {
            if (this.props.contentRating instanceof Array) {
                contentRating = (
                   <div className='contentRating-container'>
                       <div className='contentRating-header' data-advice='HTML for the *head* of the section'>contentRatings</div>
                       {this.props.contentRating.map((item, index) => {
                           return (<div className='contentRating' data-advice='Put your HTML here. contentRating is a Text.'><p className="NewsArticle-contentRating">contentRating: {this.props.contentRating}</p></div>);
                       })};
                       <div className='contentRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contentRating = (<div className='contentRating' data-advice='Put your HTML here. contentRating is a Text.'><p className="NewsArticle-contentRating">contentRating: {this.props.contentRating}</p></div>);
            }
        }

        let exampleOfWork;
        if (this.props.exampleOfWork) {
            if (this.props.exampleOfWork instanceof Array) {
                exampleOfWork = (
                   <div className='exampleOfWork-container'>
                       <div className='exampleOfWork-header' data-advice='HTML for the *head* of the section'>exampleOfWorks</div>
                       {this.props.exampleOfWork.map((item, index) => {
                           return (<CreativeWork key={index} {...this.props.exampleOfWork} />);
                       })};
                       <div className='exampleOfWork-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                exampleOfWork = (<CreativeWork  {...this.props.exampleOfWork} />);
            }
        }

        let publishingPrinciples;
        if (this.props.publishingPrinciples) {
            if (this.props.publishingPrinciples instanceof Array) {
                publishingPrinciples = (
                   <div className='publishingPrinciples-container'>
                       <div className='publishingPrinciples-header' data-advice='HTML for the *head* of the section'>publishingPrincipless</div>
                       {this.props.publishingPrinciples.map((item, index) => {
                           return (<div className='publishingPrinciples' data-advice='Put your HTML here. publishingPrinciples is a URL.'><a className="NewsArticle-publishingPrinciples" href={this.props.publishingPrinciples} target="_blank">publishingPrinciples</a></div>);
                       })};
                       <div className='publishingPrinciples-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                publishingPrinciples = (<div className='publishingPrinciples' data-advice='Put your HTML here. publishingPrinciples is a URL.'><a className="NewsArticle-publishingPrinciples" href={this.props.publishingPrinciples} target="_blank">publishingPrinciples</a></div>);
            }
        }

        let printEdition;
        if (this.props.printEdition) {
            if (this.props.printEdition instanceof Array) {
                printEdition = (
                   <div className='printEdition-container'>
                       <div className='printEdition-header' data-advice='HTML for the *head* of the section'>printEditions</div>
                       {this.props.printEdition.map((item, index) => {
                           return (<div className='printEdition' data-advice='Put your HTML here. printEdition is a Text.'><p className="NewsArticle-printEdition">printEdition: {this.props.printEdition}</p></div>);
                       })};
                       <div className='printEdition-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                printEdition = (<div className='printEdition' data-advice='Put your HTML here. printEdition is a Text.'><p className="NewsArticle-printEdition">printEdition: {this.props.printEdition}</p></div>);
            }
        }

        let dateCreated;
        if (this.props.dateCreated) {
            if (this.props.dateCreated instanceof Array) {
                dateCreated = (
                   <div className='dateCreated-container'>
                       <div className='dateCreated-header' data-advice='HTML for the *head* of the section'>dateCreateds</div>
                       {this.props.dateCreated.map((item, index) => {
                           return (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date or DateTime.'><div className="NewsArticle-dateCreated">dateCreated: {this.props.dateCreated}</div></div>);
                       })};
                       <div className='dateCreated-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateCreated = (<div className='dateCreated' data-advice='Put your HTML here. dateCreated is a Date or DateTime.'><div className="NewsArticle-dateCreated">dateCreated: {this.props.dateCreated}</div></div>);
            }
        }

        let datePublished;
        if (this.props.datePublished) {
            if (this.props.datePublished instanceof Array) {
                datePublished = (
                   <div className='datePublished-container'>
                       <div className='datePublished-header' data-advice='HTML for the *head* of the section'>datePublisheds</div>
                       {this.props.datePublished.map((item, index) => {
                           return (<div className='datePublished' data-advice='Put your HTML here. datePublished is a Date.'><time className="NewsArticle-datePublished">datePublished: {this.props.datePublished}</time></div>);
                       })};
                       <div className='datePublished-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                datePublished = (<div className='datePublished' data-advice='Put your HTML here. datePublished is a Date.'><time className="NewsArticle-datePublished">datePublished: {this.props.datePublished}</time></div>);
            }
        }

        let potentialAction;
        if (this.props.potentialAction) {
            if (this.props.potentialAction instanceof Array) {
                potentialAction = (
                   <div className='potentialAction-container'>
                       <div className='potentialAction-header' data-advice='HTML for the *head* of the section'>potentialActions</div>
                       {this.props.potentialAction.map((item, index) => {
                           return (<Action key={index} {...this.props.potentialAction} />);
                       })};
                       <div className='potentialAction-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                potentialAction = (<Action  {...this.props.potentialAction} />);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="NewsArticle-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="NewsArticle-name">name: {this.props.name}</p></div>);
            }
        }

        let aggregateRating;
        if (this.props.aggregateRating) {
            if (this.props.aggregateRating instanceof Array) {
                aggregateRating = (
                   <div className='aggregateRating-container'>
                       <div className='aggregateRating-header' data-advice='HTML for the *head* of the section'>aggregateRatings</div>
                       {this.props.aggregateRating.map((item, index) => {
                           return (<AggregateRating key={index} {...this.props.aggregateRating} />);
                       })};
                       <div className='aggregateRating-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                aggregateRating = (<AggregateRating  {...this.props.aggregateRating} />);
            }
        }

        let printSection;
        if (this.props.printSection) {
            if (this.props.printSection instanceof Array) {
                printSection = (
                   <div className='printSection-container'>
                       <div className='printSection-header' data-advice='HTML for the *head* of the section'>printSections</div>
                       {this.props.printSection.map((item, index) => {
                           return (<div className='printSection' data-advice='Put your HTML here. printSection is a Text.'><p className="NewsArticle-printSection">printSection: {this.props.printSection}</p></div>);
                       })};
                       <div className='printSection-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                printSection = (<div className='printSection' data-advice='Put your HTML here. printSection is a Text.'><p className="NewsArticle-printSection">printSection: {this.props.printSection}</p></div>);
            }
        }

        let audience;
        if (this.props.audience) {
            if (this.props.audience instanceof Array) {
                audience = (
                   <div className='audience-container'>
                       <div className='audience-header' data-advice='HTML for the *head* of the section'>audiences</div>
                       {this.props.audience.map((item, index) => {
                           return (<Audience key={index} {...this.props.audience} />);
                       })};
                       <div className='audience-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audience = (<Audience  {...this.props.audience} />);
            }
        }

        let accessibilityControl;
        if (this.props.accessibilityControl) {
            if (this.props.accessibilityControl instanceof Array) {
                accessibilityControl = (
                   <div className='accessibilityControl-container'>
                       <div className='accessibilityControl-header' data-advice='HTML for the *head* of the section'>accessibilityControls</div>
                       {this.props.accessibilityControl.map((item, index) => {
                           return (<div className='accessibilityControl' data-advice='Put your HTML here. accessibilityControl is a Text.'><p className="NewsArticle-accessibilityControl">accessibilityControl: {this.props.accessibilityControl}</p></div>);
                       })};
                       <div className='accessibilityControl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accessibilityControl = (<div className='accessibilityControl' data-advice='Put your HTML here. accessibilityControl is a Text.'><p className="NewsArticle-accessibilityControl">accessibilityControl: {this.props.accessibilityControl}</p></div>);
            }
        }

        let articleBody;
        if (this.props.articleBody) {
            if (this.props.articleBody instanceof Array) {
                articleBody = (
                   <div className='articleBody-container'>
                       <div className='articleBody-header' data-advice='HTML for the *head* of the section'>articleBodys</div>
                       {this.props.articleBody.map((item, index) => {
                           return (<div className='articleBody' data-advice='Put your HTML here. articleBody is a Text.'><p className="NewsArticle-articleBody">articleBody: {this.props.articleBody}</p></div>);
                       })};
                       <div className='articleBody-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                articleBody = (<div className='articleBody' data-advice='Put your HTML here. articleBody is a Text.'><p className="NewsArticle-articleBody">articleBody: {this.props.articleBody}</p></div>);
            }
        }

        let creator;
        if (this.props.creator) {
            if (this.props.creator instanceof Array) {
                creator = (
                   <div className='creator-container'>
                       <div className='creator-header' data-advice='HTML for the *head* of the section'>creators</div>
                       {this.props.creator.map((item, index) => {
                           return (<div className='creator' data-advice='Put your HTML here. creator is a Person or Organization.'><div className="NewsArticle-creator">creator: {this.props.creator}</div></div>);
                       })};
                       <div className='creator-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                creator = (<div className='creator' data-advice='Put your HTML here. creator is a Person or Organization.'><div className="NewsArticle-creator">creator: {this.props.creator}</div></div>);
            }
        }

        let commentCount;
        if (this.props.commentCount) {
            if (this.props.commentCount instanceof Array) {
                commentCount = (
                   <div className='commentCount-container'>
                       <div className='commentCount-header' data-advice='HTML for the *head* of the section'>commentCounts</div>
                       {this.props.commentCount.map((item, index) => {
                           return (<div className='commentCount' data-advice='Put your HTML here. commentCount is a Integer.'><p className="NewsArticle-commentCount">commentCount: {this.props.commentCount}</p></div>);
                       })};
                       <div className='commentCount-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                commentCount = (<div className='commentCount' data-advice='Put your HTML here. commentCount is a Integer.'><p className="NewsArticle-commentCount">commentCount: {this.props.commentCount}</p></div>);
            }
        }

        let video;
        if (this.props.video) {
            if (this.props.video instanceof Array) {
                video = (
                   <div className='video-container'>
                       <div className='video-header' data-advice='HTML for the *head* of the section'>videos</div>
                       {this.props.video.map((item, index) => {
                           return (<VideoObject key={index} {...this.props.video} />);
                       })};
                       <div className='video-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                video = (<VideoObject  {...this.props.video} />);
            }
        }

        let typicalAgeRange;
        if (this.props.typicalAgeRange) {
            if (this.props.typicalAgeRange instanceof Array) {
                typicalAgeRange = (
                   <div className='typicalAgeRange-container'>
                       <div className='typicalAgeRange-header' data-advice='HTML for the *head* of the section'>typicalAgeRanges</div>
                       {this.props.typicalAgeRange.map((item, index) => {
                           return (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="NewsArticle-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
                       })};
                       <div className='typicalAgeRange-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                typicalAgeRange = (<div className='typicalAgeRange' data-advice='Put your HTML here. typicalAgeRange is a Text.'><p className="NewsArticle-typicalAgeRange">typicalAgeRange: {this.props.typicalAgeRange}</p></div>);
            }
        }

        let fileFormat;
        if (this.props.fileFormat) {
            if (this.props.fileFormat instanceof Array) {
                fileFormat = (
                   <div className='fileFormat-container'>
                       <div className='fileFormat-header' data-advice='HTML for the *head* of the section'>fileFormats</div>
                       {this.props.fileFormat.map((item, index) => {
                           return (<div className='fileFormat' data-advice='Put your HTML here. fileFormat is a Text.'><p className="NewsArticle-fileFormat">fileFormat: {this.props.fileFormat}</p></div>);
                       })};
                       <div className='fileFormat-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                fileFormat = (<div className='fileFormat' data-advice='Put your HTML here. fileFormat is a Text.'><p className="NewsArticle-fileFormat">fileFormat: {this.props.fileFormat}</p></div>);
            }
        }

        let discussionUrl;
        if (this.props.discussionUrl) {
            if (this.props.discussionUrl instanceof Array) {
                discussionUrl = (
                   <div className='discussionUrl-container'>
                       <div className='discussionUrl-header' data-advice='HTML for the *head* of the section'>discussionUrls</div>
                       {this.props.discussionUrl.map((item, index) => {
                           return (<div className='discussionUrl' data-advice='Put your HTML here. discussionUrl is a URL.'><a className="NewsArticle-discussionUrl" href={this.props.discussionUrl} target="_blank">discussionUrl</a></div>);
                       })};
                       <div className='discussionUrl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                discussionUrl = (<div className='discussionUrl' data-advice='Put your HTML here. discussionUrl is a URL.'><a className="NewsArticle-discussionUrl" href={this.props.discussionUrl} target="_blank">discussionUrl</a></div>);
            }
        }

        let review;
        if (this.props.review) {
            if (this.props.review instanceof Array) {
                review = (
                   <div className='review-container'>
                       <div className='review-header' data-advice='HTML for the *head* of the section'>reviews</div>
                       {this.props.review.map((item, index) => {
                           return (<Review key={index} {...this.props.review} />);
                       })};
                       <div className='review-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                review = (<Review  {...this.props.review} />);
            }
        }

        let isFamilyFriendly;
        if (this.props.isFamilyFriendly) {
            if (this.props.isFamilyFriendly instanceof Array) {
                isFamilyFriendly = (
                   <div className='isFamilyFriendly-container'>
                       <div className='isFamilyFriendly-header' data-advice='HTML for the *head* of the section'>isFamilyFriendlys</div>
                       {this.props.isFamilyFriendly.map((item, index) => {
                           return (<div className='isFamilyFriendly' data-advice='Put your HTML here. isFamilyFriendly is a Boolean.'><div className="NewsArticle-isFamilyFriendly">isFamilyFriendly: {this.props.isFamilyFriendly}</div></div>);
                       })};
                       <div className='isFamilyFriendly-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isFamilyFriendly = (<div className='isFamilyFriendly' data-advice='Put your HTML here. isFamilyFriendly is a Boolean.'><div className="NewsArticle-isFamilyFriendly">isFamilyFriendly: {this.props.isFamilyFriendly}</div></div>);
            }
        }

        let version;
        if (this.props.version) {
            if (this.props.version instanceof Array) {
                version = (
                   <div className='version-container'>
                       <div className='version-header' data-advice='HTML for the *head* of the section'>versions</div>
                       {this.props.version.map((item, index) => {
                           return (<div className='version' data-advice='Put your HTML here. version is a Number.'><p className="NewsArticle-version">version: {this.props.version}</p></div>);
                       })};
                       <div className='version-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                version = (<div className='version' data-advice='Put your HTML here. version is a Number.'><p className="NewsArticle-version">version: {this.props.version}</p></div>);
            }
        }

        let locationCreated;
        if (this.props.locationCreated) {
            if (this.props.locationCreated instanceof Array) {
                locationCreated = (
                   <div className='locationCreated-container'>
                       <div className='locationCreated-header' data-advice='HTML for the *head* of the section'>locationCreateds</div>
                       {this.props.locationCreated.map((item, index) => {
                           return (<Place key={index} {...this.props.locationCreated} />);
                       })};
                       <div className='locationCreated-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                locationCreated = (<Place  {...this.props.locationCreated} />);
            }
        }

        let provider;
        if (this.props.provider) {
            if (this.props.provider instanceof Array) {
                provider = (
                   <div className='provider-container'>
                       <div className='provider-header' data-advice='HTML for the *head* of the section'>providers</div>
                       {this.props.provider.map((item, index) => {
                           return (<div className='provider' data-advice='Put your HTML here. provider is a Person or Organization.'><div className="NewsArticle-provider">provider: {this.props.provider}</div></div>);
                       })};
                       <div className='provider-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                provider = (<div className='provider' data-advice='Put your HTML here. provider is a Person or Organization.'><div className="NewsArticle-provider">provider: {this.props.provider}</div></div>);
            }
        }

        let isPartOf;
        if (this.props.isPartOf) {
            if (this.props.isPartOf instanceof Array) {
                isPartOf = (
                   <div className='isPartOf-container'>
                       <div className='isPartOf-header' data-advice='HTML for the *head* of the section'>isPartOfs</div>
                       {this.props.isPartOf.map((item, index) => {
                           return (<CreativeWork key={index} {...this.props.isPartOf} />);
                       })};
                       <div className='isPartOf-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isPartOf = (<CreativeWork  {...this.props.isPartOf} />);
            }
        }

        let accessibilityHazard;
        if (this.props.accessibilityHazard) {
            if (this.props.accessibilityHazard instanceof Array) {
                accessibilityHazard = (
                   <div className='accessibilityHazard-container'>
                       <div className='accessibilityHazard-header' data-advice='HTML for the *head* of the section'>accessibilityHazards</div>
                       {this.props.accessibilityHazard.map((item, index) => {
                           return (<div className='accessibilityHazard' data-advice='Put your HTML here. accessibilityHazard is a Text.'><p className="NewsArticle-accessibilityHazard">accessibilityHazard: {this.props.accessibilityHazard}</p></div>);
                       })};
                       <div className='accessibilityHazard-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accessibilityHazard = (<div className='accessibilityHazard' data-advice='Put your HTML here. accessibilityHazard is a Text.'><p className="NewsArticle-accessibilityHazard">accessibilityHazard: {this.props.accessibilityHazard}</p></div>);
            }
        }

        let educationalAlignment;
        if (this.props.educationalAlignment) {
            if (this.props.educationalAlignment instanceof Array) {
                educationalAlignment = (
                   <div className='educationalAlignment-container'>
                       <div className='educationalAlignment-header' data-advice='HTML for the *head* of the section'>educationalAlignments</div>
                       {this.props.educationalAlignment.map((item, index) => {
                           return (<AlignmentObject key={index} {...this.props.educationalAlignment} />);
                       })};
                       <div className='educationalAlignment-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                educationalAlignment = (<AlignmentObject  {...this.props.educationalAlignment} />);
            }
        }

        let genre;
        if (this.props.genre) {
            if (this.props.genre instanceof Array) {
                genre = (
                   <div className='genre-container'>
                       <div className='genre-header' data-advice='HTML for the *head* of the section'>genres</div>
                       {this.props.genre.map((item, index) => {
                           return (<div className='genre' data-advice='Put your HTML here. genre is a Text or URL.'><div className="NewsArticle-genre">genre: {this.props.genre}</div></div>);
                       })};
                       <div className='genre-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                genre = (<div className='genre' data-advice='Put your HTML here. genre is a Text or URL.'><div className="NewsArticle-genre">genre: {this.props.genre}</div></div>);
            }
        }

        let publisher;
        if (this.props.publisher) {
            if (this.props.publisher instanceof Array) {
                publisher = (
                   <div className='publisher-container'>
                       <div className='publisher-header' data-advice='HTML for the *head* of the section'>publishers</div>
                       {this.props.publisher.map((item, index) => {
                           return (<div className='publisher' data-advice='Put your HTML here. publisher is a Person or Organization.'><div className="NewsArticle-publisher">publisher: {this.props.publisher}</div></div>);
                       })};
                       <div className='publisher-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                publisher = (<div className='publisher' data-advice='Put your HTML here. publisher is a Person or Organization.'><div className="NewsArticle-publisher">publisher: {this.props.publisher}</div></div>);
            }
        }

        let about;
        if (this.props.about) {
            if (this.props.about instanceof Array) {
                about = (
                   <div className='about-container'>
                       <div className='about-header' data-advice='HTML for the *head* of the section'>abouts</div>
                       {this.props.about.map((item, index) => {
                           return (<Thing key={index} {...this.props.about} />);
                       })};
                       <div className='about-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                about = (<Thing  {...this.props.about} />);
            }
        }

        let license;
        if (this.props.license) {
            if (this.props.license instanceof Array) {
                license = (
                   <div className='license-container'>
                       <div className='license-header' data-advice='HTML for the *head* of the section'>licenses</div>
                       {this.props.license.map((item, index) => {
                           return (<div className='license' data-advice='Put your HTML here. license is a CreativeWork or URL.'><div className="NewsArticle-license">license: {this.props.license}</div></div>);
                       })};
                       <div className='license-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                license = (<div className='license' data-advice='Put your HTML here. license is a CreativeWork or URL.'><div className="NewsArticle-license">license: {this.props.license}</div></div>);
            }
        }

        let workExample;
        if (this.props.workExample) {
            if (this.props.workExample instanceof Array) {
                workExample = (
                   <div className='workExample-container'>
                       <div className='workExample-header' data-advice='HTML for the *head* of the section'>workExamples</div>
                       {this.props.workExample.map((item, index) => {
                           return (<CreativeWork key={index} {...this.props.workExample} />);
                       })};
                       <div className='workExample-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                workExample = (<CreativeWork  {...this.props.workExample} />);
            }
        }

        let wordCount;
        if (this.props.wordCount) {
            if (this.props.wordCount instanceof Array) {
                wordCount = (
                   <div className='wordCount-container'>
                       <div className='wordCount-header' data-advice='HTML for the *head* of the section'>wordCounts</div>
                       {this.props.wordCount.map((item, index) => {
                           return (<div className='wordCount' data-advice='Put your HTML here. wordCount is a Integer.'><p className="NewsArticle-wordCount">wordCount: {this.props.wordCount}</p></div>);
                       })};
                       <div className='wordCount-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                wordCount = (<div className='wordCount' data-advice='Put your HTML here. wordCount is a Integer.'><p className="NewsArticle-wordCount">wordCount: {this.props.wordCount}</p></div>);
            }
        }

        let mentions;
        if (this.props.mentions) {
            if (this.props.mentions instanceof Array) {
                mentions = (
                   <div className='mentions-container'>
                       <div className='mentions-header' data-advice='HTML for the *head* of the section'>mentionss</div>
                       {this.props.mentions.map((item, index) => {
                           return (<Thing key={index} {...this.props.mentions} />);
                       })};
                       <div className='mentions-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mentions = (<Thing  {...this.props.mentions} />);
            }
        }

        let printPage;
        if (this.props.printPage) {
            if (this.props.printPage instanceof Array) {
                printPage = (
                   <div className='printPage-container'>
                       <div className='printPage-header' data-advice='HTML for the *head* of the section'>printPages</div>
                       {this.props.printPage.map((item, index) => {
                           return (<div className='printPage' data-advice='Put your HTML here. printPage is a Text.'><p className="NewsArticle-printPage">printPage: {this.props.printPage}</p></div>);
                       })};
                       <div className='printPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                printPage = (<div className='printPage' data-advice='Put your HTML here. printPage is a Text.'><p className="NewsArticle-printPage">printPage: {this.props.printPage}</p></div>);
            }
        }

        let comment;
        if (this.props.comment) {
            if (this.props.comment instanceof Array) {
                comment = (
                   <div className='comment-container'>
                       <div className='comment-header' data-advice='HTML for the *head* of the section'>comments</div>
                       {this.props.comment.map((item, index) => {
                           return (<Comment key={index} {...this.props.comment} />);
                       })};
                       <div className='comment-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                comment = (<Comment  {...this.props.comment} />);
            }
        }

        let isBasedOnUrl;
        if (this.props.isBasedOnUrl) {
            if (this.props.isBasedOnUrl instanceof Array) {
                isBasedOnUrl = (
                   <div className='isBasedOnUrl-container'>
                       <div className='isBasedOnUrl-header' data-advice='HTML for the *head* of the section'>isBasedOnUrls</div>
                       {this.props.isBasedOnUrl.map((item, index) => {
                           return (<div className='isBasedOnUrl' data-advice='Put your HTML here. isBasedOnUrl is a URL.'><a className="NewsArticle-isBasedOnUrl" href={this.props.isBasedOnUrl} target="_blank">isBasedOnUrl</a></div>);
                       })};
                       <div className='isBasedOnUrl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                isBasedOnUrl = (<div className='isBasedOnUrl' data-advice='Put your HTML here. isBasedOnUrl is a URL.'><a className="NewsArticle-isBasedOnUrl" href={this.props.isBasedOnUrl} target="_blank">isBasedOnUrl</a></div>);
            }
        }

        let copyrightYear;
        if (this.props.copyrightYear) {
            if (this.props.copyrightYear instanceof Array) {
                copyrightYear = (
                   <div className='copyrightYear-container'>
                       <div className='copyrightYear-header' data-advice='HTML for the *head* of the section'>copyrightYears</div>
                       {this.props.copyrightYear.map((item, index) => {
                           return (<div className='copyrightYear' data-advice='Put your HTML here. copyrightYear is a Number.'><p className="NewsArticle-copyrightYear">copyrightYear: {this.props.copyrightYear}</p></div>);
                       })};
                       <div className='copyrightYear-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                copyrightYear = (<div className='copyrightYear' data-advice='Put your HTML here. copyrightYear is a Number.'><p className="NewsArticle-copyrightYear">copyrightYear: {this.props.copyrightYear}</p></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="NewsArticle-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="NewsArticle-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="NewsArticle-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="NewsArticle-image" src={this.props.image} /></div>);
            }
        }

        let associatedMedia;
        if (this.props.associatedMedia) {
            if (this.props.associatedMedia instanceof Array) {
                associatedMedia = (
                   <div className='associatedMedia-container'>
                       <div className='associatedMedia-header' data-advice='HTML for the *head* of the section'>associatedMedias</div>
                       {this.props.associatedMedia.map((item, index) => {
                           return (<MediaObject key={index} {...this.props.associatedMedia} />);
                       })};
                       <div className='associatedMedia-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                associatedMedia = (<MediaObject  {...this.props.associatedMedia} />);
            }
        }

        let contributor;
        if (this.props.contributor) {
            if (this.props.contributor instanceof Array) {
                contributor = (
                   <div className='contributor-container'>
                       <div className='contributor-header' data-advice='HTML for the *head* of the section'>contributors</div>
                       {this.props.contributor.map((item, index) => {
                           return (<div className='contributor' data-advice='Put your HTML here. contributor is a Person or Organization.'><div className="NewsArticle-contributor">contributor: {this.props.contributor}</div></div>);
                       })};
                       <div className='contributor-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contributor = (<div className='contributor' data-advice='Put your HTML here. contributor is a Person or Organization.'><div className="NewsArticle-contributor">contributor: {this.props.contributor}</div></div>);
            }
        }

        let articleSection;
        if (this.props.articleSection) {
            if (this.props.articleSection instanceof Array) {
                articleSection = (
                   <div className='articleSection-container'>
                       <div className='articleSection-header' data-advice='HTML for the *head* of the section'>articleSections</div>
                       {this.props.articleSection.map((item, index) => {
                           return (<div className='articleSection' data-advice='Put your HTML here. articleSection is a Text.'><p className="NewsArticle-articleSection">articleSection: {this.props.articleSection}</p></div>);
                       })};
                       <div className='articleSection-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                articleSection = (<div className='articleSection' data-advice='Put your HTML here. articleSection is a Text.'><p className="NewsArticle-articleSection">articleSection: {this.props.articleSection}</p></div>);
            }
        }

        let thumbnailUrl;
        if (this.props.thumbnailUrl) {
            if (this.props.thumbnailUrl instanceof Array) {
                thumbnailUrl = (
                   <div className='thumbnailUrl-container'>
                       <div className='thumbnailUrl-header' data-advice='HTML for the *head* of the section'>thumbnailUrls</div>
                       {this.props.thumbnailUrl.map((item, index) => {
                           return (<div className='thumbnailUrl' data-advice='Put your HTML here. thumbnailUrl is a URL.'><a className="NewsArticle-thumbnailUrl" href={this.props.thumbnailUrl} target="_blank">thumbnailUrl</a></div>);
                       })};
                       <div className='thumbnailUrl-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                thumbnailUrl = (<div className='thumbnailUrl' data-advice='Put your HTML here. thumbnailUrl is a URL.'><a className="NewsArticle-thumbnailUrl" href={this.props.thumbnailUrl} target="_blank">thumbnailUrl</a></div>);
            }
        }

        let mainEntity;
        if (this.props.mainEntity) {
            if (this.props.mainEntity instanceof Array) {
                mainEntity = (
                   <div className='mainEntity-container'>
                       <div className='mainEntity-header' data-advice='HTML for the *head* of the section'>mainEntitys</div>
                       {this.props.mainEntity.map((item, index) => {
                           return (<Thing key={index} {...this.props.mainEntity} />);
                       })};
                       <div className='mainEntity-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntity = (<Thing  {...this.props.mainEntity} />);
            }
        }

        let schemaVersion;
        if (this.props.schemaVersion) {
            if (this.props.schemaVersion instanceof Array) {
                schemaVersion = (
                   <div className='schemaVersion-container'>
                       <div className='schemaVersion-header' data-advice='HTML for the *head* of the section'>schemaVersions</div>
                       {this.props.schemaVersion.map((item, index) => {
                           return (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text or URL.'><div className="NewsArticle-schemaVersion">schemaVersion: {this.props.schemaVersion}</div></div>);
                       })};
                       <div className='schemaVersion-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                schemaVersion = (<div className='schemaVersion' data-advice='Put your HTML here. schemaVersion is a Text or URL.'><div className="NewsArticle-schemaVersion">schemaVersion: {this.props.schemaVersion}</div></div>);
            }
        }

        let accessibilityFeature;
        if (this.props.accessibilityFeature) {
            if (this.props.accessibilityFeature instanceof Array) {
                accessibilityFeature = (
                   <div className='accessibilityFeature-container'>
                       <div className='accessibilityFeature-header' data-advice='HTML for the *head* of the section'>accessibilityFeatures</div>
                       {this.props.accessibilityFeature.map((item, index) => {
                           return (<div className='accessibilityFeature' data-advice='Put your HTML here. accessibilityFeature is a Text.'><p className="NewsArticle-accessibilityFeature">accessibilityFeature: {this.props.accessibilityFeature}</p></div>);
                       })};
                       <div className='accessibilityFeature-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accessibilityFeature = (<div className='accessibilityFeature' data-advice='Put your HTML here. accessibilityFeature is a Text.'><p className="NewsArticle-accessibilityFeature">accessibilityFeature: {this.props.accessibilityFeature}</p></div>);
            }
        }

        let interactivityType;
        if (this.props.interactivityType) {
            if (this.props.interactivityType instanceof Array) {
                interactivityType = (
                   <div className='interactivityType-container'>
                       <div className='interactivityType-header' data-advice='HTML for the *head* of the section'>interactivityTypes</div>
                       {this.props.interactivityType.map((item, index) => {
                           return (<div className='interactivityType' data-advice='Put your HTML here. interactivityType is a Text.'><p className="NewsArticle-interactivityType">interactivityType: {this.props.interactivityType}</p></div>);
                       })};
                       <div className='interactivityType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                interactivityType = (<div className='interactivityType' data-advice='Put your HTML here. interactivityType is a Text.'><p className="NewsArticle-interactivityType">interactivityType: {this.props.interactivityType}</p></div>);
            }
        }

        let publication;
        if (this.props.publication) {
            if (this.props.publication instanceof Array) {
                publication = (
                   <div className='publication-container'>
                       <div className='publication-header' data-advice='HTML for the *head* of the section'>publications</div>
                       {this.props.publication.map((item, index) => {
                           return (<PublicationEvent key={index} {...this.props.publication} />);
                       })};
                       <div className='publication-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                publication = (<PublicationEvent  {...this.props.publication} />);
            }
        }

        let offers;
        if (this.props.offers) {
            if (this.props.offers instanceof Array) {
                offers = (
                   <div className='offers-container'>
                       <div className='offers-header' data-advice='HTML for the *head* of the section'>offerss</div>
                       {this.props.offers.map((item, index) => {
                           return (<Offer key={index} {...this.props.offers} />);
                       })};
                       <div className='offers-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                offers = (<Offer  {...this.props.offers} />);
            }
        }

        let editor;
        if (this.props.editor) {
            if (this.props.editor instanceof Array) {
                editor = (
                   <div className='editor-container'>
                       <div className='editor-header' data-advice='HTML for the *head* of the section'>editors</div>
                       {this.props.editor.map((item, index) => {
                           return (<Person key={index} {...this.props.editor} />);
                       })};
                       <div className='editor-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                editor = (<Person  {...this.props.editor} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="NewsArticle-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or URL.'><div className="NewsArticle-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let recordedAt;
        if (this.props.recordedAt) {
            if (this.props.recordedAt instanceof Array) {
                recordedAt = (
                   <div className='recordedAt-container'>
                       <div className='recordedAt-header' data-advice='HTML for the *head* of the section'>recordedAts</div>
                       {this.props.recordedAt.map((item, index) => {
                           return (<Event key={index} {...this.props.recordedAt} />);
                       })};
                       <div className='recordedAt-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recordedAt = (<Event  {...this.props.recordedAt} />);
            }
        }

        let hasPart;
        if (this.props.hasPart) {
            if (this.props.hasPart instanceof Array) {
                hasPart = (
                   <div className='hasPart-container'>
                       <div className='hasPart-header' data-advice='HTML for the *head* of the section'>hasParts</div>
                       {this.props.hasPart.map((item, index) => {
                           return (<CreativeWork key={index} {...this.props.hasPart} />);
                       })};
                       <div className='hasPart-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                hasPart = (<CreativeWork  {...this.props.hasPart} />);
            }
        }

        let award;
        if (this.props.award) {
            if (this.props.award instanceof Array) {
                award = (
                   <div className='award-container'>
                       <div className='award-header' data-advice='HTML for the *head* of the section'>awards</div>
                       {this.props.award.map((item, index) => {
                           return (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="NewsArticle-award">award: {this.props.award}</p></div>);
                       })};
                       <div className='award-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                award = (<div className='award' data-advice='Put your HTML here. award is a Text.'><p className="NewsArticle-award">award: {this.props.award}</p></div>);
            }
        }

        let copyrightHolder;
        if (this.props.copyrightHolder) {
            if (this.props.copyrightHolder instanceof Array) {
                copyrightHolder = (
                   <div className='copyrightHolder-container'>
                       <div className='copyrightHolder-header' data-advice='HTML for the *head* of the section'>copyrightHolders</div>
                       {this.props.copyrightHolder.map((item, index) => {
                           return (<div className='copyrightHolder' data-advice='Put your HTML here. copyrightHolder is a Person or Organization.'><div className="NewsArticle-copyrightHolder">copyrightHolder: {this.props.copyrightHolder}</div></div>);
                       })};
                       <div className='copyrightHolder-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                copyrightHolder = (<div className='copyrightHolder' data-advice='Put your HTML here. copyrightHolder is a Person or Organization.'><div className="NewsArticle-copyrightHolder">copyrightHolder: {this.props.copyrightHolder}</div></div>);
            }
        }

        let printColumn;
        if (this.props.printColumn) {
            if (this.props.printColumn instanceof Array) {
                printColumn = (
                   <div className='printColumn-container'>
                       <div className='printColumn-header' data-advice='HTML for the *head* of the section'>printColumns</div>
                       {this.props.printColumn.map((item, index) => {
                           return (<div className='printColumn' data-advice='Put your HTML here. printColumn is a Text.'><p className="NewsArticle-printColumn">printColumn: {this.props.printColumn}</p></div>);
                       })};
                       <div className='printColumn-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                printColumn = (<div className='printColumn' data-advice='Put your HTML here. printColumn is a Text.'><p className="NewsArticle-printColumn">printColumn: {this.props.printColumn}</p></div>);
            }
        }

        let accessibilityAPI;
        if (this.props.accessibilityAPI) {
            if (this.props.accessibilityAPI instanceof Array) {
                accessibilityAPI = (
                   <div className='accessibilityAPI-container'>
                       <div className='accessibilityAPI-header' data-advice='HTML for the *head* of the section'>accessibilityAPIs</div>
                       {this.props.accessibilityAPI.map((item, index) => {
                           return (<div className='accessibilityAPI' data-advice='Put your HTML here. accessibilityAPI is a Text.'><p className="NewsArticle-accessibilityAPI">accessibilityAPI: {this.props.accessibilityAPI}</p></div>);
                       })};
                       <div className='accessibilityAPI-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                accessibilityAPI = (<div className='accessibilityAPI' data-advice='Put your HTML here. accessibilityAPI is a Text.'><p className="NewsArticle-accessibilityAPI">accessibilityAPI: {this.props.accessibilityAPI}</p></div>);
            }
        }

        let pagination;
        if (this.props.pagination) {
            if (this.props.pagination instanceof Array) {
                pagination = (
                   <div className='pagination-container'>
                       <div className='pagination-header' data-advice='HTML for the *head* of the section'>paginations</div>
                       {this.props.pagination.map((item, index) => {
                           return (<div className='pagination' data-advice='Put your HTML here. pagination is a Text.'><p className="NewsArticle-pagination">pagination: {this.props.pagination}</p></div>);
                       })};
                       <div className='pagination-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                pagination = (<div className='pagination' data-advice='Put your HTML here. pagination is a Text.'><p className="NewsArticle-pagination">pagination: {this.props.pagination}</p></div>);
            }
        }

        let learningResourceType;
        if (this.props.learningResourceType) {
            if (this.props.learningResourceType instanceof Array) {
                learningResourceType = (
                   <div className='learningResourceType-container'>
                       <div className='learningResourceType-header' data-advice='HTML for the *head* of the section'>learningResourceTypes</div>
                       {this.props.learningResourceType.map((item, index) => {
                           return (<div className='learningResourceType' data-advice='Put your HTML here. learningResourceType is a Text.'><p className="NewsArticle-learningResourceType">learningResourceType: {this.props.learningResourceType}</p></div>);
                       })};
                       <div className='learningResourceType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                learningResourceType = (<div className='learningResourceType' data-advice='Put your HTML here. learningResourceType is a Text.'><p className="NewsArticle-learningResourceType">learningResourceType: {this.props.learningResourceType}</p></div>);
            }
        }

        let sourceOrganization;
        if (this.props.sourceOrganization) {
            if (this.props.sourceOrganization instanceof Array) {
                sourceOrganization = (
                   <div className='sourceOrganization-container'>
                       <div className='sourceOrganization-header' data-advice='HTML for the *head* of the section'>sourceOrganizations</div>
                       {this.props.sourceOrganization.map((item, index) => {
                           return (<Organization key={index} {...this.props.sourceOrganization} />);
                       })};
                       <div className='sourceOrganization-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sourceOrganization = (<Organization  {...this.props.sourceOrganization} />);
            }
        }

        let inLanguage;
        if (this.props.inLanguage) {
            if (this.props.inLanguage instanceof Array) {
                inLanguage = (
                   <div className='inLanguage-container'>
                       <div className='inLanguage-header' data-advice='HTML for the *head* of the section'>inLanguages</div>
                       {this.props.inLanguage.map((item, index) => {
                           return (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text or Language.'><div className="NewsArticle-inLanguage">inLanguage: {this.props.inLanguage}</div></div>);
                       })};
                       <div className='inLanguage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                inLanguage = (<div className='inLanguage' data-advice='Put your HTML here. inLanguage is a Text or Language.'><div className="NewsArticle-inLanguage">inLanguage: {this.props.inLanguage}</div></div>);
            }
        }

        let citation;
        if (this.props.citation) {
            if (this.props.citation instanceof Array) {
                citation = (
                   <div className='citation-container'>
                       <div className='citation-header' data-advice='HTML for the *head* of the section'>citations</div>
                       {this.props.citation.map((item, index) => {
                           return (<div className='citation' data-advice='Put your HTML here. citation is a CreativeWork or Text.'><div className="NewsArticle-citation">citation: {this.props.citation}</div></div>);
                       })};
                       <div className='citation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                citation = (<div className='citation' data-advice='Put your HTML here. citation is a CreativeWork or Text.'><div className="NewsArticle-citation">citation: {this.props.citation}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="NewsArticle-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="NewsArticle-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let author;
        if (this.props.author) {
            if (this.props.author instanceof Array) {
                author = (
                   <div className='author-container'>
                       <div className='author-header' data-advice='HTML for the *head* of the section'>authors</div>
                       {this.props.author.map((item, index) => {
                           return (<div className='author' data-advice='Put your HTML here. author is a Person or Organization.'><div className="NewsArticle-author">author: {this.props.author}</div></div>);
                       })};
                       <div className='author-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                author = (<div className='author' data-advice='Put your HTML here. author is a Person or Organization.'><div className="NewsArticle-author">author: {this.props.author}</div></div>);
            }
        }

        let pageStart;
        if (this.props.pageStart) {
            if (this.props.pageStart instanceof Array) {
                pageStart = (
                   <div className='pageStart-container'>
                       <div className='pageStart-header' data-advice='HTML for the *head* of the section'>pageStarts</div>
                       {this.props.pageStart.map((item, index) => {
                           return (<div className='pageStart' data-advice='Put your HTML here. pageStart is a Integer or Text.'><div className="NewsArticle-pageStart">pageStart: {this.props.pageStart}</div></div>);
                       })};
                       <div className='pageStart-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                pageStart = (<div className='pageStart' data-advice='Put your HTML here. pageStart is a Integer or Text.'><div className="NewsArticle-pageStart">pageStart: {this.props.pageStart}</div></div>);
            }
        }

        let dateModified;
        if (this.props.dateModified) {
            if (this.props.dateModified instanceof Array) {
                dateModified = (
                   <div className='dateModified-container'>
                       <div className='dateModified-header' data-advice='HTML for the *head* of the section'>dateModifieds</div>
                       {this.props.dateModified.map((item, index) => {
                           return (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date or DateTime.'><div className="NewsArticle-dateModified">dateModified: {this.props.dateModified}</div></div>);
                       })};
                       <div className='dateModified-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                dateModified = (<div className='dateModified' data-advice='Put your HTML here. dateModified is a Date or DateTime.'><div className="NewsArticle-dateModified">dateModified: {this.props.dateModified}</div></div>);
            }
        }

        let interactionStatistic;
        if (this.props.interactionStatistic) {
            if (this.props.interactionStatistic instanceof Array) {
                interactionStatistic = (
                   <div className='interactionStatistic-container'>
                       <div className='interactionStatistic-header' data-advice='HTML for the *head* of the section'>interactionStatistics</div>
                       {this.props.interactionStatistic.map((item, index) => {
                           return (<InteractionCounter key={index} {...this.props.interactionStatistic} />);
                       })};
                       <div className='interactionStatistic-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                interactionStatistic = (<InteractionCounter  {...this.props.interactionStatistic} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="NewsArticle-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="NewsArticle-description">description: {this.props.description}</p></div>);
            }
        }

        let releasedEvent;
        if (this.props.releasedEvent) {
            if (this.props.releasedEvent instanceof Array) {
                releasedEvent = (
                   <div className='releasedEvent-container'>
                       <div className='releasedEvent-header' data-advice='HTML for the *head* of the section'>releasedEvents</div>
                       {this.props.releasedEvent.map((item, index) => {
                           return (<PublicationEvent key={index} {...this.props.releasedEvent} />);
                       })};
                       <div className='releasedEvent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                releasedEvent = (<PublicationEvent  {...this.props.releasedEvent} />);
            }
        }

        let translator;
        if (this.props.translator) {
            if (this.props.translator instanceof Array) {
                translator = (
                   <div className='translator-container'>
                       <div className='translator-header' data-advice='HTML for the *head* of the section'>translators</div>
                       {this.props.translator.map((item, index) => {
                           return (<div className='translator' data-advice='Put your HTML here. translator is a Person or Organization.'><div className="NewsArticle-translator">translator: {this.props.translator}</div></div>);
                       })};
                       <div className='translator-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                translator = (<div className='translator' data-advice='Put your HTML here. translator is a Person or Organization.'><div className="NewsArticle-translator">translator: {this.props.translator}</div></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="NewsArticle-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="NewsArticle-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let contentLocation;
        if (this.props.contentLocation) {
            if (this.props.contentLocation instanceof Array) {
                contentLocation = (
                   <div className='contentLocation-container'>
                       <div className='contentLocation-header' data-advice='HTML for the *head* of the section'>contentLocations</div>
                       {this.props.contentLocation.map((item, index) => {
                           return (<Place key={index} {...this.props.contentLocation} />);
                       })};
                       <div className='contentLocation-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                contentLocation = (<Place  {...this.props.contentLocation} />);
            }
        }

        let timeRequired;
        if (this.props.timeRequired) {
            if (this.props.timeRequired instanceof Array) {
                timeRequired = (
                   <div className='timeRequired-container'>
                       <div className='timeRequired-header' data-advice='HTML for the *head* of the section'>timeRequireds</div>
                       {this.props.timeRequired.map((item, index) => {
                           return (<Duration key={index} {...this.props.timeRequired} />);
                       })};
                       <div className='timeRequired-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                timeRequired = (<Duration  {...this.props.timeRequired} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="NewsArticle-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="NewsArticle-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let position;
        if (this.props.position) {
            if (this.props.position instanceof Array) {
                position = (
                   <div className='position-container'>
                       <div className='position-header' data-advice='HTML for the *head* of the section'>positions</div>
                       {this.props.position.map((item, index) => {
                           return (<div className='position' data-advice='Put your HTML here. position is a Integer or Text.'><div className="NewsArticle-position">position: {this.props.position}</div></div>);
                       })};
                       <div className='position-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                position = (<div className='position' data-advice='Put your HTML here. position is a Integer or Text.'><div className="NewsArticle-position">position: {this.props.position}</div></div>);
            }
        }

        let audio;
        if (this.props.audio) {
            if (this.props.audio instanceof Array) {
                audio = (
                   <div className='audio-container'>
                       <div className='audio-header' data-advice='HTML for the *head* of the section'>audios</div>
                       {this.props.audio.map((item, index) => {
                           return (<AudioObject key={index} {...this.props.audio} />);
                       })};
                       <div className='audio-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                audio = (<AudioObject  {...this.props.audio} />);
            }
        }

        return (
            <div className='NewsArticle'>
                {educationalUse}
                {producer}
                {text}
                {pageEnd}
                {alternativeHeadline}
                {accountablePerson}
                {keywords}
                {headline}
                {dateline}
                {encoding}
                {character}
                {contentRating}
                {exampleOfWork}
                {publishingPrinciples}
                {printEdition}
                {dateCreated}
                {datePublished}
                {potentialAction}
                {name}
                {aggregateRating}
                {printSection}
                {audience}
                {accessibilityControl}
                {articleBody}
                {creator}
                {commentCount}
                {video}
                {typicalAgeRange}
                {fileFormat}
                {discussionUrl}
                {review}
                {isFamilyFriendly}
                {version}
                {locationCreated}
                {provider}
                {isPartOf}
                {accessibilityHazard}
                {educationalAlignment}
                {genre}
                {publisher}
                {about}
                {license}
                {workExample}
                {wordCount}
                {mentions}
                {printPage}
                {comment}
                {isBasedOnUrl}
                {copyrightYear}
                {sameAs}
                {image}
                {associatedMedia}
                {contributor}
                {articleSection}
                {thumbnailUrl}
                {mainEntity}
                {schemaVersion}
                {accessibilityFeature}
                {interactivityType}
                {publication}
                {offers}
                {editor}
                {mainEntityOfPage}
                {recordedAt}
                {hasPart}
                {award}
                {copyrightHolder}
                {printColumn}
                {accessibilityAPI}
                {pagination}
                {learningResourceType}
                {sourceOrganization}
                {inLanguage}
                {citation}
                {additionalType}
                {author}
                {pageStart}
                {dateModified}
                {interactionStatistic}
                {description}
                {releasedEvent}
                {translator}
                {alternateName}
                {contentLocation}
                {timeRequired}
                {url}
                {position}
                {audio}
            </div>
        );
    }
};

NewsArticle.defaultProps = {
};

NewsArticle.propTypes = {
   educationalUse: React.propTypes.string,
   producer: React.propTypes.object,
   text: React.propTypes.string,
   pageEnd: React.propTypes.object,
   alternativeHeadline: React.propTypes.string,
   accountablePerson: React.propTypes.object,
   keywords: React.propTypes.string,
   headline: React.propTypes.string,
   dateline: React.propTypes.string,
   encoding: React.propTypes.object,
   character: React.propTypes.object,
   contentRating: React.propTypes.string,
   exampleOfWork: React.propTypes.object,
   publishingPrinciples: React.propTypes.string,
   printEdition: React.propTypes.string,
   dateCreated: React.propTypes.object,
   datePublished: React.propTypes.string,
   potentialAction: React.propTypes.object,
   name: React.propTypes.string,
   aggregateRating: React.propTypes.object,
   printSection: React.propTypes.string,
   audience: React.propTypes.object,
   accessibilityControl: React.propTypes.string,
   articleBody: React.propTypes.string,
   creator: React.propTypes.object,
   commentCount: React.propTypes.number,
   video: React.propTypes.object,
   typicalAgeRange: React.propTypes.string,
   fileFormat: React.propTypes.string,
   discussionUrl: React.propTypes.string,
   review: React.propTypes.object,
   isFamilyFriendly: React.propTypes.string,
   version: React.propTypes.number,
   locationCreated: React.propTypes.object,
   provider: React.propTypes.object,
   isPartOf: React.propTypes.object,
   accessibilityHazard: React.propTypes.string,
   educationalAlignment: React.propTypes.object,
   genre: React.propTypes.object,
   publisher: React.propTypes.object,
   about: React.propTypes.object,
   license: React.propTypes.object,
   workExample: React.propTypes.object,
   wordCount: React.propTypes.number,
   mentions: React.propTypes.object,
   printPage: React.propTypes.string,
   comment: React.propTypes.object,
   isBasedOnUrl: React.propTypes.string,
   copyrightYear: React.propTypes.number,
   sameAs: React.propTypes.string,
   image: React.propTypes.object,
   associatedMedia: React.propTypes.object,
   contributor: React.propTypes.object,
   articleSection: React.propTypes.string,
   thumbnailUrl: React.propTypes.string,
   mainEntity: React.propTypes.object,
   schemaVersion: React.propTypes.object,
   accessibilityFeature: React.propTypes.string,
   interactivityType: React.propTypes.string,
   publication: React.propTypes.object,
   offers: React.propTypes.object,
   editor: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   recordedAt: React.propTypes.object,
   hasPart: React.propTypes.object,
   award: React.propTypes.string,
   copyrightHolder: React.propTypes.object,
   printColumn: React.propTypes.string,
   accessibilityAPI: React.propTypes.string,
   pagination: React.propTypes.string,
   learningResourceType: React.propTypes.string,
   sourceOrganization: React.propTypes.object,
   inLanguage: React.propTypes.object,
   citation: React.propTypes.object,
   additionalType: React.propTypes.string,
   author: React.propTypes.object,
   pageStart: React.propTypes.object,
   dateModified: React.propTypes.object,
   interactionStatistic: React.propTypes.object,
   description: React.propTypes.string,
   releasedEvent: React.propTypes.object,
   translator: React.propTypes.object,
   alternateName: React.propTypes.string,
   contentLocation: React.propTypes.object,
   timeRequired: React.propTypes.object,
   url: React.propTypes.string,
   position: React.propTypes.object,
   audio: React.propTypes.object,
};

