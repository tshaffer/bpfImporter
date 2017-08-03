import * as path from 'path';

import {
  getEnumKeyOfValue,
  AccessType,
  AssetLocation,
  AssetType,
  AudioMappingType,

  AudioMixModeType,
  AudioModeType,
  AudioOutputSelectionType,
  AudioOutputType,
  BsAssetItem,
  BsColor,
  BsnFeedProperties,
  BsRect,
  DeviceWebPageDisplay,
  GraphicsZOrderType,
  EventType,
  ImageModeType,
  LanguageType,
  LanguageKeyType,
  LiveVideoInputType,
  LiveVideoStandardType,
  MediaType,
  MonitorOrientationType,
  MonitorOverscanType,
  MosaicMaxContentResolutionType,
  TouchCursorDisplayModeType,
  TransitionType,
  UdpAddressType,
  VideoConnectorType,
  ViewModeType,
  ZoneType,
} from '@brightsign/bscore';

import {
  getAssetItemFromFile
} from '@brightsign/fsconnector';

import {
  AudioSignPropertyMapParams,
  BsDmId,
  BsDmThunkAction,
  DataFeedAction,
  DataFeedParams,
  DmcHtmlSite,
  DmAudioOutputAssignmentMap,
  DmAudioSignProperties,
  DmAudioSignPropertyMap,
  DmAudioZoneProperties,
  DmAudioZonePropertyData,
  DmHtmlContentItem,
  DmImageZoneProperties,
  DmImageZonePropertyData,
  DmLiveVideoContentItem,
  DmMediaStateContainer,
  DmMrssDataFeedContentItem,
  DmNameParam,
  DmParameterizedString,
  DmSerialPortList,
  DmSignMetadata,
  DmSignProperties,
  DmSignState,
  DmVideoZoneProperties,
  DmVideoZonePropertyData,
  DmVideoStreamContentItem,
  DmcDataFeed,
  EventParams,
  HtmlSiteLocalAction,
  MediaStateAction,
  MediaStateParams,
  SerialPortListParams,
  SignAction,
  TransitionAction,
  UserVariableAction,
  ZoneAction,
  ZoneParams,
  ZoneChangeParams,
  ZonePropertyUpdateAction,
  ZonePropertyUpdateParams,
  VideoOrImagesZonePropertyParams,
  dmAddBsnDataFeed,
  dmAddEvent,
  dmAddLocalHtmlSite,
  dmAddMediaState,
  dmAddDataFeed,
  dmAddTransition,
  dmAddUserVariable,
  dmAddZone,
  dmAppendStringToParameterizedString,
  dmAppendUserVariableToParameterizedString,
  dmCreateAssetItemFromLocalFile,
  dmCreateHtmlContentItem,
  dmCreateLiveVideoContentItem,
  dmCreateMrssDataFeedContentItem,
  dmCreateVideoStreamContentItem,
  dmGetDataFeedByName,
  dmGetEmptyParameterizedString,
  dmGetHtmlSiteByName,
  dmGetParameterizedStringFromString,
  dmGetUserVariableById,
  dmGetUserVariableByName,
  dmGetZoneMediaStateContainer,
  dmGetSignState,
  dmNewSign,
  dmUpdateSignAudioPropertyMap,
  dmUpdateSignProperties,
  dmUpdateSignSerialPorts,
  dmUpdateZone,
  dmUpdateZoneProperties,
} from '@brightsign/bsdatamodel';

import {
  getBsAssetCollection
} from '@brightsign/bs-content-manager';

import * as Converters from './converters';

export function createSign(bpf : any, dispatch: Function, getState: Function) : void {
  newSign(bpf, dispatch);
  setSignProperties(bpf, dispatch, getState);
  setSignAudioProperties(bpf, dispatch);
  setSerialPortConfiguration(bpf, dispatch);
  addLiveDataFeeds(bpf.metadata.liveDataFeeds, dispatch);
  addUserVariables(bpf.metadata.userVariables, dispatch, getState);
  addHtmlSites(bpf.metadata.htmlSites, dispatch, getState);
  addZones(bpf, dispatch, getState);
}

function newSign(bpf : any, dispatch: Function) {
  const { name, videoMode, model } = bpf.metadata;
  dispatch(dmNewSign(name, videoMode, model));
}

function checkEnumKeyOfValue(enumType : any, value : string) : string | null {
  return getEnumKeyOfValue(enumType, value);
}

