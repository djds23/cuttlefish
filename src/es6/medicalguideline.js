/* MedicalGuideline - Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.. Generated automatically by the reactGenerator. */
import MedicalCode from './medicalcode.js';
import MedicalEntity from './medicalentity.js';
import ImageObject from './imageobject.js';
import MedicalEvidenceLevel from './medicalevidencelevel.js';
import MedicineSystem from './medicinesystem.js';
import CreativeWork from './creativework.js';
import Action from './action.js';
import Organization from './organization.js';
import MedicalStudy from './medicalstudy.js';
import MedicalSpecialty from './medicalspecialty.js';


import React, {
  Component
} from 'react';

export default class MedicalGuideline extends Component {
    render() {
        let code;
        if (this.props.code) {
            if (this.props.code instanceof Array) {
                code = (
                   <div className='code-container'>
                       <div className='code-header' data-advice='HTML for the *head* of the section'>codes</div>
                       {this.props.code.map((item, index) => {
                           return (<MedicalCode key={index} {...this.props.code} />);
                       })};
                       <div className='code-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                code = (<MedicalCode  {...this.props.code} />);
            }
        }

        let description;
        if (this.props.description) {
            if (this.props.description instanceof Array) {
                description = (
                   <div className='description-container'>
                       <div className='description-header' data-advice='HTML for the *head* of the section'>descriptions</div>
                       {this.props.description.map((item, index) => {
                           return (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalGuideline-description">description: {this.props.description}</p></div>);
                       })};
                       <div className='description-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                description = (<div className='description' data-advice='Put your HTML here. description is a Text.'><p className="MedicalGuideline-description">description: {this.props.description}</p></div>);
            }
        }

        let name;
        if (this.props.name) {
            if (this.props.name instanceof Array) {
                name = (
                   <div className='name-container'>
                       <div className='name-header' data-advice='HTML for the *head* of the section'>names</div>
                       {this.props.name.map((item, index) => {
                           return (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalGuideline-name">name: {this.props.name}</p></div>);
                       })};
                       <div className='name-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                name = (<div className='name' data-advice='Put your HTML here. name is a Text.'><p className="MedicalGuideline-name">name: {this.props.name}</p></div>);
            }
        }

        let relevantSpecialty;
        if (this.props.relevantSpecialty) {
            if (this.props.relevantSpecialty instanceof Array) {
                relevantSpecialty = (
                   <div className='relevantSpecialty-container'>
                       <div className='relevantSpecialty-header' data-advice='HTML for the *head* of the section'>relevantSpecialtys</div>
                       {this.props.relevantSpecialty.map((item, index) => {
                           return (<MedicalSpecialty key={index} {...this.props.relevantSpecialty} />);
                       })};
                       <div className='relevantSpecialty-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                relevantSpecialty = (<MedicalSpecialty  {...this.props.relevantSpecialty} />);
            }
        }

        let study;
        if (this.props.study) {
            if (this.props.study instanceof Array) {
                study = (
                   <div className='study-container'>
                       <div className='study-header' data-advice='HTML for the *head* of the section'>studys</div>
                       {this.props.study.map((item, index) => {
                           return (<MedicalStudy key={index} {...this.props.study} />);
                       })};
                       <div className='study-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                study = (<MedicalStudy  {...this.props.study} />);
            }
        }

        let evidenceOrigin;
        if (this.props.evidenceOrigin) {
            if (this.props.evidenceOrigin instanceof Array) {
                evidenceOrigin = (
                   <div className='evidenceOrigin-container'>
                       <div className='evidenceOrigin-header' data-advice='HTML for the *head* of the section'>evidenceOrigins</div>
                       {this.props.evidenceOrigin.map((item, index) => {
                           return (<div className='evidenceOrigin' data-advice='Put your HTML here. evidenceOrigin is a Text.'><p className="MedicalGuideline-evidenceOrigin">evidenceOrigin: {this.props.evidenceOrigin}</p></div>);
                       })};
                       <div className='evidenceOrigin-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                evidenceOrigin = (<div className='evidenceOrigin' data-advice='Put your HTML here. evidenceOrigin is a Text.'><p className="MedicalGuideline-evidenceOrigin">evidenceOrigin: {this.props.evidenceOrigin}</p></div>);
            }
        }

        let guidelineSubject;
        if (this.props.guidelineSubject) {
            if (this.props.guidelineSubject instanceof Array) {
                guidelineSubject = (
                   <div className='guidelineSubject-container'>
                       <div className='guidelineSubject-header' data-advice='HTML for the *head* of the section'>guidelineSubjects</div>
                       {this.props.guidelineSubject.map((item, index) => {
                           return (<MedicalEntity key={index} {...this.props.guidelineSubject} />);
                       })};
                       <div className='guidelineSubject-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                guidelineSubject = (<MedicalEntity  {...this.props.guidelineSubject} />);
            }
        }

        let guideline;
        if (this.props.guideline) {
            if (this.props.guideline instanceof Array) {
                guideline = (
                   <div className='guideline-container'>
                       <div className='guideline-header' data-advice='HTML for the *head* of the section'>guidelines</div>
                       {this.props.guideline.map((item, index) => {
                           return (<MedicalGuideline key={index} {...this.props.guideline} />);
                       })};
                       <div className='guideline-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                guideline = (<MedicalGuideline  {...this.props.guideline} />);
            }
        }

        let url;
        if (this.props.url) {
            if (this.props.url instanceof Array) {
                url = (
                   <div className='url-container'>
                       <div className='url-header' data-advice='HTML for the *head* of the section'>urls</div>
                       {this.props.url.map((item, index) => {
                           return (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalGuideline-url" href={this.props.url} target="_blank">url</a></div>);
                       })};
                       <div className='url-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                url = (<div className='url' data-advice='Put your HTML here. url is a URL.'><a className="MedicalGuideline-url" href={this.props.url} target="_blank">url</a></div>);
            }
        }

        let sameAs;
        if (this.props.sameAs) {
            if (this.props.sameAs instanceof Array) {
                sameAs = (
                   <div className='sameAs-container'>
                       <div className='sameAs-header' data-advice='HTML for the *head* of the section'>sameAss</div>
                       {this.props.sameAs.map((item, index) => {
                           return (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalGuideline-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
                       })};
                       <div className='sameAs-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                sameAs = (<div className='sameAs' data-advice='Put your HTML here. sameAs is a URL.'><a className="MedicalGuideline-sameAs" href={this.props.sameAs} target="_blank">sameAs</a></div>);
            }
        }

        let evidenceLevel;
        if (this.props.evidenceLevel) {
            if (this.props.evidenceLevel instanceof Array) {
                evidenceLevel = (
                   <div className='evidenceLevel-container'>
                       <div className='evidenceLevel-header' data-advice='HTML for the *head* of the section'>evidenceLevels</div>
                       {this.props.evidenceLevel.map((item, index) => {
                           return (<MedicalEvidenceLevel key={index} {...this.props.evidenceLevel} />);
                       })};
                       <div className='evidenceLevel-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                evidenceLevel = (<MedicalEvidenceLevel  {...this.props.evidenceLevel} />);
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

        let recognizingAuthority;
        if (this.props.recognizingAuthority) {
            if (this.props.recognizingAuthority instanceof Array) {
                recognizingAuthority = (
                   <div className='recognizingAuthority-container'>
                       <div className='recognizingAuthority-header' data-advice='HTML for the *head* of the section'>recognizingAuthoritys</div>
                       {this.props.recognizingAuthority.map((item, index) => {
                           return (<Organization key={index} {...this.props.recognizingAuthority} />);
                       })};
                       <div className='recognizingAuthority-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                recognizingAuthority = (<Organization  {...this.props.recognizingAuthority} />);
            }
        }

        let medicineSystem;
        if (this.props.medicineSystem) {
            if (this.props.medicineSystem instanceof Array) {
                medicineSystem = (
                   <div className='medicineSystem-container'>
                       <div className='medicineSystem-header' data-advice='HTML for the *head* of the section'>medicineSystems</div>
                       {this.props.medicineSystem.map((item, index) => {
                           return (<MedicineSystem key={index} {...this.props.medicineSystem} />);
                       })};
                       <div className='medicineSystem-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                medicineSystem = (<MedicineSystem  {...this.props.medicineSystem} />);
            }
        }

        let mainEntityOfPage;
        if (this.props.mainEntityOfPage) {
            if (this.props.mainEntityOfPage instanceof Array) {
                mainEntityOfPage = (
                   <div className='mainEntityOfPage-container'>
                       <div className='mainEntityOfPage-header' data-advice='HTML for the *head* of the section'>mainEntityOfPages</div>
                       {this.props.mainEntityOfPage.map((item, index) => {
                           return (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="MedicalGuideline-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
                       })};
                       <div className='mainEntityOfPage-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                mainEntityOfPage = (<div className='mainEntityOfPage' data-advice='Put your HTML here. mainEntityOfPage is a URL or CreativeWork.'><div className="MedicalGuideline-mainEntityOfPage">mainEntityOfPage: {this.props.mainEntityOfPage}</div></div>);
            }
        }

        let additionalType;
        if (this.props.additionalType) {
            if (this.props.additionalType instanceof Array) {
                additionalType = (
                   <div className='additionalType-container'>
                       <div className='additionalType-header' data-advice='HTML for the *head* of the section'>additionalTypes</div>
                       {this.props.additionalType.map((item, index) => {
                           return (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalGuideline-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
                       })};
                       <div className='additionalType-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                additionalType = (<div className='additionalType' data-advice='Put your HTML here. additionalType is a URL.'><a className="MedicalGuideline-additionalType" href={this.props.additionalType} target="_blank">additionalType</a></div>);
            }
        }

        let alternateName;
        if (this.props.alternateName) {
            if (this.props.alternateName instanceof Array) {
                alternateName = (
                   <div className='alternateName-container'>
                       <div className='alternateName-header' data-advice='HTML for the *head* of the section'>alternateNames</div>
                       {this.props.alternateName.map((item, index) => {
                           return (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalGuideline-alternateName">alternateName: {this.props.alternateName}</p></div>);
                       })};
                       <div className='alternateName-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                alternateName = (<div className='alternateName' data-advice='Put your HTML here. alternateName is a Text.'><p className="MedicalGuideline-alternateName">alternateName: {this.props.alternateName}</p></div>);
            }
        }

        let image;
        if (this.props.image) {
            if (this.props.image instanceof Array) {
                image = (
                   <div className='image-container'>
                       <div className='image-header' data-advice='HTML for the *head* of the section'>images</div>
                       {this.props.image.map((item, index) => {
                           return (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="MedicalGuideline-image" src={this.props.image} /></div>);
                       })};
                       <div className='image-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                image = (<div className='image' data-advice='Put your HTML here. image is a ImageObject or URL.'><img className="MedicalGuideline-image" src={this.props.image} /></div>);
            }
        }

        let guidelineDate;
        if (this.props.guidelineDate) {
            if (this.props.guidelineDate instanceof Array) {
                guidelineDate = (
                   <div className='guidelineDate-container'>
                       <div className='guidelineDate-header' data-advice='HTML for the *head* of the section'>guidelineDates</div>
                       {this.props.guidelineDate.map((item, index) => {
                           return (<div className='guidelineDate' data-advice='Put your HTML here. guidelineDate is a Date.'><time className="MedicalGuideline-guidelineDate">guidelineDate: {this.props.guidelineDate}</time></div>);
                       })};
                       <div className='guidelineDate-footer' data-advice='HTML for the *footer* of the section'></div>;
                   </div>
                );
            } else {
                guidelineDate = (<div className='guidelineDate' data-advice='Put your HTML here. guidelineDate is a Date.'><time className="MedicalGuideline-guidelineDate">guidelineDate: {this.props.guidelineDate}</time></div>);
            }
        }

        return (
            <div className='MedicalGuideline'>
                {code}
                {description}
                {name}
                {relevantSpecialty}
                {study}
                {evidenceOrigin}
                {guidelineSubject}
                {guideline}
                {url}
                {sameAs}
                {evidenceLevel}
                {potentialAction}
                {recognizingAuthority}
                {medicineSystem}
                {mainEntityOfPage}
                {additionalType}
                {alternateName}
                {image}
                {guidelineDate}
            </div>
        );
    }
};

MedicalGuideline.defaultProps = {
};

MedicalGuideline.propTypes = {
   code: React.propTypes.object,
   description: React.propTypes.string,
   name: React.propTypes.string,
   relevantSpecialty: React.propTypes.object,
   study: React.propTypes.object,
   evidenceOrigin: React.propTypes.string,
   guidelineSubject: React.propTypes.object,
   guideline: React.propTypes.object,
   url: React.propTypes.string,
   sameAs: React.propTypes.string,
   evidenceLevel: React.propTypes.object,
   potentialAction: React.propTypes.object,
   recognizingAuthority: React.propTypes.object,
   medicineSystem: React.propTypes.object,
   mainEntityOfPage: React.propTypes.object,
   additionalType: React.propTypes.string,
   alternateName: React.propTypes.string,
   image: React.propTypes.object,
   guidelineDate: React.propTypes.string,
};
