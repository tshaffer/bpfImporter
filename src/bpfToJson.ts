const xml2js : any = require('xml2js');

import * as Converters from './converters';

export function bpfToJson(xmlBPF : any) : any {

  return new Promise( (resolve) => {
    stringToJson(xmlBPF).then( (jsonBPF: any) => {
      const bpf : any = fixJsonBPF(jsonBPF);
      resolve(bpf);
    });
  });
}

function fixJsonBPF(rawBPF : any) : any {

  let bpf : any = {};

  const rawBrightAuthor : any = rawBPF.BrightAuthor;
  const rawPresentationParameters : any = rawBrightAuthor.$;
  const rawMetadata = rawBrightAuthor.meta;

  // TODO
  // check for array vs. non array for zones
  const rawZones = rawBrightAuthor.zones;
  const rawZone = rawZones.zone;

  bpf.presentationParameters = fixPresentationParameters(rawPresentationParameters);
  bpf.metadata = fixMetadata(rawMetadata);
  bpf.zones = fixZones(rawZones);

  console.log(bpf);

  return bpf;
}

function fixPresentationParameters(rawPresentationParameters: any) : any {

  const presentationParametersSpec: any[] = [
    { name: 'BrightAuthorVersion', type: 'string'},
    { name: 'type', type: 'string'},
    { name: 'version', type: 'number'}
  ];

  return fixJson(presentationParametersSpec, rawPresentationParameters);
}

function fixMetadata(rawMetadata: any) : any {

  let {
    DirectoryLocations, SerialPortConfiguration, backgroundScreenColor, beacons, htmlSites, liveDataFeeds,
    parserPlugins, presentationIdentifiers, scriptPlugins, userDefinedEvents, userVariables
  } = rawMetadata;

  const metadataSpec: any[] = [
    { name:'name', type: 'string'},
    { name:'videoMode', type: 'string'},
    { name:'model', type: 'string'},
    { name:'alphabetizeVariableNames', type: 'boolean'},
    { name:'autoCreateMediaCounterVariables', type: 'boolean'},
    { name:'delayScheduleChangeUntilMediaEndEvent', type: 'boolean'},
    { name:'deviceWebPageDisplay', type: 'string'},
    { name:'flipCoordinates', type: 'boolean'},
    { name:'forceResolution', type: 'boolean'},
    { name:'graphicsZOrder', type: 'string'},
    { name:'htmlEnableJavascriptConsole', type: 'boolean'},
    { name:'inactivityTime', type: 'number'},
    { name:'inactivityTimeout', type: 'boolean'},
    { name:'isMosaic', type: 'boolean'},
    { name:'language', type: 'string'},
    { name:'languageKey', type: 'string'},
    { name:'monitorOrientation', type: 'string'},
    { name:'monitorOverscan', type: 'string'},
    { name:'resetVariablesOnPresentationStart', type: 'boolean'},
    { name:'tenBitColorEnabled', type: 'boolean'},
    { name:'touchCursorDisplayMode', type: 'string'},
    { name:'udpDestinationAddress', type: 'string'},
    { name:'udpDestinationAddressType', type: 'string'},
    { name:'udpDestinationPort', type: 'number'},
    { name:'udpReceiverPort', type: 'number'},
    { name:'videoConnector', type: 'string'},
    { name:'BP200AConfiguration', type: 'number'},
    { name:'BP200AConfigureAutomatically', type: 'boolean'},
    { name:'BP200BConfiguration', type: 'number'},
    { name:'BP200BConfigureAutomatically', type: 'boolean'},
    { name:'BP200CConfiguration', type: 'number'},
    { name:'BP200CConfigureAutomatically', type: 'boolean'},
    { name:'BP200DConfiguration', type: 'number'},
    { name:'BP200DConfigureAutomatically', type: 'boolean'},
    { name:'BP900AConfiguration', type: 'number'},
    { name:'BP900AConfigureAutomatically', type: 'boolean'},
    { name:'BP900BConfiguration', type: 'number'},
    { name:'BP900BConfigureAutomatically', type: 'boolean'},
    { name:'BP900CConfiguration', type: 'number'},
    { name:'BP900CConfigureAutomatically', type: 'boolean'},
    { name:'BP900DConfiguration', type: 'number'},
    { name:'BP900DConfigureAutomatically', type: 'boolean'},
    { name:'audio1MaxVolume', type: 'number'},
    { name:'audio1MinVolume', type: 'number'},
    { name:'audio2MaxVolume', type: 'number'},
    { name:'audio2MinVolume', type: 'number'},
    { name:'audio3MaxVolume', type: 'number'},
    { name:'audio3MinVolume', type: 'number'},
    { name:'audioConfiguration', type: 'string'},
    { name:'fullResGraphicsEnabled', type: 'boolean'},
    { name:'gpio0', type: 'string'},
    { name:'gpio1', type: 'string'},
    { name:'gpio2', type: 'string'},
    { name:'gpio3', type: 'string'},
    { name:'gpio4', type: 'string'},
    { name:'gpio5', type: 'string'},
    { name:'gpio6', type: 'string'},
    { name:'gpio7', type: 'string'},
    { name:'hdmiMaxVolume', type: 'number'},
    { name:'hdmiMinVolume', type: 'number'},
    { name:'isBackup', type: 'boolean'},
    { name:'networkedVariablesUpdateInterval', type: 'number'},
    { name:'spdifMaxVolume', type: 'number'},
    { name:'spdifMinVolume', type: 'number'},
    { name:'usbAMaxVolume', type: 'number'},
    { name:'usbAMinVolume', type: 'number'},
    { name:'usbBMaxVolume', type: 'number'},
    { name:'usbBMinVolume', type: 'number'},
    { name:'usbCMaxVolume', type: 'number'},
    { name:'usbCMinVolume', type: 'number'},
    { name:'usbDMaxVolume', type: 'number'},
    { name:'usbDMinVolume', type: 'number'},
  ];

  let metadata : any = fixJson(metadataSpec, rawMetadata);
  metadata.backgroundScreenColor = fixBackgroundScreenColor(backgroundScreenColor);
  metadata.SerialPortConfigurations = fixSerialPortConfiguration(SerialPortConfiguration);
  metadata.liveDataFeeds = fixLiveDataFeeds(liveDataFeeds);
  metadata.userVariables = fixUserVariables(userVariables);
  metadata.htmlSites = fixHtmlSites(htmlSites);

  return metadata;
}

