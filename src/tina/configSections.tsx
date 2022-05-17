import {
  HeaderBlock,
  HelloBlock,
  ServicesBlock,
  ConclusionBlock,
} from "@tina/sections/home";

import { WelcomeBlock, OurWorkBlock } from "@tina/sections/unicorns";

import { JurisdictionsContryBlock, SomeBlock } from "@tina/sections/darkside";

import {
  WelcomeBlockSidious,
  WidgetBlockSidious,
  AdaptationBlock,
  PlatformBenefitsBlock,
  ImprovingBlock,
  HowItWorksBlock,
} from "@tina/sections/sidious";

import {
  WelcomeBlockDS,
  WidgetBlock,
  JurisdictionsBlock,
} from "@tina/sections/darkside";

import {
  WelcomeBlockEsoque,
  AboutBlock,
  GraphBlock,
} from "@tina/sections/esoque";

export const HOME_BLOCKS = {
  headerBlock: HeaderBlock,
  helloBlock: HelloBlock,
  servicesBlock: ServicesBlock,
  conclusionBlock: ConclusionBlock,
};

export const UNICORNS_BLOCKS = {
  welcomeBlock: WelcomeBlock,
  ourWorkBlock: OurWorkBlock,
};

export const DARKSIDE_BLOCKS = {
  welcomeBlock: WelcomeBlockDS,
  widgetBlock: WidgetBlock,
  jurisdictionsBlock: JurisdictionsBlock,
  jurisdictionsCountryBlock: JurisdictionsContryBlock,
  someBlock: SomeBlock,
};

export const SIDIOUS_BLOCKS = {
  welcomeBlock: WelcomeBlockSidious,
  widgetBlock: WidgetBlockSidious,
  adaptationBlock: AdaptationBlock,
  platformBenefitsBlock: PlatformBenefitsBlock,
  improvingBlock: ImprovingBlock,
  howItWorksBlock: HowItWorksBlock,
};

export const ESOQUE_BLOCKS = {
  welcomeBlock: WelcomeBlockEsoque,
  aboutBlock: AboutBlock,
  graphBlock: GraphBlock,
};
