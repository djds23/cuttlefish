/* Action - An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.

See also blog post and Actions overview document.. Generated automatically by the reactGenerator. */
import ActionStatusType from './actionstatustype.js';
import Thing from './thing.js';
import ImageObject from './imageobject.js';
import Person from './person.js';
import Place from './place.js';
import Organization from './organization.js';
import PostalAddress from './postaladdress.js';
import CreativeWork from './creativework.js';
import EntryPoint from './entrypoint.js';


import React, {
  Component
} from 'react';

export default class Action extends Component {
    render() {
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

        let participant;
        if (this.props.participant) {
            if (this.props.participant instanceof Array) {
                participant = (
                   <div className='participant-container'>
                       <div className='participant-header' data-advice='HTML for the *head* of the section'>participants</div>
                       {this.props.participant.map((item, index) => {
                           return (<div className='participant' data-advice='Put your HTML here. participant is a Person or Organization.'><div className="Action-participant">participant: {this.props.participant}</div></div>);
                       })};
                       <div className='participant-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                participant = (<div className='participant' data-advice='Put your HTML here. participant is a Person or Organization.'><div className="Action-participant">participant: {this.props.participant}</div></div>);
            }
        }

        let target;
        if (this.props.target) {
            if (this.props.target instanceof Array) {
                target = (
                   <div className='target-container'>
                       <div className='target-header' data-advice='HTML for the *head* of the section'>targets</div>
                       {this.props.target.map((item, index) => {
                           return (<EntryPoint key={index} {...this.props.target} />);
                       })};
                       <div className='target-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                target = (<EntryPoint  {...this.props.target} />);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Action-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="Action-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Action-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="Action-description">description: {this.props.description}</p></div>);
            }
        }

        let object;
        if (this.props.object) {
            if (this.props.object instanceof Array) {
                object = (
                   <div className='object-container'>
                       <div className='object-header' data-advice='HTML for the *head* of the section'>objects</div>
                       {this.props.object.map((item, index) => {
                           return (<Thing key={index} {...this.props.object} />);
                       })};
                       <div className='object-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                object = (<Thing  {...this.props.object} />);
            }
        }

        let agent;
        if (this.props.agent) {
            if (this.props.agent instanceof Array) {
                agent = (
                   <div className='agent-container'>
                       <div className='agent-header' data-advice='HTML for the *head* of the section'>agents</div>
                       {this.props.agent.map((item, index) => {
                           return (<div className='agent' data-advice='Put your HTML here. agent is a Person or Organization.'><div className="Action-agent">agent: {this.props.agent}</div></div>);
                       })};
                       <div className='agent-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                agent = (<div className='agent' data-advice='Put your HTML here. agent is a Person or Organization.'><div className="Action-agent">agent: {this.props.agent}</div></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Action-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="Action-name">name: {this.props.name}</p></div>);
            }
        }

        let actionStatus;
        if (this.props.actionStatus) {
            if (this.props.actionStatus instanceof Array) {
                actionStatus = (
                   <div className='actionStatus-container'>
                       <div className='actionStatus-header' data-advice='HTML for the *head* of the section'>actionStatuss</div>
                       {this.props.actionStatus.map((item, index) => {
                           return (<ActionStatusType key={index} {...this.props.actionStatus} />);
                       })};
                       <div className='actionStatus-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                actionStatus = (<ActionStatusType  {...this.props.actionStatus} />);
            }
        }

        let instrument;
        if (this.props.instrument) {
            if (this.props.instrument instanceof Array) {
                instrument = (
                   <div className='instrument-container'>
                       <div className='instrument-header' data-advice='HTML for the *head* of the section'>instruments</div>
                       {this.props.instrument.map((item, index) => {
                           return (<Thing key={index} {...this.props.instrument} />);
                       })};
                       <div className='instrument-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                instrument = (<Thing  {...this.props.instrument} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Action-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="Action-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let location;
        if (this.props.location) {
            if (this.props.location instanceof Array) {
                location = (
                   <div className='location-container'>
                       <div className='location-header' data-advice='HTML for the *head* of the section'>locations</div>
                       {this.props.location.map((item, index) => {
                           return (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="Action-location">location: {this.props.location}</div></div>);
                       })};
                       <div className='location-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                location = (<div className='location' data-advice='Put your HTML here. location is a Place or Text or PostalAddress.'><div className="Action-location">location: {this.props.location}</div></div>);
            }
        }

        let startTime;
        if (this.props.startTime) {
            if (this.props.startTime instanceof Array) {
                startTime = (
                   <div className='startTime-container'>
                       <div className='startTime-header' data-advice='HTML for the *head* of the section'>startTimes</div>
                       {this.props.startTime.map((item, index) => {
                           return (<div className='startTime' data-advice='Put your HTML here. startTime is a DateTime.'><time className="Action-startTime">startTime: {this.props.startTime}</time></div>);
                       })};
                       <div className='startTime-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                startTime = (<div className='startTime' data-advice='Put your HTML here. startTime is a DateTime.'><time className="Action-startTime">startTime: {this.props.startTime}</time></div>);
            }
        }

        let error;
        if (this.props.error) {
            if (this.props.error instanceof Array) {
                error = (
                   <div className='error-container'>
                       <div className='error-header' data-advice='HTML for the *head* of the section'>errors</div>
                       {this.props.error.map((item, index) => {
                           return (<Thing key={index} {...this.props.error} />);
                       })};
                       <div className='error-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                error = (<Thing  {...this.props.error} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Action-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="Action-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Action-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="Action-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Action-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="Action-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let endTime;
        if (this.props.endTime) {
            if (this.props.endTime instanceof Array) {
                endTime = (
                   <div className='endTime-container'>
                       <div className='endTime-header' data-advice='HTML for the *head* of the section'>endTimes</div>
                       {this.props.endTime.map((item, index) => {
                           return (<div className='endTime' data-advice='Put your HTML here. endTime is a DateTime.'><time className="Action-endTime">endTime: {this.props.endTime}</time></div>);
                       })};
                       <div className='endTime-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                endTime = (<div className='endTime' data-advice='Put your HTML here. endTime is a DateTime.'><time className="Action-endTime">endTime: {this.props.endTime}</time></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Action-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="Action-image" src={this.props.image} /></div>);
            }
        }

        let result;
        if (this.props.result) {
            if (this.props.result instanceof Array) {
                result = (
                   <div className='result-container'>
                       <div className='result-header' data-advice='HTML for the *head* of the section'>results</div>
                       {this.props.result.map((item, index) => {
                           return (<Thing key={index} {...this.props.result} />);
                       })};
                       <div className='result-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                result = (<Thing  {...this.props.result} />);
            }
        }

        return (
            <div className='Action'>
                {potentialAction}
                {participant}
                {target}
                {sameAs}
                {description}
                {object}
                {agent}
                {name}
                {actionStatus}
                {instrument}
                {url}
                {location}
                {startTime}
                {error}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {endTime}
                {image}
                {result}
            </div>
        );
    }
};

Action.defaultProps = {
};

Action.propTypes = {
   potentialAction: React.propTypes.object,
   participant: React.propTypes.object,
   target: React.propTypes.object,
   sameAs: React.propTypes.string,
   description: React.propTypes.string,
   object: React.propTypes.object,
   agent: React.propTypes.object,
   name: React.propTypes.string,
   actionStatus: React.propTypes.object,
   instrument: React.propTypes.object,
   url: React.propTypes.string,
   location: React.propTypes.object,
   startTime: React.propTypes.string,
   error: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   endTime: React.propTypes.string,
   image: React.propTypes.object,
   result: React.propTypes.object,
};