function fixLiveDataFeeds(rawLiveDataFeeds: any) : any {

  let liveDataFeeds: any[] = [];

  const liveDataFeedConfigurationSpec: any [] = [
    { name: 'autoGenerateUserVariables', type: 'boolean'},
    { name: 'dataFeedUse', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'dataFeedUse', type: 'string'},
    { name: 'updateInterval', type: 'number'},
    { name: 'useHeadRequest', type: 'boolean'},
    { name: 'userVariableAccess', type: 'string'},
  ];

  if (rawLiveDataFeeds && rawLiveDataFeeds.liveDataFeed) {

    if (Array.isArray(rawLiveDataFeeds.liveDataFeed)) {
      rawLiveDataFeeds.liveDataFeed.forEach((rawLiveDataFeed: any) => {
        console.log(rawLiveDataFeed);

        let liveDataFeed: any = fixJson(liveDataFeedConfigurationSpec, rawLiveDataFeed);

        liveDataFeed.parserPluginName = fixString(rawLiveDataFeed.parserPluginName);
        liveDataFeed.uvParserPluginName = fixString(rawLiveDataFeed.uvParserPluginName);

        // TODO - currently only supports liveDynamicPlaylist
        if (rawLiveDataFeed.liveDynamicPlaylist) {
          liveDataFeed.liveDynamicPlaylist = fixLiveDynamicPlaylist(rawLiveDataFeed.liveDynamicPlaylist);
        }
        liveDataFeeds.push(liveDataFeed);
      });
    }
    else {
      let rawLiveDataFeed : any = rawLiveDataFeeds.liveDataFeed;
      console.log(rawLiveDataFeed);

      let liveDataFeed: any = fixJson(liveDataFeedConfigurationSpec, rawLiveDataFeed);

      liveDataFeed.parserPluginName = fixString(rawLiveDataFeed.parserPluginName);
      liveDataFeed.uvParserPluginName = fixString(rawLiveDataFeed.uvParserPluginName);

      // TODO - limited support
      if (rawLiveDataFeed.liveDynamicPlaylist) {
        liveDataFeed.liveDynamicPlaylist = fixLiveDynamicPlaylist(rawLiveDataFeed.liveDynamicPlaylist);
      }
      else {    // general url
        liveDataFeed.url = fixParameterValue(rawLiveDataFeed.url.parameterValue);
      }
      liveDataFeeds.push(liveDataFeed);
    }
  }

  return liveDataFeeds;
}

