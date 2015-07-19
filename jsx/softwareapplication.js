/* Thing > CreativeWork > SoftwareApplication - A software application.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './alignmentobject', './videoobject', './mediaobject', './offer', './imageobject', './aggregaterating', './softwareapplication', './integer', './creativework', './review', './audioobject', './language', './person', './publicationevent', './place', './action', './organization', './comment', './thing', './audience', './boolean', './duration', './event'], function(React, AlignmentObject, VideoObject, MediaObject, Offer, ImageObject, AggregateRating, SoftwareApplication, Integer, CreativeWork, Review, AudioObject, Language, Person, PublicationEvent, Place, Action, Organization, Comment, Thing, Audience, Boolean, Duration, Event){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var educationalUse;
      if( this.props.educationalUse ){
        if( this.props.educationalUse instanceof Array ){
          educationalUse = [(<p>educationalUse:</p> )];
          for( i in this.props.educationalUse ){
            educationalUse.push( ( <div class='educationalUse'></div> ) );
          }
        } else {
          educationalUse = ( <div class='educationalUse'>{this.props.educationalUse}</div> );
        }
      }
      var producer;
      if( this.props.producer ){
        if( this.props.producer instanceof Array ){
          producer = [(<p>producer:</p> )];
          for( i in this.props.producer ){
            producer.push( ( <div class='producer'></div> ) );
          }
        } else {
          producer = ( <div class='producer'>{this.props.producer}</div> );
        }
      }
      var text;
      if( this.props.text ){
        if( this.props.text instanceof Array ){
          text = [(<p>text:</p> )];
          for( i in this.props.text ){
            text.push( ( <div class='text'></div> ) );
          }
        } else {
          text = ( <div class='text'>{this.props.text}</div> );
        }
      }
      var datePublished;
      if( this.props.datePublished ){
        if( this.props.datePublished instanceof Array ){
          datePublished = [(<p>datePublished:</p> )];
          for( i in this.props.datePublished ){
            datePublished.push( ( <div class='datePublished'></div> ) );
          }
        } else {
          datePublished = ( <div class='datePublished'>{this.props.datePublished}</div> );
        }
      }
      var processorRequirements;
      if( this.props.processorRequirements ){
        if( this.props.processorRequirements instanceof Array ){
          processorRequirements = [(<p>processorRequirements:</p> )];
          for( i in this.props.processorRequirements ){
            processorRequirements.push( ( <div class='processorRequirements'></div> ) );
          }
        } else {
          processorRequirements = ( <div class='processorRequirements'>{this.props.processorRequirements}</div> );
        }
      }
      var alternativeHeadline;
      if( this.props.alternativeHeadline ){
        if( this.props.alternativeHeadline instanceof Array ){
          alternativeHeadline = [(<p>alternativeHeadline:</p> )];
          for( i in this.props.alternativeHeadline ){
            alternativeHeadline.push( ( <div class='alternativeHeadline'></div> ) );
          }
        } else {
          alternativeHeadline = ( <div class='alternativeHeadline'>{this.props.alternativeHeadline}</div> );
        }
      }
      var accountablePerson;
      if( this.props.accountablePerson ){
        if( this.props.accountablePerson instanceof Array ){
          accountablePerson = [(<p>accountablePerson:</p> )];
          for( i in this.props.accountablePerson ){
            accountablePerson.push( ( <Person props={ this.props.accountablePerson } /> ) );          }
        } else {
          accountablePerson = ( <Person props={ this.props.accountablePerson } /> );        }
      }
      var keywords;
      if( this.props.keywords ){
        if( this.props.keywords instanceof Array ){
          keywords = [(<p>keywords:</p> )];
          for( i in this.props.keywords ){
            keywords.push( ( <div class='keywords'></div> ) );
          }
        } else {
          keywords = ( <div class='keywords'>{this.props.keywords}</div> );
        }
      }
      var countriesNotSupported;
      if( this.props.countriesNotSupported ){
        if( this.props.countriesNotSupported instanceof Array ){
          countriesNotSupported = [(<p>countriesNotSupported:</p> )];
          for( i in this.props.countriesNotSupported ){
            countriesNotSupported.push( ( <div class='countriesNotSupported'></div> ) );
          }
        } else {
          countriesNotSupported = ( <div class='countriesNotSupported'>{this.props.countriesNotSupported}</div> );
        }
      }
      var headline;
      if( this.props.headline ){
        if( this.props.headline instanceof Array ){
          headline = [(<p>headline:</p> )];
          for( i in this.props.headline ){
            headline.push( ( <div class='headline'></div> ) );
          }
        } else {
          headline = ( <div class='headline'>{this.props.headline}</div> );
        }
      }
      var character;
      if( this.props.character ){
        if( this.props.character instanceof Array ){
          character = [(<p>character:</p> )];
          for( i in this.props.character ){
            character.push( ( <Person props={ this.props.character } /> ) );          }
        } else {
          character = ( <Person props={ this.props.character } /> );        }
      }
      var contentRating;
      if( this.props.contentRating ){
        if( this.props.contentRating instanceof Array ){
          contentRating = [(<p>contentRating:</p> )];
          for( i in this.props.contentRating ){
            contentRating.push( ( <div class='contentRating'></div> ) );
          }
        } else {
          contentRating = ( <div class='contentRating'>{this.props.contentRating}</div> );
        }
      }
      var applicationCategory;
      if( this.props.applicationCategory ){
        if( this.props.applicationCategory instanceof Array ){
          applicationCategory = [(<p>applicationCategory:</p> )];
          for( i in this.props.applicationCategory ){
            applicationCategory.push( ( <div class='applicationCategory'></div> ) );
          }
        } else {
          applicationCategory = ( <div class='applicationCategory'>{this.props.applicationCategory}</div> );
        }
      }
      var exampleOfWork;
      if( this.props.exampleOfWork ){
        if( this.props.exampleOfWork instanceof Array ){
          exampleOfWork = [(<p>exampleOfWork:</p> )];
          for( i in this.props.exampleOfWork ){
            exampleOfWork.push( ( <CreativeWork props={ this.props.exampleOfWork } /> ) );          }
        } else {
          exampleOfWork = ( <CreativeWork props={ this.props.exampleOfWork } /> );        }
      }
      var publishingPrinciples;
      if( this.props.publishingPrinciples ){
        if( this.props.publishingPrinciples instanceof Array ){
          publishingPrinciples = [(<p>publishingPrinciples:</p> )];
          for( i in this.props.publishingPrinciples ){
            publishingPrinciples.push( ( <div class='publishingPrinciples'></div> ) );
          }
        } else {
          publishingPrinciples = ( <div class='publishingPrinciples'>{this.props.publishingPrinciples}</div> );
        }
      }
      var releaseNotes;
      if( this.props.releaseNotes ){
        if( this.props.releaseNotes instanceof Array ){
          releaseNotes = [(<p>releaseNotes:</p> )];
          for( i in this.props.releaseNotes ){
            releaseNotes.push( ( <div class='releaseNotes'></div> ) );
          }
        } else {
          releaseNotes = ( <div class='releaseNotes'>{this.props.releaseNotes}</div> );
        }
      }
      var dateCreated;
      if( this.props.dateCreated ){
        if( this.props.dateCreated instanceof Array ){
          dateCreated = [(<p>dateCreated:</p> )];
          for( i in this.props.dateCreated ){
            dateCreated.push( ( <div class='dateCreated'></div> ) );
          }
        } else {
          dateCreated = ( <div class='dateCreated'>{this.props.dateCreated}</div> );
        }
      }
      var memoryRequirements;
      if( this.props.memoryRequirements ){
        if( this.props.memoryRequirements instanceof Array ){
          memoryRequirements = [(<p>memoryRequirements:</p> )];
          for( i in this.props.memoryRequirements ){
            memoryRequirements.push( ( <div class='memoryRequirements'></div> ) );
          }
        } else {
          memoryRequirements = ( <div class='memoryRequirements'>{this.props.memoryRequirements}</div> );
        }
      }
      var permissions;
      if( this.props.permissions ){
        if( this.props.permissions instanceof Array ){
          permissions = [(<p>permissions:</p> )];
          for( i in this.props.permissions ){
            permissions.push( ( <div class='permissions'></div> ) );
          }
        } else {
          permissions = ( <div class='permissions'>{this.props.permissions}</div> );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(<p>potentialAction:</p> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(<p>name:</p> )];
          for( i in this.props.name ){
            name.push( ( <div class='name'></div> ) );
          }
        } else {
          name = ( <div class='name'>{this.props.name}</div> );
        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [(<p>aggregateRating:</p> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var audience;
      if( this.props.audience ){
        if( this.props.audience instanceof Array ){
          audience = [(<p>audience:</p> )];
          for( i in this.props.audience ){
            audience.push( ( <Audience props={ this.props.audience } /> ) );          }
        } else {
          audience = ( <Audience props={ this.props.audience } /> );        }
      }
      var accessibilityControl;
      if( this.props.accessibilityControl ){
        if( this.props.accessibilityControl instanceof Array ){
          accessibilityControl = [(<p>accessibilityControl:</p> )];
          for( i in this.props.accessibilityControl ){
            accessibilityControl.push( ( <div class='accessibilityControl'></div> ) );
          }
        } else {
          accessibilityControl = ( <div class='accessibilityControl'>{this.props.accessibilityControl}</div> );
        }
      }
      var copyrightYear;
      if( this.props.copyrightYear ){
        if( this.props.copyrightYear instanceof Array ){
          copyrightYear = [(<p>copyrightYear:</p> )];
          for( i in this.props.copyrightYear ){
            copyrightYear.push( ( <div class='copyrightYear'></div> ) );
          }
        } else {
          copyrightYear = ( <div class='copyrightYear'>{this.props.copyrightYear}</div> );
        }
      }
      var installUrl;
      if( this.props.installUrl ){
        if( this.props.installUrl instanceof Array ){
          installUrl = [(<p>installUrl:</p> )];
          for( i in this.props.installUrl ){
            installUrl.push( ( <div class='installUrl'></div> ) );
          }
        } else {
          installUrl = ( <div class='installUrl'>{this.props.installUrl}</div> );
        }
      }
      var creator;
      if( this.props.creator ){
        if( this.props.creator instanceof Array ){
          creator = [(<p>creator:</p> )];
          for( i in this.props.creator ){
            creator.push( ( <div class='creator'></div> ) );
          }
        } else {
          creator = ( <div class='creator'>{this.props.creator}</div> );
        }
      }
      var commentCount;
      if( this.props.commentCount ){
        if( this.props.commentCount instanceof Array ){
          commentCount = [(<p>commentCount:</p> )];
          for( i in this.props.commentCount ){
            commentCount.push( ( <Integer props={ this.props.commentCount } /> ) );          }
        } else {
          commentCount = ( <Integer props={ this.props.commentCount } /> );        }
      }
      var video;
      if( this.props.video ){
        if( this.props.video instanceof Array ){
          video = [(<p>video:</p> )];
          for( i in this.props.video ){
            video.push( ( <VideoObject props={ this.props.video } /> ) );          }
        } else {
          video = ( <VideoObject props={ this.props.video } /> );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [(<p>typicalAgeRange:</p> )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( <div class='typicalAgeRange'></div> ) );
          }
        } else {
          typicalAgeRange = ( <div class='typicalAgeRange'>{this.props.typicalAgeRange}</div> );
        }
      }
      var fileFormat;
      if( this.props.fileFormat ){
        if( this.props.fileFormat instanceof Array ){
          fileFormat = [(<p>fileFormat:</p> )];
          for( i in this.props.fileFormat ){
            fileFormat.push( ( <div class='fileFormat'></div> ) );
          }
        } else {
          fileFormat = ( <div class='fileFormat'>{this.props.fileFormat}</div> );
        }
      }
      var applicationSuite;
      if( this.props.applicationSuite ){
        if( this.props.applicationSuite instanceof Array ){
          applicationSuite = [(<p>applicationSuite:</p> )];
          for( i in this.props.applicationSuite ){
            applicationSuite.push( ( <div class='applicationSuite'></div> ) );
          }
        } else {
          applicationSuite = ( <div class='applicationSuite'>{this.props.applicationSuite}</div> );
        }
      }
      var discussionUrl;
      if( this.props.discussionUrl ){
        if( this.props.discussionUrl instanceof Array ){
          discussionUrl = [(<p>discussionUrl:</p> )];
          for( i in this.props.discussionUrl ){
            discussionUrl.push( ( <div class='discussionUrl'></div> ) );
          }
        } else {
          discussionUrl = ( <div class='discussionUrl'>{this.props.discussionUrl}</div> );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [(<p>review:</p> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var isFamilyFriendly;
      if( this.props.isFamilyFriendly ){
        if( this.props.isFamilyFriendly instanceof Array ){
          isFamilyFriendly = [(<p>isFamilyFriendly:</p> )];
          for( i in this.props.isFamilyFriendly ){
            isFamilyFriendly.push( ( <Boolean props={ this.props.isFamilyFriendly } /> ) );          }
        } else {
          isFamilyFriendly = ( <Boolean props={ this.props.isFamilyFriendly } /> );        }
      }
      var version;
      if( this.props.version ){
        if( this.props.version instanceof Array ){
          version = [(<p>version:</p> )];
          for( i in this.props.version ){
            version.push( ( <div class='version'></div> ) );
          }
        } else {
          version = ( <div class='version'>{this.props.version}</div> );
        }
      }
      var provider;
      if( this.props.provider ){
        if( this.props.provider instanceof Array ){
          provider = [(<p>provider:</p> )];
          for( i in this.props.provider ){
            provider.push( ( <div class='provider'></div> ) );
          }
        } else {
          provider = ( <div class='provider'>{this.props.provider}</div> );
        }
      }
      var isPartOf;
      if( this.props.isPartOf ){
        if( this.props.isPartOf instanceof Array ){
          isPartOf = [(<p>isPartOf:</p> )];
          for( i in this.props.isPartOf ){
            isPartOf.push( ( <CreativeWork props={ this.props.isPartOf } /> ) );          }
        } else {
          isPartOf = ( <CreativeWork props={ this.props.isPartOf } /> );        }
      }
      var accessibilityHazard;
      if( this.props.accessibilityHazard ){
        if( this.props.accessibilityHazard instanceof Array ){
          accessibilityHazard = [(<p>accessibilityHazard:</p> )];
          for( i in this.props.accessibilityHazard ){
            accessibilityHazard.push( ( <div class='accessibilityHazard'></div> ) );
          }
        } else {
          accessibilityHazard = ( <div class='accessibilityHazard'>{this.props.accessibilityHazard}</div> );
        }
      }
      var softwareRequirements;
      if( this.props.softwareRequirements ){
        if( this.props.softwareRequirements instanceof Array ){
          softwareRequirements = [(<p>softwareRequirements:</p> )];
          for( i in this.props.softwareRequirements ){
            softwareRequirements.push( ( <div class='softwareRequirements'></div> ) );
          }
        } else {
          softwareRequirements = ( <div class='softwareRequirements'>{this.props.softwareRequirements}</div> );
        }
      }
      var educationalAlignment;
      if( this.props.educationalAlignment ){
        if( this.props.educationalAlignment instanceof Array ){
          educationalAlignment = [(<p>educationalAlignment:</p> )];
          for( i in this.props.educationalAlignment ){
            educationalAlignment.push( ( <AlignmentObject props={ this.props.educationalAlignment } /> ) );          }
        } else {
          educationalAlignment = ( <AlignmentObject props={ this.props.educationalAlignment } /> );        }
      }
      var fileSize;
      if( this.props.fileSize ){
        if( this.props.fileSize instanceof Array ){
          fileSize = [(<p>fileSize:</p> )];
          for( i in this.props.fileSize ){
            fileSize.push( ( <Integer props={ this.props.fileSize } /> ) );          }
        } else {
          fileSize = ( <Integer props={ this.props.fileSize } /> );        }
      }
      var genre;
      if( this.props.genre ){
        if( this.props.genre instanceof Array ){
          genre = [(<p>genre:</p> )];
          for( i in this.props.genre ){
            genre.push( ( <div class='genre'></div> ) );
          }
        } else {
          genre = ( <div class='genre'>{this.props.genre}</div> );
        }
      }
      var publisher;
      if( this.props.publisher ){
        if( this.props.publisher instanceof Array ){
          publisher = [(<p>publisher:</p> )];
          for( i in this.props.publisher ){
            publisher.push( ( <Organization props={ this.props.publisher } /> ) );          }
        } else {
          publisher = ( <Organization props={ this.props.publisher } /> );        }
      }
      var about;
      if( this.props.about ){
        if( this.props.about instanceof Array ){
          about = [(<p>about:</p> )];
          for( i in this.props.about ){
            about.push( ( <Thing props={ this.props.about } /> ) );          }
        } else {
          about = ( <Thing props={ this.props.about } /> );        }
      }
      var license;
      if( this.props.license ){
        if( this.props.license instanceof Array ){
          license = [(<p>license:</p> )];
          for( i in this.props.license ){
            license.push( ( <div class='license'></div> ) );
          }
        } else {
          license = ( <div class='license'>{this.props.license}</div> );
        }
      }
      var workExample;
      if( this.props.workExample ){
        if( this.props.workExample instanceof Array ){
          workExample = [(<p>workExample:</p> )];
          for( i in this.props.workExample ){
            workExample.push( ( <CreativeWork props={ this.props.workExample } /> ) );          }
        } else {
          workExample = ( <CreativeWork props={ this.props.workExample } /> );        }
      }
      var mentions;
      if( this.props.mentions ){
        if( this.props.mentions instanceof Array ){
          mentions = [(<p>mentions:</p> )];
          for( i in this.props.mentions ){
            mentions.push( ( <Thing props={ this.props.mentions } /> ) );          }
        } else {
          mentions = ( <Thing props={ this.props.mentions } /> );        }
      }
      var comment;
      if( this.props.comment ){
        if( this.props.comment instanceof Array ){
          comment = [(<p>comment:</p> )];
          for( i in this.props.comment ){
            comment.push( ( <Comment props={ this.props.comment } /> ) );          }
        } else {
          comment = ( <Comment props={ this.props.comment } /> );        }
      }
      var isBasedOnUrl;
      if( this.props.isBasedOnUrl ){
        if( this.props.isBasedOnUrl instanceof Array ){
          isBasedOnUrl = [(<p>isBasedOnUrl:</p> )];
          for( i in this.props.isBasedOnUrl ){
            isBasedOnUrl.push( ( <div class='isBasedOnUrl'></div> ) );
          }
        } else {
          isBasedOnUrl = ( <div class='isBasedOnUrl'>{this.props.isBasedOnUrl}</div> );
        }
      }
      var encoding;
      if( this.props.encoding ){
        if( this.props.encoding instanceof Array ){
          encoding = [(<p>encoding:</p> )];
          for( i in this.props.encoding ){
            encoding.push( ( <MediaObject props={ this.props.encoding } /> ) );          }
        } else {
          encoding = ( <MediaObject props={ this.props.encoding } /> );        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(<p>sameAs:</p> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div class='sameAs'></div> ) );
          }
        } else {
          sameAs = ( <div class='sameAs'>{this.props.sameAs}</div> );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(<p>image:</p> )];
          for( i in this.props.image ){
            image.push( ( <div class='image'></div> ) );
          }
        } else {
          image = ( <div class='image'>{this.props.image}</div> );
        }
      }
      var associatedMedia;
      if( this.props.associatedMedia ){
        if( this.props.associatedMedia instanceof Array ){
          associatedMedia = [(<p>associatedMedia:</p> )];
          for( i in this.props.associatedMedia ){
            associatedMedia.push( ( <MediaObject props={ this.props.associatedMedia } /> ) );          }
        } else {
          associatedMedia = ( <MediaObject props={ this.props.associatedMedia } /> );        }
      }
      var featureList;
      if( this.props.featureList ){
        if( this.props.featureList instanceof Array ){
          featureList = [(<p>featureList:</p> )];
          for( i in this.props.featureList ){
            featureList.push( ( <div class='featureList'></div> ) );
          }
        } else {
          featureList = ( <div class='featureList'>{this.props.featureList}</div> );
        }
      }
      var contributor;
      if( this.props.contributor ){
        if( this.props.contributor instanceof Array ){
          contributor = [(<p>contributor:</p> )];
          for( i in this.props.contributor ){
            contributor.push( ( <div class='contributor'></div> ) );
          }
        } else {
          contributor = ( <div class='contributor'>{this.props.contributor}</div> );
        }
      }
      var thumbnailUrl;
      if( this.props.thumbnailUrl ){
        if( this.props.thumbnailUrl instanceof Array ){
          thumbnailUrl = [(<p>thumbnailUrl:</p> )];
          for( i in this.props.thumbnailUrl ){
            thumbnailUrl.push( ( <div class='thumbnailUrl'></div> ) );
          }
        } else {
          thumbnailUrl = ( <div class='thumbnailUrl'>{this.props.thumbnailUrl}</div> );
        }
      }
      var mainEntity;
      if( this.props.mainEntity ){
        if( this.props.mainEntity instanceof Array ){
          mainEntity = [(<p>mainEntity:</p> )];
          for( i in this.props.mainEntity ){
            mainEntity.push( ( <Thing props={ this.props.mainEntity } /> ) );          }
        } else {
          mainEntity = ( <Thing props={ this.props.mainEntity } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(<p>alternateName:</p> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div class='alternateName'></div> ) );
          }
        } else {
          alternateName = ( <div class='alternateName'>{this.props.alternateName}</div> );
        }
      }
      var accessibilityFeature;
      if( this.props.accessibilityFeature ){
        if( this.props.accessibilityFeature instanceof Array ){
          accessibilityFeature = [(<p>accessibilityFeature:</p> )];
          for( i in this.props.accessibilityFeature ){
            accessibilityFeature.push( ( <div class='accessibilityFeature'></div> ) );
          }
        } else {
          accessibilityFeature = ( <div class='accessibilityFeature'>{this.props.accessibilityFeature}</div> );
        }
      }
      var interactivityType;
      if( this.props.interactivityType ){
        if( this.props.interactivityType instanceof Array ){
          interactivityType = [(<p>interactivityType:</p> )];
          for( i in this.props.interactivityType ){
            interactivityType.push( ( <div class='interactivityType'></div> ) );
          }
        } else {
          interactivityType = ( <div class='interactivityType'>{this.props.interactivityType}</div> );
        }
      }
      var publication;
      if( this.props.publication ){
        if( this.props.publication instanceof Array ){
          publication = [(<p>publication:</p> )];
          for( i in this.props.publication ){
            publication.push( ( <PublicationEvent props={ this.props.publication } /> ) );          }
        } else {
          publication = ( <PublicationEvent props={ this.props.publication } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [(<p>offers:</p> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer props={ this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var editor;
      if( this.props.editor ){
        if( this.props.editor instanceof Array ){
          editor = [(<p>editor:</p> )];
          for( i in this.props.editor ){
            editor.push( ( <Person props={ this.props.editor } /> ) );          }
        } else {
          editor = ( <Person props={ this.props.editor } /> );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(<p>mainEntityOfPage:</p> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div class='mainEntityOfPage'></div> ) );
          }
        } else {
          mainEntityOfPage = ( <div class='mainEntityOfPage'>{this.props.mainEntityOfPage}</div> );
        }
      }
      var recordedAt;
      if( this.props.recordedAt ){
        if( this.props.recordedAt instanceof Array ){
          recordedAt = [(<p>recordedAt:</p> )];
          for( i in this.props.recordedAt ){
            recordedAt.push( ( <Event props={ this.props.recordedAt } /> ) );          }
        } else {
          recordedAt = ( <Event props={ this.props.recordedAt } /> );        }
      }
      var softwareVersion;
      if( this.props.softwareVersion ){
        if( this.props.softwareVersion instanceof Array ){
          softwareVersion = [(<p>softwareVersion:</p> )];
          for( i in this.props.softwareVersion ){
            softwareVersion.push( ( <div class='softwareVersion'></div> ) );
          }
        } else {
          softwareVersion = ( <div class='softwareVersion'>{this.props.softwareVersion}</div> );
        }
      }
      var hasPart;
      if( this.props.hasPart ){
        if( this.props.hasPart instanceof Array ){
          hasPart = [(<p>hasPart:</p> )];
          for( i in this.props.hasPart ){
            hasPart.push( ( <CreativeWork props={ this.props.hasPart } /> ) );          }
        } else {
          hasPart = ( <CreativeWork props={ this.props.hasPart } /> );        }
      }
      var award;
      if( this.props.award ){
        if( this.props.award instanceof Array ){
          award = [(<p>award:</p> )];
          for( i in this.props.award ){
            award.push( ( <div class='award'></div> ) );
          }
        } else {
          award = ( <div class='award'>{this.props.award}</div> );
        }
      }
      var copyrightHolder;
      if( this.props.copyrightHolder ){
        if( this.props.copyrightHolder instanceof Array ){
          copyrightHolder = [(<p>copyrightHolder:</p> )];
          for( i in this.props.copyrightHolder ){
            copyrightHolder.push( ( <div class='copyrightHolder'></div> ) );
          }
        } else {
          copyrightHolder = ( <div class='copyrightHolder'>{this.props.copyrightHolder}</div> );
        }
      }
      var accessibilityAPI;
      if( this.props.accessibilityAPI ){
        if( this.props.accessibilityAPI instanceof Array ){
          accessibilityAPI = [(<p>accessibilityAPI:</p> )];
          for( i in this.props.accessibilityAPI ){
            accessibilityAPI.push( ( <div class='accessibilityAPI'></div> ) );
          }
        } else {
          accessibilityAPI = ( <div class='accessibilityAPI'>{this.props.accessibilityAPI}</div> );
        }
      }
      var downloadUrl;
      if( this.props.downloadUrl ){
        if( this.props.downloadUrl instanceof Array ){
          downloadUrl = [(<p>downloadUrl:</p> )];
          for( i in this.props.downloadUrl ){
            downloadUrl.push( ( <div class='downloadUrl'></div> ) );
          }
        } else {
          downloadUrl = ( <div class='downloadUrl'>{this.props.downloadUrl}</div> );
        }
      }
      var learningResourceType;
      if( this.props.learningResourceType ){
        if( this.props.learningResourceType instanceof Array ){
          learningResourceType = [(<p>learningResourceType:</p> )];
          for( i in this.props.learningResourceType ){
            learningResourceType.push( ( <div class='learningResourceType'></div> ) );
          }
        } else {
          learningResourceType = ( <div class='learningResourceType'>{this.props.learningResourceType}</div> );
        }
      }
      var sourceOrganization;
      if( this.props.sourceOrganization ){
        if( this.props.sourceOrganization instanceof Array ){
          sourceOrganization = [(<p>sourceOrganization:</p> )];
          for( i in this.props.sourceOrganization ){
            sourceOrganization.push( ( <Organization props={ this.props.sourceOrganization } /> ) );          }
        } else {
          sourceOrganization = ( <Organization props={ this.props.sourceOrganization } /> );        }
      }
      var operatingSystem;
      if( this.props.operatingSystem ){
        if( this.props.operatingSystem instanceof Array ){
          operatingSystem = [(<p>operatingSystem:</p> )];
          for( i in this.props.operatingSystem ){
            operatingSystem.push( ( <div class='operatingSystem'></div> ) );
          }
        } else {
          operatingSystem = ( <div class='operatingSystem'>{this.props.operatingSystem}</div> );
        }
      }
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [(<p>inLanguage:</p> )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( <div class='inLanguage'></div> ) );
          }
        } else {
          inLanguage = ( <div class='inLanguage'>{this.props.inLanguage}</div> );
        }
      }
      var citation;
      if( this.props.citation ){
        if( this.props.citation instanceof Array ){
          citation = [(<p>citation:</p> )];
          for( i in this.props.citation ){
            citation.push( ( <div class='citation'></div> ) );
          }
        } else {
          citation = ( <div class='citation'>{this.props.citation}</div> );
        }
      }
      var countriesSupported;
      if( this.props.countriesSupported ){
        if( this.props.countriesSupported instanceof Array ){
          countriesSupported = [(<p>countriesSupported:</p> )];
          for( i in this.props.countriesSupported ){
            countriesSupported.push( ( <div class='countriesSupported'></div> ) );
          }
        } else {
          countriesSupported = ( <div class='countriesSupported'>{this.props.countriesSupported}</div> );
        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(<p>additionalType:</p> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div class='additionalType'></div> ) );
          }
        } else {
          additionalType = ( <div class='additionalType'>{this.props.additionalType}</div> );
        }
      }
      var availableOnDevice;
      if( this.props.availableOnDevice ){
        if( this.props.availableOnDevice instanceof Array ){
          availableOnDevice = [(<p>availableOnDevice:</p> )];
          for( i in this.props.availableOnDevice ){
            availableOnDevice.push( ( <div class='availableOnDevice'></div> ) );
          }
        } else {
          availableOnDevice = ( <div class='availableOnDevice'>{this.props.availableOnDevice}</div> );
        }
      }
      var applicationSubCategory;
      if( this.props.applicationSubCategory ){
        if( this.props.applicationSubCategory instanceof Array ){
          applicationSubCategory = [(<p>applicationSubCategory:</p> )];
          for( i in this.props.applicationSubCategory ){
            applicationSubCategory.push( ( <div class='applicationSubCategory'></div> ) );
          }
        } else {
          applicationSubCategory = ( <div class='applicationSubCategory'>{this.props.applicationSubCategory}</div> );
        }
      }
      var softwareHelp;
      if( this.props.softwareHelp ){
        if( this.props.softwareHelp instanceof Array ){
          softwareHelp = [(<p>softwareHelp:</p> )];
          for( i in this.props.softwareHelp ){
            softwareHelp.push( ( <CreativeWork props={ this.props.softwareHelp } /> ) );          }
        } else {
          softwareHelp = ( <CreativeWork props={ this.props.softwareHelp } /> );        }
      }
      var author;
      if( this.props.author ){
        if( this.props.author instanceof Array ){
          author = [(<p>author:</p> )];
          for( i in this.props.author ){
            author.push( ( <div class='author'></div> ) );
          }
        } else {
          author = ( <div class='author'>{this.props.author}</div> );
        }
      }
      var dateModified;
      if( this.props.dateModified ){
        if( this.props.dateModified instanceof Array ){
          dateModified = [(<p>dateModified:</p> )];
          for( i in this.props.dateModified ){
            dateModified.push( ( <div class='dateModified'></div> ) );
          }
        } else {
          dateModified = ( <div class='dateModified'>{this.props.dateModified}</div> );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(<p>description:</p> )];
          for( i in this.props.description ){
            description.push( ( <div class='description'></div> ) );
          }
        } else {
          description = ( <div class='description'>{this.props.description}</div> );
        }
      }
      var screenshot;
      if( this.props.screenshot ){
        if( this.props.screenshot instanceof Array ){
          screenshot = [(<p>screenshot:</p> )];
          for( i in this.props.screenshot ){
            screenshot.push( ( <div class='screenshot'></div> ) );
          }
        } else {
          screenshot = ( <div class='screenshot'>{this.props.screenshot}</div> );
        }
      }
      var releasedEvent;
      if( this.props.releasedEvent ){
        if( this.props.releasedEvent instanceof Array ){
          releasedEvent = [(<p>releasedEvent:</p> )];
          for( i in this.props.releasedEvent ){
            releasedEvent.push( ( <PublicationEvent props={ this.props.releasedEvent } /> ) );          }
        } else {
          releasedEvent = ( <PublicationEvent props={ this.props.releasedEvent } /> );        }
      }
      var translator;
      if( this.props.translator ){
        if( this.props.translator instanceof Array ){
          translator = [(<p>translator:</p> )];
          for( i in this.props.translator ){
            translator.push( ( <div class='translator'></div> ) );
          }
        } else {
          translator = ( <div class='translator'>{this.props.translator}</div> );
        }
      }
      var softwareAddOn;
      if( this.props.softwareAddOn ){
        if( this.props.softwareAddOn instanceof Array ){
          softwareAddOn = [(<p>softwareAddOn:</p> )];
          for( i in this.props.softwareAddOn ){
            softwareAddOn.push( ( <SoftwareApplication props={ this.props.softwareAddOn } /> ) );          }
        } else {
          softwareAddOn = ( <SoftwareApplication props={ this.props.softwareAddOn } /> );        }
      }
      var storageRequirements;
      if( this.props.storageRequirements ){
        if( this.props.storageRequirements instanceof Array ){
          storageRequirements = [(<p>storageRequirements:</p> )];
          for( i in this.props.storageRequirements ){
            storageRequirements.push( ( <div class='storageRequirements'></div> ) );
          }
        } else {
          storageRequirements = ( <div class='storageRequirements'>{this.props.storageRequirements}</div> );
        }
      }
      var schemaVersion;
      if( this.props.schemaVersion ){
        if( this.props.schemaVersion instanceof Array ){
          schemaVersion = [(<p>schemaVersion:</p> )];
          for( i in this.props.schemaVersion ){
            schemaVersion.push( ( <div class='schemaVersion'></div> ) );
          }
        } else {
          schemaVersion = ( <div class='schemaVersion'>{this.props.schemaVersion}</div> );
        }
      }
      var contentLocation;
      if( this.props.contentLocation ){
        if( this.props.contentLocation instanceof Array ){
          contentLocation = [(<p>contentLocation:</p> )];
          for( i in this.props.contentLocation ){
            contentLocation.push( ( <Place props={ this.props.contentLocation } /> ) );          }
        } else {
          contentLocation = ( <Place props={ this.props.contentLocation } /> );        }
      }
      var timeRequired;
      if( this.props.timeRequired ){
        if( this.props.timeRequired instanceof Array ){
          timeRequired = [(<p>timeRequired:</p> )];
          for( i in this.props.timeRequired ){
            timeRequired.push( ( <Duration props={ this.props.timeRequired } /> ) );          }
        } else {
          timeRequired = ( <Duration props={ this.props.timeRequired } /> );        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(<p>url:</p> )];
          for( i in this.props.url ){
            url.push( ( <div class='url'></div> ) );
          }
        } else {
          url = ( <div class='url'>{this.props.url}</div> );
        }
      }
      var position;
      if( this.props.position ){
        if( this.props.position instanceof Array ){
          position = [(<p>position:</p> )];
          for( i in this.props.position ){
            position.push( ( <div class='position'></div> ) );
          }
        } else {
          position = ( <div class='position'>{this.props.position}</div> );
        }
      }
      var audio;
      if( this.props.audio ){
        if( this.props.audio instanceof Array ){
          audio = [(<p>audio:</p> )];
          for( i in this.props.audio ){
            audio.push( ( <AudioObject props={ this.props.audio } /> ) );          }
        } else {
          audio = ( <AudioObject props={ this.props.audio } /> );        }
      }
      return (<div title='SoftwareApplication' className='SoftwareApplication entity'>
        { educationalUse }
        { producer }
        { text }
        { datePublished }
        { processorRequirements }
        { alternativeHeadline }
        { accountablePerson }
        { keywords }
        { countriesNotSupported }
        { headline }
        { character }
        { contentRating }
        { applicationCategory }
        { exampleOfWork }
        { publishingPrinciples }
        { releaseNotes }
        { dateCreated }
        { memoryRequirements }
        { permissions }
        { potentialAction }
        { name }
        { aggregateRating }
        { audience }
        { accessibilityControl }
        { copyrightYear }
        { installUrl }
        { creator }
        { commentCount }
        { video }
        { typicalAgeRange }
        { fileFormat }
        { applicationSuite }
        { discussionUrl }
        { review }
        { isFamilyFriendly }
        { version }
        { provider }
        { isPartOf }
        { accessibilityHazard }
        { softwareRequirements }
        { educationalAlignment }
        { fileSize }
        { genre }
        { publisher }
        { about }
        { license }
        { workExample }
        { mentions }
        { comment }
        { isBasedOnUrl }
        { encoding }
        { sameAs }
        { image }
        { associatedMedia }
        { featureList }
        { contributor }
        { thumbnailUrl }
        { mainEntity }
        { alternateName }
        { accessibilityFeature }
        { interactivityType }
        { publication }
        { offers }
        { editor }
        { mainEntityOfPage }
        { recordedAt }
        { softwareVersion }
        { hasPart }
        { award }
        { copyrightHolder }
        { accessibilityAPI }
        { downloadUrl }
        { learningResourceType }
        { sourceOrganization }
        { operatingSystem }
        { inLanguage }
        { citation }
        { countriesSupported }
        { additionalType }
        { availableOnDevice }
        { applicationSubCategory }
        { softwareHelp }
        { author }
        { dateModified }
        { description }
        { screenshot }
        { releasedEvent }
        { translator }
        { softwareAddOn }
        { storageRequirements }
        { schemaVersion }
        { contentLocation }
        { timeRequired }
        { url }
        { position }
        { audio }
     </div>);
    }
  });
});