function setSignProperties(bpf : any, dispatch: Function, getState: Function) {

  let state = getState();

  let signAction : SignAction;
  let signState : DmSignState;
  let signMetadata : DmSignMetadata;
  let signProperties : DmSignProperties;

  signState = dmGetSignState(state.bsdm);
  signMetadata = signState.sign;
  signProperties = signMetadata.properties;

  let {
    alphabetizeVariableNames,
    autoCreateMediaCounterVariables,
    delayScheduleChangeUntilMediaEndEvent,
    deviceWebPageDisplay,
    flipCoordinates,
    forceResolution,
    graphicsZOrder,
    htmlEnableJavascriptConsole,
    inactivityTime,
    inactivityTimeout,
    isMosaic,
    language,
    languageKey,
    monitorOrientation,
    monitorOverscan,
    resetVariablesOnPresentationStart,
    tenBitColorEnabled,
    touchCursorDisplayMode,
    udpDestinationAddress,
    udpDestinationAddressType,
    udpDestinationPort,
    udpReceiverPort,
    videoConnector,
  } = bpf.metadata;

  if (!checkEnumKeyOfValue(DeviceWebPageDisplay, deviceWebPageDisplay)) debugger;
  if (!checkEnumKeyOfValue(GraphicsZOrderType, graphicsZOrder)) debugger;
  if (!checkEnumKeyOfValue(LanguageType, language)) debugger;
  if (!checkEnumKeyOfValue(LanguageKeyType, languageKey)) debugger;
  if (!checkEnumKeyOfValue(MonitorOrientationType, monitorOrientation)) debugger;

  // TODO NoOverscan vs. noOverscan
  // if (!checkEnumKeyOfValue(MonitorOverscanType, monitorOverscan)) debugger;
  // if (!checkEnumKeyOfValue(TouchCursorDisplayModeType, touchCursorDisplayMode)) debugger;
  if (!checkEnumKeyOfValue(UdpAddressType, udpDestinationAddressType)) debugger;
  if (!checkEnumKeyOfValue(VideoConnectorType, videoConnector)) debugger;

  const { a, r, g, b } = bpf.metadata.backgroundScreenColor;
  const backgroundScreenColor : BsColor = { a, r, g, b };

  signAction = dispatch(dmUpdateSignProperties(
    {
      id : signProperties.id,
      alphabetizeVariableNames,
      autoCreateMediaCounterVariables,
      backgroundScreenColor,
      delayScheduleChangeUntilMediaEndEvent,
      deviceWebPageDisplay,
      flipCoordinates,
      forceResolution,
      graphicsZOrder,
      htmlEnableJavascriptConsole,
      inactivityTime,
      inactivityTimeout,
      isMosaic,
      language,
      languageKey,
      monitorOrientation,
      monitorOverscan,
      resetVariablesOnPresentationStart,
      tenBitColorEnabled,
      touchCursorDisplayMode,
      udpDestinationAddress,
      udpDestinationAddressType,
      udpDestinationPort,
      udpReceiverPort,
      videoConnector,
    }
  ));
}

function setSignAudioProperties(bpf : any, dispatch : Function) {

  const bpfAudioVolumeNames : Array<string> = [
    'audio1',
    'audio2',
    'audio3',
    'hdmi',
    'spdif',
    'usbA',
    'usbB',
    'usbC',
    'usbD',
  ];

  const bpfxAudioOutputs: Array<string> = [
    'analog1',
    'analog2',
    'analog3',
    'hdmi',
    'spdif',
    'usbA',
    'usbB',
    'usbC',
    'usbD',
  ];

  let audioSignPropertyMap : DmAudioSignPropertyMap = {};
  let audioSignProperties : DmAudioSignProperties;

  for (let i = 0; i < bpfAudioVolumeNames.length; i++) {
    audioSignProperties = {
      min: bpf.metadata[bpfAudioVolumeNames[i] + 'MinVolume'],
      max: bpf.metadata[bpfAudioVolumeNames[i] + 'MaxVolume'],
    };
    audioSignPropertyMap[bpfxAudioOutputs[i]] = audioSignProperties;
  }

  const audioSignPropertyMapParams : AudioSignPropertyMapParams = {
    params : audioSignPropertyMap
  };

  dispatch(dmUpdateSignAudioPropertyMap(audioSignPropertyMapParams));
}

function setSerialPortConfiguration(bpf : any, dispatch: Function) {

  let serialPortList : DmSerialPortList = [];

  bpf.metadata.SerialPortConfigurations.forEach( (serialPortConfiguration : any) => {
    serialPortList.push(serialPortConfiguration);
  });

  let serialPortListParams : SerialPortListParams = {
    params : serialPortList
  };

  dispatch(dmUpdateSignSerialPorts(serialPortListParams));
}