function fixParameterValue(rawParameterValue : any) : any {
  console.log(rawParameterValue);

  let parameterValue : any = {};
  parameterValue.parameterValueItems = [];

  const rawParameterValueItems : any[] = rawParameterValue.$$;
  rawParameterValueItems.forEach( (rawParameterValueItem : any) => {

    switch (rawParameterValueItem["#name"]) {
      case 'parameterValueItemText': {
        let parameterValueItem : any = {
          type : 'textValue',
          textValue : rawParameterValueItem.value
        };
        parameterValue.parameterValueItems.push(parameterValueItem);

        break;
      }
      case 'parameterValueItemUserVariable': {

        const rawUserVariable : any = rawParameterValueItem.userVariable;
        const userVariable : any = fixUserVariable(rawUserVariable);

        let parameterValueItem : any = {
          type : 'userVariable',
          userVariable : userVariable
        };
        parameterValue.parameterValueItems.push(parameterValueItem);

        break;
      }
      case 'parameterValueItemMediaCounterVariable': {
        // TODO - not yet supported
        debugger;

        break;
      }
    }
  });

  return parameterValue;
}

function fixHtmlSites(rawHtmlSites : any) : any {

  // TODO - temporary!! only works for a single local html site

  const htmlSites : any[] = [];

  const htmlSitesSpec: any [] = [
    { name: 'name', type: 'string'},
    { name: 'filePath', type: 'string'}
  ];

  if (rawHtmlSites && rawHtmlSites.localHTMLSite) {
    let htmlSite : any = fixJson(htmlSitesSpec, rawHtmlSites.localHTMLSite);
    htmlSite.queryString = '';

    htmlSites.push(htmlSite);
  }

  return htmlSites;
}

function fixUserVariables(rawUserVariables: any) : any {
  console.log(rawUserVariables);

  const userVariables : any[] = [];

  const userVariableConfigurationSpec: any [] = [
    { name: 'access', type: 'string'},
    { name: 'defaultValue', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'networked', type: 'boolean'},
  ];

  if (rawUserVariables && rawUserVariables.userVariable) {
    if (Array.isArray(rawUserVariables.userVariable)) {
      rawUserVariables.userVariable.forEach( (rawUserVariable : any) => {
        let userVariable : any = fixJson(userVariableConfigurationSpec, rawUserVariable);
        userVariable.liveDataFeedName = fixString(rawUserVariable.liveDataFeedName);
        // TODO - systemVariable - string?
        userVariable.systemVariable = fixString(rawUserVariable.systemVariable);

        userVariables.push(userVariable);
      });
    }
    else {
      const rawUserVariable : any = rawUserVariables.userVariable;
      let userVariable : any = fixJson(userVariableConfigurationSpec, rawUserVariable);
      userVariable.liveDataFeedName = fixString(rawUserVariable.liveDataFeedName);
      // TODO - systemVariable - string?
      userVariable.systemVariable = fixString(rawUserVariable.systemVariable);

      userVariables.push(userVariable);
    }
  }

  return userVariables;
}

