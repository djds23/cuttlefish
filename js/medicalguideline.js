/* Thing > MedicalEntity > MedicalGuideline - Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './medicalcode', './medicalentity', './imageobject', './medicalevidencelevel', './medicinesystem', './creativework', './action', './organization', './medicalstudy', './medicalguideline', './medicalspecialty'], function(React, MedicalCode, MedicalEntity, ImageObject, MedicalEvidenceLevel, MedicineSystem, CreativeWork, Action, Organization, MedicalStudy, MedicalGuideline, MedicalSpecialty){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var code;
      if( this.props.code ){
        if( this.props.code instanceof Array ){
          code = [(React.createElement("p", null, "code:") )];
          for( i in this.props.code ){
            code.push( ( React.createElement(MedicalCode, {props:  this.props.code}) ) );          }
        } else {
          code = ( React.createElement(MedicalCode, {props:  this.props.code}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var relevantSpecialty;
      if( this.props.relevantSpecialty ){
        if( this.props.relevantSpecialty instanceof Array ){
          relevantSpecialty = [(React.createElement("p", null, "relevantSpecialty:") )];
          for( i in this.props.relevantSpecialty ){
            relevantSpecialty.push( ( React.createElement(MedicalSpecialty, {props:  this.props.relevantSpecialty}) ) );          }
        } else {
          relevantSpecialty = ( React.createElement(MedicalSpecialty, {props:  this.props.relevantSpecialty}) );        }
      }
      var study;
      if( this.props.study ){
        if( this.props.study instanceof Array ){
          study = [(React.createElement("p", null, "study:") )];
          for( i in this.props.study ){
            study.push( ( React.createElement(MedicalStudy, {props:  this.props.study}) ) );          }
        } else {
          study = ( React.createElement(MedicalStudy, {props:  this.props.study}) );        }
      }
      var evidenceOrigin;
      if( this.props.evidenceOrigin ){
        if( this.props.evidenceOrigin instanceof Array ){
          evidenceOrigin = [(React.createElement("p", null, "evidenceOrigin:") )];
          for( i in this.props.evidenceOrigin ){
            evidenceOrigin.push( ( React.createElement("div", {class: "evidenceOrigin"}) ) );
          }
        } else {
          evidenceOrigin = ( React.createElement("div", {class: "evidenceOrigin"}, this.props.evidenceOrigin) );
        }
      }
      var guidelineSubject;
      if( this.props.guidelineSubject ){
        if( this.props.guidelineSubject instanceof Array ){
          guidelineSubject = [(React.createElement("p", null, "guidelineSubject:") )];
          for( i in this.props.guidelineSubject ){
            guidelineSubject.push( ( React.createElement(MedicalEntity, {props:  this.props.guidelineSubject}) ) );          }
        } else {
          guidelineSubject = ( React.createElement(MedicalEntity, {props:  this.props.guidelineSubject}) );        }
      }
      var guideline;
      if( this.props.guideline ){
        if( this.props.guideline instanceof Array ){
          guideline = [(React.createElement("p", null, "guideline:") )];
          for( i in this.props.guideline ){
            guideline.push( ( React.createElement(MedicalGuideline, {props:  this.props.guideline}) ) );          }
        } else {
          guideline = ( React.createElement(MedicalGuideline, {props:  this.props.guideline}) );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var evidenceLevel;
      if( this.props.evidenceLevel ){
        if( this.props.evidenceLevel instanceof Array ){
          evidenceLevel = [(React.createElement("p", null, "evidenceLevel:") )];
          for( i in this.props.evidenceLevel ){
            evidenceLevel.push( ( React.createElement(MedicalEvidenceLevel, {props:  this.props.evidenceLevel}) ) );          }
        } else {
          evidenceLevel = ( React.createElement(MedicalEvidenceLevel, {props:  this.props.evidenceLevel}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var recognizingAuthority;
      if( this.props.recognizingAuthority ){
        if( this.props.recognizingAuthority instanceof Array ){
          recognizingAuthority = [(React.createElement("p", null, "recognizingAuthority:") )];
          for( i in this.props.recognizingAuthority ){
            recognizingAuthority.push( ( React.createElement(Organization, {props:  this.props.recognizingAuthority}) ) );          }
        } else {
          recognizingAuthority = ( React.createElement(Organization, {props:  this.props.recognizingAuthority}) );        }
      }
      var medicineSystem;
      if( this.props.medicineSystem ){
        if( this.props.medicineSystem instanceof Array ){
          medicineSystem = [(React.createElement("p", null, "medicineSystem:") )];
          for( i in this.props.medicineSystem ){
            medicineSystem.push( ( React.createElement(MedicineSystem, {props:  this.props.medicineSystem}) ) );          }
        } else {
          medicineSystem = ( React.createElement(MedicineSystem, {props:  this.props.medicineSystem}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var guidelineDate;
      if( this.props.guidelineDate ){
        if( this.props.guidelineDate instanceof Array ){
          guidelineDate = [(React.createElement("p", null, "guidelineDate:") )];
          for( i in this.props.guidelineDate ){
            guidelineDate.push( ( React.createElement("div", {class: "guidelineDate"}) ) );
          }
        } else {
          guidelineDate = ( React.createElement("div", {class: "guidelineDate"}, this.props.guidelineDate) );
        }
      }
      return (React.createElement("div", {title: "MedicalGuideline", className: "MedicalGuideline entity"}, 
         code, 
         description, 
         name, 
         relevantSpecialty, 
         study, 
         evidenceOrigin, 
         guidelineSubject, 
         guideline, 
         url, 
         sameAs, 
         evidenceLevel, 
         potentialAction, 
         recognizingAuthority, 
         medicineSystem, 
         mainEntityOfPage, 
         additionalType, 
         alternateName, 
         image, 
         guidelineDate 
     ));
    }
  });
});