function buildAudioOutputAssignmentMap(zoneSpecificParameters : any) : DmAudioOutputAssignmentMap {

  const bpfAudioOutputs : Array<string> = [
    'analogOutput',
    'analog2Output',
    'analog3Output',
    'hdmiOutput',
    'spdifOutput',
    'usbOutputA',
    'usbOutputB',
    'usbOutputC',
    'usbOutputD',
  ];

  const bpfxAudioOutputs: Array<string> = [
    'analog1',
    'analog2',
    'analog3',
    'hdmi',
    'spdif',
    'usbA',
    'usbB',
    'usbC',
    'usbD',
  ];

  let audioOutputAssignments: DmAudioOutputAssignmentMap = {};

  for (let i = 0; i < bpfAudioOutputs.length; i++) {
    audioOutputAssignments[bpfxAudioOutputs[i]] = Converters.getAudioOutputType(zoneSpecificParameters[bpfAudioOutputs[i]]);
  }

  return audioOutputAssignments;
}

function setZoneProperties(bpfZone : any, zoneId : BsDmId, zoneType : ZoneType, dispatch : Function) {
  switch (zoneType) {
    case ZoneType.VideoOrImages: {

      const zoneSpecificParameters = bpfZone.zoneSpecificParameters;

      const imageMode : ImageModeType = Converters.getImageMode(zoneSpecificParameters.imageMode);

      let imageZonePropertyData : DmImageZonePropertyData = {
        imageMode,
      };
      let imageZoneProperties : DmImageZoneProperties = imageZonePropertyData;

      let audioOutputAssignmentMap : DmAudioOutputAssignmentMap = buildAudioOutputAssignmentMap(zoneSpecificParameters);

      if (!checkEnumKeyOfValue(AudioMixModeType, zoneSpecificParameters.audioMixMode)) debugger;

      let audioZonePropertyData : DmAudioZonePropertyData = {
        audioOutput : Converters.getAudioOutput(zoneSpecificParameters.audioOutput),
        audioMode : Converters.getAudioMode(zoneSpecificParameters.audioMode),
        audioMapping : Converters.getAudioMapping(zoneSpecificParameters.audioMapping),
        audioOutputAssignments : audioOutputAssignmentMap,
        audioMixMode : zoneSpecificParameters.audioMixMode,
        audioVolume : zoneSpecificParameters.audioVolume,
        minimumVolume : zoneSpecificParameters.minimumVolume,
        maximumVolume : zoneSpecificParameters.maximumVolume,
      };

      if (!checkEnumKeyOfValue(LiveVideoInputType, zoneSpecificParameters.liveVideoInput)) debugger;
      if (!checkEnumKeyOfValue(LiveVideoStandardType, zoneSpecificParameters.liveVideoStandard)) debugger;
      if (!checkEnumKeyOfValue(AudioMixModeType, zoneSpecificParameters.audioMixMode)) debugger;

      // TODO mosaicDecoderName if mosiac is invoked
      let videoZonePropertyData : DmVideoZonePropertyData = {
        viewMode : Converters.getViewMode(zoneSpecificParameters.viewMode),
        liveVideoInput : zoneSpecificParameters.liveVideoInput,
        liveVideoStandard : zoneSpecificParameters.liveVideoStandard,
        videoVolume : zoneSpecificParameters.videoVolume,
        brightness : zoneSpecificParameters.brightness,
        contrast : zoneSpecificParameters.contrast,
        saturation : zoneSpecificParameters.saturation,
        hue : zoneSpecificParameters.hue,
        zOrderFront : zoneSpecificParameters.zOrderFront,
        mosaic : zoneSpecificParameters.mosaic,
        maxContentResolution : Converters.getMosaicMaxContentResolution(zoneSpecificParameters.maxContentResolution),
        mosaicDecoderName: ''
      };

      let videoZoneProperties : DmVideoZoneProperties =
        Object.assign({}, videoZonePropertyData, audioZonePropertyData);

      let zonePropertyParams : VideoOrImagesZonePropertyParams =
        Object.assign({}, videoZoneProperties, imageZoneProperties);

      let zonePropertyUpdateParams : ZonePropertyUpdateParams = {
        id: zoneId,
        type: ZoneType.VideoOrImages,
        properties : zonePropertyParams
      }
      let updateZonePropertyThunkAction : BsDmThunkAction<ZonePropertyUpdateParams> = dmUpdateZoneProperties(zonePropertyUpdateParams);
      let updateZonePropertyAction : ZonePropertyUpdateAction = dispatch(updateZonePropertyThunkAction);

      break;
    }
    case ZoneType.VideoOnly: {
      break;
    }
    case ZoneType.Images: {
      break;
    }
    case ZoneType.AudioOnly: {
      break;
    }
    case ZoneType.EnhancedAudio: {
      break;
    }
    case ZoneType.Ticker: {
      break;
    }
    case ZoneType.Clock: {
      break;
    }
    case ZoneType.BackgroundImage: {
      break;
    }
    default: {
      debugger;
      break;
    }
  }
}