function fixUserVariable(rawUserVariable : any) : any {

  const userVariableConfigurationSpec: any [] = [
    { name: 'access', type: 'string'},
    { name: 'defaultValue', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'networked', type: 'boolean'},
  ];

  let userVariable : any = fixJson(userVariableConfigurationSpec, rawUserVariable);
  userVariable.liveDataFeedName = fixString(rawUserVariable.liveDataFeedName);
  // TODO - systemVariable - string?
  userVariable.systemVariable = fixString(rawUserVariable.systemVariable);

  return userVariable;
}

function fixLiveDynamicPlaylist(rawLiveDynamicPlaylist : any) : any {

  const liveDynamicPlaylistSpec : any [] = [
    { name: 'id', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'supportsAudio', type: 'boolean'},
    { name: 'url', type: 'string'},
  ];

  let liveDynamicPlaylist : any = fixJson(liveDynamicPlaylistSpec, rawLiveDynamicPlaylist);
  return liveDynamicPlaylist;
}

function fixSerialPortConfiguration(rawSerialPortConfigurations : any) : any {

  let serialPortConfigurations : any[] = [];

  const serialPortConfigurationSpec: any [] = [
    { name:'baudRate', type: 'number'},
    { name:'connectedDevice', type: 'string'},
    { name:'dataBits', type: 'number'},
    { name:'invertSignals', type: 'boolean'},
    { name:'parity', type: 'string'},
    { name:'port', type: 'number'},
    { name:'protocol', type: 'string'},
    { name:'receiveEol', type: 'string'},
    { name:'sendEol', type: 'string'},
    { name:'stopBits', type: 'number'},
  ];

  rawSerialPortConfigurations.forEach( (rawSerialPortConfiguration : any) => {
    serialPortConfigurations.push(fixJson(serialPortConfigurationSpec, rawSerialPortConfiguration));
  });

  return serialPortConfigurations;
}

function fixBackgroundScreenColor(rawBackgroundScreenColor : any) : any {
  const backgroundScreenColorSpec: any[] = [
    { name:'a', type: 'number'},
    { name:'r', type: 'number'},
    { name:'g', type: 'number'},
    { name:'b', type: 'number'},
  ];

  return fixJson(backgroundScreenColorSpec, rawBackgroundScreenColor.$);
}

function fixZones(rawZones: any) : any {

  // check to see if rawZones is an array - for now it's not
  let zones : any = [];
  zones.push(fixZone(rawZones.zone));

  return zones;
}

function fixZone(rawZone : any) : any {

  let zone : any = fixZoneParameters(rawZone);
  zone.zoneSpecificParameters = fixZoneSpecificParameters(rawZone.zoneSpecificParameters);
  zone.playlist = fixZonePlaylist(rawZone.playlist);

  return zone;
}

function fixZoneParameters(rawZone : any) : any {

  const zoneParametersSpec: any[] = [
    { name: 'height', type: 'number'},
    { name: 'horizontalOffset', type: 'number'},
    { name: 'id', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'type', type: 'string'},
    { name: 'verticalOffset', type: 'number'},
    { name: 'width', type: 'number'},
    { name: 'x', type: 'number'},
    { name: 'y', type: 'number'},
    { name: 'zoomValue', type: 'number'},
  ];

  return fixJson(zoneParametersSpec, rawZone);
}