// TODO HACK HACK HACK
// windows folders that may be encountered during testing and hacks to convert to MAC paths
function fixFilePath(bpfFilePath : string) : string {

  let baconFilePath = bpfFilePath;

  if (bpfFilePath.startsWith("\\\\Mac\\Home\\Documents\\All Media\\html\\charliessubsT\\index.html")) {
    baconFilePath = "/Users/tedshaffer/Documents/All Media/html/charliessubsT/index.html";
  }
  else if (bpfFilePath.startsWith("\\\\Mac\\Home\\Documents\\All Media\\")) {

    const bpfPartialFilePath = bpfFilePath.substr(31);

    const baconPartialFilePath = bpfPartialFilePath.replace("\\", "/");
    const baconPartialFolderPath = "/Users/tedshaffer/Documents/All Media/";

    baconFilePath = path.join(baconPartialFolderPath, baconPartialFilePath);
  }

  return baconFilePath;
}


function buildZonePlaylist(bpfZone : any, zoneId : BsDmId, dispatch : Function, getState : Function) {

  let mediaStateIds: BsDmId[] = [];
  let eventIds: BsDmId[] = [];
  let transitionTypes : TransitionType[] = [];
  let transitionDurations : number[] = [];

  bpfZone.playlist.states.forEach( (state : any, index : number) => {
    let zone : DmMediaStateContainer = dmGetZoneMediaStateContainer(zoneId);
    switch (state.type) {
      case 'imageItem': {
        const { file, fileIsLocal, slideDelayInterval, transitionDuration, videoPlayerRequired } = state;
        // TODO - specify additional parameters

        const filePath = fixFilePath(file.path);
        const bsAssetItem : BsAssetItem = getAssetItemFromFile(filePath);

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState(bsAssetItem.name, zone, bsAssetItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        let eventAction : any = dispatch(dmAddEvent('timeout', EventType.Timer, mediaStateParams.id,
          { interval : slideDelayInterval } ));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(TransitionType.NoEffect);
        transitionDurations.push(transitionDuration);

        break;
      }
      case 'videoItem': {
        const { automaticallyLoop, file, fileIsLocal, videoDisplayMode, volume } = state;

        const filePath = fixFilePath(file.path);
        const bsAssetItem : BsAssetItem = getAssetItemFromFile(filePath);

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState(bsAssetItem.name, zone, bsAssetItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        let eventAction : any = dispatch(dmAddEvent('mediaEnd', EventType.MediaEnd, mediaStateParams.id));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(null);
        transitionDurations.push(0);

        // TODO - do this for all states?
        if (index === 0) {
          dispatch(dmUpdateZone({
            id: zoneId,
            initialMediaStateId : mediaStateParams.id,
          }));
        }

        break;
      }

      case 'liveVideoItem': {
        const { overscan, timeOnScreen, volume } = state;

        // TODO - name?
        const liveVideoContentItem : DmLiveVideoContentItem = dmCreateLiveVideoContentItem('liveVideo', volume, overscan)

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState('liveVideo', zone, liveVideoContentItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        let eventAction : any = dispatch(dmAddEvent('timeout', EventType.Timer, mediaStateParams.id,
          { interval : timeOnScreen } ));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(null);
        transitionDurations.push(0);
        break;
      }

      case 'videoStreamItem': {

        const { timeOnScreen } = state;
        const videoStreamUrl = state.url;

        // TODO - put in common function (addLiveDataFeeds)
        const parameterValue : any = videoStreamUrl;
        let url : DmParameterizedString = dmGetEmptyParameterizedString();

        parameterValue.parameterValueItems.forEach( (parameterValueItem : any) => {
          switch (parameterValueItem.type) {
            case 'textValue': {
              url = dmAppendStringToParameterizedString(url, parameterValueItem.textValue);
              break;
            }
            case 'userVariable': {
              url = dmAppendUserVariableToParameterizedString(url, parameterValueItem.userVariable.name);
              break;
            }
            default: {
              debugger;
              break;
            }
          }
        });

        // TODO
        // const videoStreamContentItem : DmVideoStreamContentItem = dmCreateVideoStreamContentItem('videoStream', url);
        // const urlPS : DmParameterizedString =  dmGetParameterizedStringFromString(url.parameterValue.parameterValueItemText.value);
        const videoStreamContentItem : DmVideoStreamContentItem = dmCreateVideoStreamContentItem('videoStream', url);

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState('videoStream', zone, videoStreamContentItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        let eventAction : any = dispatch(dmAddEvent('timeout', EventType.Timer, mediaStateParams.id,
          { interval : timeOnScreen } ));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(null);
        transitionDurations.push(0);
        break;
      }
      case 'mrssDataFeedItem': {

        const dmcDataFeed : DmcDataFeed = dmGetDataFeedByName(getState().bsdm, { name : state.liveDataFeedName });

        // export function dmCreateMrssDataFeedContentItem(name: string, dataFeedId: BsDmId, videoPlayerRequired?: boolean): DmMrssDataFeedContentItem;
        const mrssDataFeedContentItem : DmMrssDataFeedContentItem = dmCreateMrssDataFeedContentItem(
          state.stateName, dmcDataFeed.id, state.videoPlayerRequired);

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState(state.stateName, zone, mrssDataFeedContentItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        // TODO - timeOnScreen??
        let eventAction : any = dispatch(dmAddEvent('timeout', EventType.Timer, mediaStateParams.id,
          { interval : 10 } ));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(null);
        transitionDurations.push(0);
        break;
      }
      case 'html5Item': {
        console.log(state);

        let { enableExternalData, enableMouseEvents, displayCursor, htmlSiteName, hwzOn, name, timeOnScreen, type, useUserStylesheet, userStylesheet } = state;

        const dmcHtmlSite: DmcHtmlSite = dmGetHtmlSiteByName(getState().bsdm, { name : htmlSiteName });

        // userStylesheetAssetId - TODO
        // no customFonts
        let htmlContentItem : DmHtmlContentItem = dmCreateHtmlContentItem(name, dmcHtmlSite.id, enableExternalData,
          enableMouseEvents, displayCursor, hwzOn, useUserStylesheet);

        let addMediaStateThunkAction : BsDmThunkAction<MediaStateParams> = dmAddMediaState(state.stateName, zone, htmlContentItem);
        let mediaStateAction : MediaStateAction = dispatch(addMediaStateThunkAction);
        let mediaStateParams : MediaStateParams = mediaStateAction.payload;

        let eventAction : any = dispatch(dmAddEvent('timeout', EventType.Timer, mediaStateParams.id,
          { interval : timeOnScreen } ));
        let eventParams : EventParams = eventAction.payload;

        mediaStateIds.push(mediaStateParams.id);
        eventIds.push(eventParams.id);
        transitionTypes.push(null);
        transitionDurations.push(0);
        break;
      }
      default:
        break;
    }
  });

  // add transitions to all media states
  for (let i = 0; i < (mediaStateIds.length - 1); i++) {
    const transitionAction : TransitionAction = dispatch(dmAddTransition('', eventIds[i],
      mediaStateIds[i + 1], transitionTypes[i], transitionDurations[i]));
  }
  // TODO - best way to do this when some of the transitions don't have transitionTypes / transitionDurations?
  const transitionAction : TransitionAction = dispatch(dmAddTransition('', eventIds[mediaStateIds.length - 1],
    mediaStateIds[0], transitionTypes[mediaStateIds.length - 1], transitionDurations[mediaStateIds.length - 1]));

}

function convertParameterValue(bpfParameterValue : any) : DmParameterizedString {

  let parameterValue : DmParameterizedString = dmGetEmptyParameterizedString();

  bpfParameterValue.parameterValueItems.forEach( (parameterValueItem : any) => {
    switch (bpfParameterValue.type) {
      case 'textValue': {
        parameterValue = dmAppendStringToParameterizedString(parameterValue, parameterValueItem.textValue);
        break;
      }
      case 'userVariable': {
        parameterValue = dmAppendUserVariableToParameterizedString(parameterValue, parameterValueItem.userVariable.name);
        break;
      }
      default: {
        debugger;
        break;
      }
    }
  });

  return parameterValue;
}

function addLiveDataFeeds(liveDataFeeds: any, dispatch : Function) {

  liveDataFeeds.forEach( (liveDataFeed : any) => {

    let { autoGenerateUserVariables, dataFeedUse, name, parsePluginName, updateInterval, useHeadRequest, userVariableAccess, uvParserPluginName } = liveDataFeed;

    // convert parserPluginName to BsDmId and use
    // convert userVariableAccess to AccessType and use
    let url : DmParameterizedString = dmGetEmptyParameterizedString();
    if (liveDataFeed.liveDynamicPlaylist) {
      url =  dmGetParameterizedStringFromString(liveDataFeed.liveDynamicPlaylist.url);

      // const bsnFeedProperties : BsnFeedProperties = {
      //   type: 'BSNDynamicPlaylist',
      //   supportsAudio: liveDataFeed.liveDynamicPlaylist.supportsAudio,
      //   supportsVideo: liveDataFeed.liveDynamicPlaylist.supportsVideo,  // TODO - is supportsVideo a field
      //   supportsImages: true, // TODO
      //   content : null,
      //   location : AssetLocation.Bsn,
      // };

      /*
       id: number;
       name: string;
       physicalPath: string;
       fileSize: number;
       fileHash: string;
       creationDate: Date;
       */
      // dmAddBsnDataFeed(bsnDataFeed: BsnFeedProperties, usage: DataFeedUsageType, name?: string, updateInterval?: number, useHeadRequest?: boolean, parserPlugin?: BsDmId, autoGenerateUserVariables?: boolean, userVariableAccess?: AccessType, supportsAudio?: boolean, matchPlayerTags?: boolean): BsnDataFeedAction;
      // TODO - should be creating a dmBsnDataFeed but documentation is not clear to me
    }
    else {
      const parameterValue : any = liveDataFeed.url;

      parameterValue.parameterValueItems.forEach( (parameterValueItem : any) => {
        switch (parameterValueItem.type) {
          case 'textValue': {
            url = dmAppendStringToParameterizedString(url, parameterValueItem.textValue);
            break;
          }
          case 'userVariable': {
            url = dmAppendUserVariableToParameterizedString(url, parameterValueItem.userVariable.name);
            break;
          }
          default: {
            debugger;
            break;
          }
        }
      });
    }

    let dataFeedAction : DataFeedAction = dmAddDataFeed(name, url, dataFeedUse, updateInterval, useHeadRequest, '', autoGenerateUserVariables, AccessType.Private);
    dispatch(dataFeedAction);
  });
}

function addUserVariables(userVariables : any, dispatch : Function, getState : Function) {

  userVariables.forEach( (userVariable : any) => {

    console.log(userVariable);

    let { access, defaultValue, liveDataFeedName, name, networked, systemVariable } = userVariable;

    let dataFeedId : string = '';
    if (liveDataFeedName !== '') {
      const dmcDataFeed : DmcDataFeed = dmGetDataFeedByName(getState().bsdm, { name : liveDataFeedName });
      dataFeedId = dmcDataFeed.id;
    }

    let userVariableAction : UserVariableAction = dmAddUserVariable(name, defaultValue, access, networked, dataFeedId, systemVariable);
    dispatch(userVariableAction);
  });
}

function addHtmlSites(htmlSites : any, dispatch : Function, getState : Function) {

  htmlSites.forEach( (htmlSite : any) => {
    console.log(htmlSite);

    let { name, filePath } = htmlSite;
    let queryString = '';

    filePath = fixFilePath(filePath);
    const bsAssetItem : BsAssetItem = getAssetItemFromFile(filePath);

    const htmlSiteLocalAction : HtmlSiteLocalAction = dmAddLocalHtmlSite(name, bsAssetItem.id, queryString);
    dispatch(htmlSiteLocalAction);
  })
}


function addZones(bpf : any, dispatch : Function, getState : Function) {

  bpf.zones.forEach( (bpfZone : any) => {

    let { x, y, width, height } = bpfZone;

    const zoneRect : BsRect = {
      x,
      y,
      width,
      height,
      pct: false
    };
    const zoneAction : ZoneAction = dispatch(dmAddZone(bpfZone.name, bpfZone.type, bpfZone.id, zoneRect, true));

    const zoneId : BsDmId = zoneAction.payload.id;
    const zoneType : ZoneType = zoneAction.payload.type;

    setZoneProperties(bpfZone, zoneId, zoneType, dispatch);

    buildZonePlaylist(bpfZone, zoneId, dispatch, getState);
  });
}