function fixZoneSpecificParameters(rawZoneSpecificParameters : any) : any {

  const zoneSpecificParametersSpec: any[] = [
    { name: 'analogOutput', type: 'string'},
    { name: 'analog2Output', type: 'string'},
    { name: 'analog3Output', type: 'string'},
    { name: 'audioMapping', type: 'string'},
    { name: 'audioMixMode', type: 'string'},
    { name: 'audioMode', type: 'string'},
    { name: 'audioOutput', type: 'string'},
    { name: 'audioVolume', type: 'number'},
    { name: 'brightness', type: 'number'},
    { name: 'contrast', type: 'number'},
    { name: 'hdmiOutput', type: 'string'},
    { name: 'hue', type: 'number'},
    { name: 'imageMode', type: 'string'},
    { name: 'liveVideoInput', type: 'string'},
    { name: 'liveVideoStandard', type: 'string'},
    { name: 'maxContentResolution', type: 'string'},
    { name: 'maximumVolume', type: 'number'},
    { name: 'minimumVolume', type: 'number'},
    { name: 'mosaic', type: 'boolean'},
    { name: 'saturation', type: 'number'},
    { name: 'spdifOutput', type: 'string'},
    { name: 'usbOutput', type: 'string'},
    { name: 'usbOutputA', type: 'string'},
    { name: 'usbOutputB', type: 'string'},
    { name: 'usbOutputC', type: 'string'},
    { name: 'usbOutputD', type: 'string'},
    { name: 'videoVolume', type: 'number'},
    { name: 'viewMode', type: 'string'},
    { name: 'zOrderFront', type: 'boolean'},
  ];

  return fixJson(zoneSpecificParametersSpec, rawZoneSpecificParameters);
}

function fixZonePlaylist(rawZonePlaylist : any) : any {

  const playlistParametersSpec: any[] = [
    { name: 'name', type: 'string'},
    { name: 'type', type: 'string'},
  ];

  let playlist : any = fixJson(playlistParametersSpec, rawZonePlaylist);

  if (playlist.type === 'non-interactive') {
    playlist.states = fixZonePlaylistStates(rawZonePlaylist.$$);
  }
  else {
    debugger;
  }

  return playlist;
}

function fixZonePlaylistStates(rawPlaylistItems: any) : any {

  let playlistStates : any[] = [];

  rawPlaylistItems.forEach( (rawPlaylistItem : any) => {
    switch (rawPlaylistItem["#name"]) {
      case 'imageItem': {
        playlistStates.push(fixImageItem(rawPlaylistItem));
        break;
      }
      case 'videoItem': {
        playlistStates.push(fixVideoItem(rawPlaylistItem));
        break;
      }
      case 'liveVideoItem': {
        playlistStates.push(fixLiveVideoItem(rawPlaylistItem));
        break;
      }
      case 'videoStreamItem': {
        playlistStates.push(fixVideoStreamItem(rawPlaylistItem));
        break;
      }
      case 'mrssDataFeedPlaylistItem': {
        playlistStates.push(fixMrssDataFeedItem(rawPlaylistItem));
        break;
      }
      case 'html5Item': {
        playlistStates.push(fixHtml5Item(rawPlaylistItem));
        break;
      }
    }
  });
  return playlistStates;
}

function fixImageItem(rawImageItem : any) : any {

  const imageItemParametersSpec: any[] = [
    { name: 'fileIsLocal', type: 'boolean'},
    { name: 'slideDelayInterval', type: 'number'},
    { name: 'slideTransition', type: 'string'},
    { name: 'transitionDuration', type: 'number'},
    { name: 'videoPlayerRequired', type: 'boolean'},
  ];

  let imageItem : any = fixJson(imageItemParametersSpec, rawImageItem);
  imageItem.file = fixRawFileItem(rawImageItem.file.$);
  imageItem.type = 'imageItem';

  return imageItem;
}

function fixVideoItem(rawVideoItem : any) : any {
  
  const videoItemParametersSpec: any[] = [
    { name: 'automaticallyLoop', type: 'boolean'},
    { name: 'fileIsLocal', type: 'boolean'},
    { name: 'videoDisplayMode', type: 'string'},
    { name: 'volume', type: 'number'},
  ];

  let videoItem : any = fixJson(videoItemParametersSpec, rawVideoItem);
  videoItem.file = fixRawFileItem(rawVideoItem.file.$);
  videoItem.type = 'videoItem';

  return videoItem;
}

function fixLiveVideoItem(rawLiveVideoItem: any) : any {

  const liveVideoParametersSpec: any[] = [

    { name: 'volume', type: 'number'},
    { name: 'timeOnScreen', type: 'number'},
    { name: 'overscan', type: 'boolean'}
  ];

  let liveVideoItem: any = fixJson(liveVideoParametersSpec, rawLiveVideoItem);
  liveVideoItem.type = 'liveVideoItem';

  return liveVideoItem;
}

function fixVideoStreamItem(rawVideoStreamItem: any) : any {

  // TODO
  // const rawStreamSpec = rawVideoStreamItem.streamSpec;
  // const streamSpecParametersSpec: any[] = [
  //   { name: 'name', type: 'string' },
  //   { name: 'timeOnScreen', type: 'number'},
  // ];
  //
  // let streamSpec : any = fixJson(streamSpecParametersSpec, rawStreamSpec);

  //TODO
  let name: string = rawVideoStreamItem.streamSpec.$.name;
  let timeOnScreen: number = Number(rawVideoStreamItem.streamSpec.$.timeOnScreen);

  const url : any = fixParameterValue(rawVideoStreamItem.url.parameterValue);

  // let url : any = {
  //   parameterValue : {
  //     parameterValueItemText: {
  //       value: rawVideoStreamItem.url.parameterValue.parameterValueItemText.value
  //     }
  //   }
  // };

  const videoStreamItem: any = {
    name,
    timeOnScreen,
    url
  };
  videoStreamItem.type = 'videoStreamItem';

  return videoStreamItem;
}

function fixMrssDataFeedItem(rawMrssDataFeedItem : any) : any {

  const mrssDataFeedItemParametersSpec: any[] = [
    { name: 'stateName', type: 'string'},
    { name: 'liveDataFeedName', type: 'string'},
    { name: 'usesBSNDynamicPlaylist', type: 'boolean'},
    { name: 'videoPlayerRequired', type: 'boolean'},
  ];

  let mrssDataFeedItem: any = fixJson(mrssDataFeedItemParametersSpec, rawMrssDataFeedItem);
  mrssDataFeedItem.type = 'mrssDataFeedItem';

  return mrssDataFeedItem;
}

function fixHtml5Item(rawHtml5Item : any) : any {

  const html5ItemSpec: any[] = [
    { name: 'name', type: 'string'},
    { name: 'htmlSiteName', type: 'string'},
    { name: 'enableExternalData', type: 'boolean'},
    { name: 'enableMouseEvents', type: 'boolean'},
    { name: 'displayCursor', type: 'boolean'},
    { name: 'hwzOn', type: 'boolean'},
    { name: 'useUserStylesheet', type: 'boolean'},
    { name: 'timeOnScreen', type: 'number'},
  ];

  let html5Item: any = fixJson(html5ItemSpec, rawHtml5Item);
  html5Item.type = 'html5Item';
  html5Item.userStyleSheet = ''; // TODO

  return html5Item;
}

function fixRawFileItem(rawFileItem : any) : any {
  const imageItemParametersSpec: any[] = [
    { name: 'name', type: 'string'},
    { name: 'path', type: 'string'},
  ];

  return fixJson(imageItemParametersSpec, rawFileItem);
}

function fixJson(parametersSpec: any[], parameters: any) : any {

  let convertedParameters: any = {};

  parametersSpec.forEach( (parameterSpec : any) => {
    if (parameters.hasOwnProperty(parameterSpec.name)) {
      let parameterValue = parameters[parameterSpec.name];
      switch(parameterSpec.type) {
        case 'string':
          convertedParameters[parameterSpec.name] = parameterValue;
          break;
        case 'boolean':
          convertedParameters[parameterSpec.name] = Converters.stringToBool(parameterValue);
          break;
        case 'number':
          convertedParameters[parameterSpec.name] = Converters.stringToNumber(parameterValue);
          break;
      }
    }
  });

  return convertedParameters;
}

function stringToJson(buf : Buffer) : any {

  return new Promise( (resolve, reject) => {
    try {
      let parser = new xml2js.Parser({
        explicitArray: false,
        explicitChildren: true,
        preserveChildrenOrder: true
      });
      parser.parseString(buf, (err: any, json: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(json);
      });
    } catch (parseErr) {
      reject(parseErr);
    }
  });
}

function fixString(rawValue : any) : string {
  if (typeof rawValue === 'string') {
    return rawValue;
  }
  return '';
}

